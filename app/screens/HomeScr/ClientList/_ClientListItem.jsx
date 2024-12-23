import React from "react";
import {Text, View, Pressable} from "react-native";
import {basic} from "~/styles/basic.styles";

export default function ClientListItem({item, index, onDelete}) {
	return (
		<View style={basic.itemContainer}>
			<Pressable style={basic.itemLookArea}>
				<Text style={basic.itemTextName}>{item}</Text>
				<Text style={basic.itemTextDate}>Date</Text>
			</Pressable>
			<Pressable onPress={onDelete} style={basic.itemDelBtn}>
				{/* <DeleteIcon style={basic.itemDelBtnImg} /> */}
			</Pressable>
		</View>
	);
}
