import * as SQLite from "expo-sqlite";
import {useState, useEffect} from "react";
import * as FileSystem from "expo-file-system";

export const useDatabase = (dbName) => {
	const db = SQLite.openDatabase(dbName);

	// SQL запити для створення таблиць
	const createTables = () => {
		const queries = [
			`CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        notes TEXT
      );`,

			`CREATE TABLE IF NOT EXISTS Trainings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        date DATETIME NOT NULL,
        notes TEXT,
        session_number INTEGER,
        FOREIGN KEY (user_id) REFERENCES Users(id)
      );`,

			`CREATE TABLE IF NOT EXISTS Exercises (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        category TEXT
      );`,

			`CREATE TABLE IF NOT EXISTS WorkoutExercises (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        training_id INTEGER NOT NULL,
        exercise_id INTEGER NOT NULL,
        sets INTEGER,
        reps INTEGER,
        weight REAL,
        duration INTEGER,
        name TEXT,
        FOREIGN KEY (training_id) REFERENCES Trainings(id),
        FOREIGN KEY (exercise_id) REFERENCES Exercises(id)
      );`,

			`CREATE TABLE IF NOT EXISTS Templates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
      );`,

			`CREATE TABLE IF NOT EXISTS TemplateExercises (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        template_id INTEGER NOT NULL,
        exercise_id INTEGER NOT NULL,
        sets INTEGER,
        reps INTEGER,
        weight REAL,
        duration INTEGER,
        name TEXT,
        FOREIGN KEY (template_id) REFERENCES Templates(id),
        FOREIGN KEY (exercise_id) REFERENCES Exercises(id)
      );`,

			`CREATE TABLE IF NOT EXISTS Payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        sessions_paid INTEGER NOT NULL,
        date DATETIME NOT NULL,
        notes TEXT,
        FOREIGN KEY (user_id) REFERENCES Users(id)
      );`,
		];

		// Виконання SQL запитів
		queries.forEach((query) => {
			db.transaction((tx) => {
				tx.executeSql(query);
			});
		});
	};

	useEffect(() => {
		const checkDatabaseExists = async () => {
			const dbUri = FileSystem.documentDirectory + dbName;

			// Перевірка наявності бази даних
			const fileInfo = await FileSystem.getInfoAsync(dbUri);
			if (!fileInfo.exists) {
				// Якщо база не існує, створюємо нову базу даних
				createTables();
			}
		};

		checkDatabaseExists();
	}, [db]);

	return db;
};
