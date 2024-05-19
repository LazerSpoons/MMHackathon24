import React from "react";
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

const MurderMystery = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/backgorund.png")}
				style={styles.image}
			>
				<View style={styles.block}>
					<Text style={styles.title}>Murder Mystery</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("MurderScreen")}
					>
						<Text style={styles.buttonText}>Investigate</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("PeopleScreen")}
					>
						<Text style={styles.buttonText}>People</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("BackgroundScreen")}
					>
						<Text style={styles.buttonText}>Read Background</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	block: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 32,
		color: "#fff",
		marginBottom: 20,
		fontFamily: "Courier",
	},
	button: {
		backgroundColor: "#333",
		padding: 10,
		marginVertical: 10,
		width: "80%",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 20,
		color: "#fff",
		fontFamily: "Courier",
	},
});

export default MurderMystery;
