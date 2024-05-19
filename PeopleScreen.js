import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import ImageComponent from "../components/SuspectComponents";

const PeopleScreen = (props) => {
	return (
		<ScrollView>
			<Text style={styles.textf}>Suspects</Text>
			<TouchableOpacity
				style={styles.tOpacity}
				onPress={() => props.navigation.navigate("Wife")}
			>
				<ImageComponent
					textStyle={styles.famousText}
					title='Jane Smith'
					author='Wife'
					imageSource={require("../assets/Wife.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.tOpacity}
				onPress={() => props.navigation.navigate("Mistress")}
			>
				<ImageComponent
					textStyle={styles.famousText}
					title='Emily Stevenson'
					author='Mistress'
					imageSource={require("../assets/Mistress.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.tOpacity}
				onPress={() => props.navigation.navigate("Gardener")}
			>
				<ImageComponent
					textStyle={styles.famousText}
					title='Charles Carmine'
					author='Gardener'
					imageSource={require("../assets/Gardener.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.tOpacity}
				onPress={() => props.navigation.navigate("Friend")}
			>
				<ImageComponent
					textStyle={styles.famousText}
					title='Joseph Stevenson'
					author='Childhood Friend'
					imageSource={require("../assets/Friend.png")}
				/>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	textf: {
		fontSize: 40,
		flexDirection: "column",
		justifyContent: "space-around",
		backgroundColor: "#d9b986",
		textAlign: "center",
		borderColor: "black",
		borderWidth: 5,
		fontFamily: "Courier",
	},
	famousText: {
		fontSize: 30,
		flexDirection: "column",
		justifyContent: "space-around",
		textAlign: "center",
		fontFamily: "Courier",
	},
});

export default PeopleScreen;
