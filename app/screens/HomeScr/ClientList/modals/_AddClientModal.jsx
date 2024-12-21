import React from "react";
import {View, TextInput, Pressable, Modal, Text} from "react-native";
import {basic} from "~/styles/basic.styles";

export function AddClientModal({
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
			<View style={basic.modalView}>
				<TextInput
					style={basic.addModalInput}
					onChangeText={setClientName}
					value={clientName}
					placeholder="Enter client name"
				/>
				<Pressable style={[basic.button, basic.buttonClose]} onPress={onAdd}>
					<Text style={basic.textStyle}>Add Client</Text>
				</Pressable>
			</View>
		</Modal>
	);
}
