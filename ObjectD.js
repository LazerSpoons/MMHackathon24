import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ObjectD = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Evidence: Phone</Text>
			<Text style={styles.text}>Phone - Belongs to Joseph.</Text>
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

export default ObjectD;
