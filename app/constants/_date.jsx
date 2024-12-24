export const formatDateTime = (date) => {
	const hours = date.getHours().toString().padStart(2, "0"); // Години
	const minutes = date.getMinutes().toString().padStart(2, "0"); // Хвилини
	const day = date.getDate().toString().padStart(2, "0"); // День
	const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Місяць
	const year = date.getFullYear().toString(); // Рік
	return `${hours}:${minutes} ${day}.${month}.${year}`;
};
export default formatDateTime;
