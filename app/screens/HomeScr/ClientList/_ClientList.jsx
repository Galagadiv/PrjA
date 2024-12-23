import React, {useState} from "react";
import {Text, View, FlatList, Pressable} from "react-native";
import {basic} from "~/styles/basic.styles";
import ClientListItem from "./_ClientListItem";
import AddClientModal from "./modals/_AddClientModal";
import DeleteClientModal from "./modals/_DelModal";

export default function ClientList() {
	const [clients, setClients] = useState([]);
	const [addModal, setAddModal] = useState(false);
	const [delModal, setDelModal] = useState(false);

	const [clientName, setClientName] = useState("");
	const [clientToDelete, setClientToDelete] = useState(null);

	// Відкрити/закрити модальне вікно
	const openAddModal = () => setAddModal(true);
	const closeAddModal = () => {
		setAddModal(false);
		setClientName("");
	};

	// const openDelModal = () => setDelModal(true);
	const openDelModal = (index, clientName) => {
		setClientToDelete({index, clientName}); // зберігаємо індекс і ім'я клієнта
		setDelModal(true); // відкриваємо модалку
	};
	const closeDelModal = () => setDelModal(false);

	// Додати елемент
	const addItem = () => {
		if (clientName.trim() !== "") {
			setClients([...clients, clientName.trim()]);
			setClientName(""); // Очищення після додавання
			closeAddModal();
		}
	};

	// Видалити конкретний елемент
	const delItem = () => {
		if (clientToDelete) {
			setClients(clients.filter((_, i) => i !== clientToDelete.index)); // видаляємо елемент за індексом
			setDelModal(false); // закриваємо модалку
		}
	};

	return (
		<View style={basic.containerListScreen}>
			<View style={basic.listControlPanel}>
				<Pressable
					onPress={openAddModal}
					style={basic.listControlBtns}
				></Pressable>
			</View>
			<AddClientModal
				visible={addModal}
				onClose={closeAddModal}
				onAdd={addItem}
				clientName={clientName}
				setClientName={setClientName}
			/>
			<DeleteClientModal
				visible={delModal}
				onClose={closeDelModal}
				onDel={delItem}
				clientName={clientToDelete ? clientToDelete.clientName : ""}
			/>

			<FlatList
				style={basic.listClients}
				data={clients}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item, index}) => (
					<ClientListItem
						item={item}
						index={index}
						onDelete={() => openDelModal(index, item)} // передаємо індекс і ім'я клієнта
					/>
				)}
			/>
		</View>
	);
}
