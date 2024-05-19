import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ObjectA = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Evidence: Body Outline</Text>
			<Text style={styles.text}>
				Body outline - Outline of John’s body as how he was found Sunday
				morning.
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
		textAlign: "center  ",
		fontFamily: "Courier",
	},
});

export default ObjectA;
