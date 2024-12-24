import {useState} from "react";
import {formatDateTime} from "~/constants/_date";

export function useClientListLogic() {
	// Стан для списку клієнтів та модалок
	const [clients, setClients] = useState([]);
	const [addModal, setAddModal] = useState(false);
	const [delModal, setDelModal] = useState(false);

	// Стан для керування ім'ям клієнта та вибраним клієнтом для видалення
	const [clientName, setClientName] = useState("");
	const [clientToDelete, setClientToDelete] = useState(null);

	// Відкрити/закрити модальне вікно додавання
	const openAddModal = () => setAddModal(true);
	const closeAddModal = () => {
		setAddModal(false);
		setClientName("");
	};
	// Додавання нового клієнта
	const addItem = () => {
		if (clientName.trim() !== "") {
			const now = new Date(); // Отримуємо поточну дату
			setClients([
				...clients,
				{name: clientName.trim(), date: formatDateTime(now)},
			]);
			closeAddModal();
		}
	};

	// Відкрити/закрити модальне вікно видалення
	const openDelModal = (index, clientName) => {
		setClientToDelete({index, clientName});
		setDelModal(true);
	};
	const closeDelModal = () => setDelModal(false);
	// Видалення клієнта
	const delItem = () => {
		if (clientToDelete) {
			setClients(clients.filter((_, i) => i !== clientToDelete.index));
			closeDelModal();
		}
	};

	return {
		clients,
		addModal,
		delModal,
		clientName,
		clientToDelete,
		setClientName,
		openAddModal,
		closeAddModal,
		addItem,
		openDelModal,
		closeDelModal,
		delItem,
	};
}
