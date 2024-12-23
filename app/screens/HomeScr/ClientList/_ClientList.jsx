import React, {useState} from "react";
import {Text, View, FlatList, Pressable} from "react-native";
import {basic} from "~/styles/basic.styles";
import ClientListItem from "./_ClientListItem";
import AddClientModal from "./modals/_AddClientModal";
import DeleteClientModal from "./modals/_DelModal";

export default function ClientList() {
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
			setClients([...clients, clientName.trim()]);
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

	return (
		<View style={basic.containerListScreen}>
			{/* Панель керування списком */}
			<View style={basic.listControlPanel}>
				<Pressable onPress={openAddModal} style={basic.listControlBtns} />
			</View>

			{/* Модальне вікно додавання клієнта */}
			<AddClientModal
				visible={addModal}
				onClose={closeAddModal}
				onAdd={addItem}
				clientName={clientName}
				setClientName={setClientName}
			/>

			{/* Модальне вікно видалення клієнта */}
			<DeleteClientModal
				visible={delModal}
				onClose={closeDelModal}
				onDel={delItem}
				clientName={clientToDelete ? clientToDelete.clientName : ""}
			/>

			{/* Список клієнтів */}
			<FlatList
				style={basic.listClients}
				data={clients}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item, index}) => (
					<ClientListItem
						item={item}
						index={index}
						onDelete={() => openDelModal(index, item)}
					/>
				)}
			/>
		</View>
	);
}
