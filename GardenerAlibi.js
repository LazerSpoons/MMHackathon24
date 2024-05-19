import React from "react";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const GardenerAlibi = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Charles Carmine</Text>
			<Image style={styles.image} source={require("../assets/Gardener.png")} />
			<View style={styles.contentContainer}>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>Occupation: Gardener</Text>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>
					Relation to Victim: Victim's House Gardener
				</Text>
				<Text style={styles.contentText}></Text>
				<Text style={styles.contentText}>
					Q: What were you doing yesterday at the time of the murder?
				</Text>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>
					A: I went upstairs from the basement to use the bathroom after
					drinking yesterday and then went to sleep.
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

	contentContainer: {
		borderColor: "black",
		borderWidth: 8,
		backgroundColor: "#ccb693",
		color: "black",
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

export default GardenerAlibi;
