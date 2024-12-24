import React, {useState} from "react";
import {Text, View, FlatList, Pressable} from "react-native";
import {basic} from "~/styles/basic.styles";
import ClientListItem from "./_ClientListItem";
import AddClientModal from "./modals/_AddClientModal";
import DeleteClientModal from "./modals/_DelModal";
import {useClientListLogic} from "./_ClientList.logic.jsx";

export default function ClientList() {
	// Отримуємо всі стани та функції з логіки
	const {
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
	} = useClientListLogic();

	return (
		<View style={basic.containerListScreen}>
			{/* Додавання елементів у список */}
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
						item={item.name}
						index={index}
						onDelete={() => openDelModal(index, item.name)}
						date={item.date}
					/>
				)}
			/>
		</View>
	);
}
