export const deleteData = (tableName, id) => {
	if (db) {
		const query = `DELETE FROM ${tableName} WHERE id = ?;`;

		db.transaction((tx) => {
			tx.executeSql(
				query,
				[id], // Параметр для запиту
				() => {
					console.log(`${tableName} item deleted successfully`);
					fetchItems(); // Оновлюємо список після видалення
				},
				(tx, error) => {
					console.error(`Error deleting from ${tableName}: `, error);
					return false;
				}
			);
		});
	}
};

export default deleteData;
