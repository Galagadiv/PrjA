import React from "react";
import {View, Pressable, Modal, Text} from "react-native";
import {basic} from "~/styles/basic.styles";

export default function DeleteClientModal({
	visible,
	onClose,
	onDel,
	clientName,
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
					<Text>Are you sure you want to delete {clientName}?</Text>
					<View style={basic.addModalBtnsContainer}>
						<Pressable style={basic.buttonClose} onPress={onDel}>
							<Text style={basic.textStyle}>Delete</Text>
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
