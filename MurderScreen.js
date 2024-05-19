import React from "react";
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

const MurderScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/CrimeScene.png")}
				style={styles.image}
			>
				<TouchableOpacity
					style={[styles.floatingButton, { top: 255, left: 45 }]}
					onPress={() => navigation.navigate("ObjectB")}
				>
					<Text style={styles.buttonText3}>l</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.floatingButton, { top: 332, left: 272 }]}
					onPress={() => navigation.navigate("ObjectD")}
				>
					<Text style={styles.buttonText3}>l</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.floatingButton, { top: 242, left: 182 }]}
					onPress={() => navigation.navigate("ObjectA")}
				>
					<Text style={styles.buttonText3}>l</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.floatingButton, { top: 170, left: 165 }]}
					onPress={() => navigation.navigate("ObjectC")}
				>
					<Text style={styles.buttonText3}>l</Text>
				</TouchableOpacity>
			</ImageBackground>
			<View style={styles.block}>
				<Text style={styles.textStyle}>Click each letter to find clues</Text>
			</View>
			<View style={styles.block}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("PeopleScreen")}
				>
					<Text style={styles.buttonText}>Back to People</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.block2}>
				<TouchableOpacity onPress={() => navigation.navigate("GuessScreen")}>
					<Text style={styles.textStyle2}>Make a Guess?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 0.75,
		justifyContent: "center",
	},
	block: {
		flex: 0.083,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		borderColor: "black",
		borderWidth: 5,
		backgroundColor: "black",
	},
	block2: {
		flex: 0.083,
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 20,
		borderColor: "black",
		borderWidth: 5,
		backgroundColor: "black",
	},
	textStyle: {
		fontSize: 20,
		color: "#fff",
		fontFamily: "Courier",
	},
	textStyle2: {
		fontSize: 25,
		justifyContent: "flex-start",
		color: "#fff",
		fontFamily: "Courier",
		textDecorationLine: "underline",
	},
	title: {
		fontSize: 32,
		color: "#fff",
		marginBottom: 20,
		fontFamily: "Courier",
	},
	floatingButton: {
		position: "absolute",

		alignItems: "center",
	},
	button: {
		backgroundColor: "#333",

		width: "80%",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 20,
		color: "#fff",
		fontFamily: "Courier",
	},
	buttonText3: {
		fontSize: 40,
		color: "#fff",
		fontFamily: "Courier",
		opacity: 0,
	},
});

export default MurderScreen;
