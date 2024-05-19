import React from "react";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const WifeAlibi = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Jane Smith</Text>
			<Image style={styles.image} source={require("../assets/Wife.png")} />
			<View style={styles.contentContainer}>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>Occupation: Accountant</Text>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>Relation to Victim: Wife</Text>
				<Text style={styles.contentText}></Text>
				<Text style={styles.contentText}>
					Q: What were you doing yesterday at the time of the murder?
				</Text>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>
					A: I hid the alcohol yesterday so the boys wouldn't get drunk, and
					then I went straight to sleep.
				</Text>
			</View>
			<TouchableOpacity
				style={styles.tOpacity}
				onPress={() => props.navigation.navigate("PeopleScreen")}
			>
				<Text style={styles.returnText}>Return to Suspects</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fadfb4",
		alignItems: "center",
		justifyContent: "space-around",
	},

	title: {
		fontSize: 40,
		width: 400,
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#ccb693",
		textAlign: "center",
		borderColor: "black",
		borderWidth: 8,
		fontFamily: "Courier",
	},

	returnText: {
		fontSize: 30,
		width: 400,
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#ccb693",
		textAlign: "center",
		borderColor: "black",
		borderWidth: 8,
		fontFamily: "Courier",
	},

	contentContainer: {
		borderColor: "black",
		borderWidth: 8,
		backgroundColor: "#ccb693",
		color: "black",
		width: 400,
	},

	contentText: {
		fontSize: 20,
		fontFamily: "Courier",
	},

	image: {
		height: 250,
		width: 250,
		flexDirection: "row",
		justifyContent: "space-around",
		alignContent: "center",
	},
});

export default WifeAlibi;
