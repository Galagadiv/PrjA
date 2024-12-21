import React, {useState} from "react";
import {Text, View, FlatList, Pressable} from "react-native";
import {basic} from "~/styles/basic.styles";
import {Item} from "./_ClientListItem";
import {AddClientModal} from "./modals/_AddClientModal";
import AddIcon from "~/assets/images/icon-add.svg";

export function ClientList() {
	const [clients, setClients] = useState([]);
	const [addModal, setAddModal] = useState(false);
	const [clientName, setClientName] = useState("");

	// Відкрити/закрити модальне вікно
	const openAddModal = () => setAddModal(true);
	const closeAddModal = () => setAddModal(false);

	// Додати елемент
	const addItem = () => {
		if (clientName.trim() !== "") {
			setClients([...clients, clientName.trim()]);
			setClientName(""); // Очищення після додавання
			closeAddModal();
		}
	};

	// Видалити конкретний елемент
	const delItem = (index) => {
		setClients(clients.filter((_, i) => i !== index));
	};

	return (
		<View style={basic.containerListScreen}>
			<View style={basic.listControlPanel}>
				<Pressable onPress={openAddModal} style={basic.listControlBtns}>
					{/* <AddIcon style={basic.itemDelBtnImg} /> */}
				</Pressable>
			</View>
			<AddClientModal
				visible={addModal}
				onClose={closeAddModal}
				onAdd={addItem}
				clientName={clientName}
				setClientName={setClientName}
			/>
			<FlatList
				style={basic.listClients}
				data={clients}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item, index}) => (
					<Item item={item} index={index} onDelete={() => delItem(index)} />
				)}
			/>
		</View>
	);
}
