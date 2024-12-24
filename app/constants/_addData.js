export const addData = (tableName, columns, values) => {
	if (db) {
		// Створення SQL-запиту
		const columnsStr = columns.join(", "); // масив колонок як строка
		const placeholders = values.map(() => "?").join(", "); // Створюємо місця для параметрів (?)

		const query = `INSERT INTO ${tableName} (${columnsStr}) VALUES (${placeholders});`;

		db.transaction((tx) => {
			tx.executeSql(
				query,
				values, // Параметри для запиту (значення для кожної колонки)
				() => {
					console.log(`${tableName} item added successfully`);
					fetchItems(); // Оновлюємо список після додавання (якщо потрібно)
				},
				(tx, error) => {
					console.error(`Error inserting into ${tableName}: `, error);
					return false;
				}
			);
		});
	} else {
		console.log("Жопа");
	}
};

export default addData;
