import React from "react";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const FriendAlibi = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Joseph Stevenson</Text>
			<Image style={styles.image} source={require("../assets/Friend.png")} />
			<View style={styles.contentContainer}>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>Occupation: None</Text>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>
					Relation to Victim: Childhood Friend
				</Text>
				<Text style={styles.contentText}></Text>
				<Text style={styles.contentText}>
					Q: What were you doing yesterday at the time of the murder?
				</Text>
				<Text style={styles.contentText}> </Text>
				<Text style={styles.contentText}>
					A: I went to the bathroom after drinking soda yesterday and then I
					went straight to sleep. After waking up, my phone had a text from
					"Emily💗".
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
		fontSize: 35,
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

	contentText: {
		fontSize: 19,
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

	image: {
		height: 250,
		width: 250,
		flexDirection: "row",
		justifyContent: "space-around",
		alignContent: "center",
	},
});

export default FriendAlibi;
