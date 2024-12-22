import {StyleSheet} from "react-native";

// https://colorhunt.co/palette/f8fafcd9eafdbcccdc9aa6b2

// F8FAFC
// D9EAFD
// BCCCDC
// 9AA6B2 -
// CC2B52 -red

export const basic = StyleSheet.create({
	container: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "#D9EAFD",
		borderBottomWidth: 0.5,
	},
	headerTitle: {
		fontSize: 22,
	},
	containerListScreen: {
		padding: 10,
		flex: 1,
	},
	listClients: {
		width: "100%",
		rowGap: 20,
	},
	listControlPanel: {
		position: "absolute",
		right: 20,
		bottom: 20,
		maxHeight: 55,
		maxWidth: 55,
		flexDirection: "row",
		zIndex: 10,
	},
	listControlBtns: {
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		backgroundColor: "#BCCCDC",
		borderRadius: 15,
	},
	listControlBtnsText: {
		fontSize: 15,
	},
	itemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		// backgroundColor: "#F8FAFC",
		height: 75,
		borderWidth: 0.5,
		borderRadius: 15,
		marginBottom: 5,
	},
	itemLookArea: {
		flex: 1,
		backgroundColor: "#F8FAFC",
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		justifyContent: "center",
		padding: 5,
	},
	itemDelBtn: {
		width: 25,
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
		justifyContent: "center",
		backgroundColor: "#CC2B52",
	},
	itemDelBtnImg: {
		width: 20,
		height: 20,
		fill: "#fff",
	},
	AddModal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	addModalContainer: {
		height: 150,
		// paddingHorizontal: 10,
		backgroundColor: "#D9EAFD",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		borderWidth: 1,
	},
	addModalInput: {
		backgroundColor: "#fff",
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 10,
	},

	addModalBtnsContainer: {
		flexDirection: "row",
		// justifyContent: "space-between",
		gap: 50,
	},
	buttonClose: {
		justifyContent: "center",
		alignItems: "center",
		width: 75,
		height: 40,
		backgroundColor: "#CC2B52",
		borderRadius: 5,
		borderWidth: 1,
	},
	itemTextName: {
		fontSize: 20,
	},
});

export default basic;
