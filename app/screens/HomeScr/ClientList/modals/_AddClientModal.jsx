import React from "react";
import {View, TextInput, Pressable, Modal, Text} from "react-native";
import {basic} from "~/styles/basic.styles";

export default function AddClientModal({
	visible,
	onClose,
	onAdd,
	clientName,
	setClientName,
}) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={basic.AddModal}>
				<View style={basic.addModalContainer}>
					<TextInput
						style={basic.addModalInput}
						onChangeText={setClientName}
						value={clientName}
						placeholder="Enter client name"
					/>
					<View style={basic.addModalBtnsContainer}>
						<Pressable style={basic.buttonClose} onPress={onAdd}>
							<Text style={basic.textStyle}>Add</Text>
						</Pressable>
						<Pressable style={basic.buttonClose} onPress={onClose}>
							<Text style={basic.textStyle}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
}
