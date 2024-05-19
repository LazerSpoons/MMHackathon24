import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ObjectC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Evidence: Broken Bottle</Text>
			<Text style={styles.text}>
				Broken bottle - Found next to the body, made of glass, blood all over.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		padding: 20,
		justifyContent: "center",
	},
	header: {
		fontSize: 32,
		color: "#fff",
		fontFamily: "Courier",
		marginBottom: 20,
		textAlign: "center",
	},
	text: {
		color: "#fff",
		fontSize: 18,
		lineHeight: 24,
		textAlign: "center",
		fontFamily: "Courier",
	},
});

export default ObjectC;
