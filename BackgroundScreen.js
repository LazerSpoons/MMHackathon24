import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const BackgroundScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Background</Text>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Text style={styles.text}>
					The night before the murder, Joseph, John, and Charles were drinking
					soda from plastic bottles in the basement. Emily was also in the
					basement, already getting ready to go to bed.
				</Text>
				<Text style={styles.text}>
					Joseph decided to stay the night, and everybody except the two Smiths
					slept in the basement. After finishing the soda, Joseph and Charles
					went upstairs to use the bathroom and wash up.
				</Text>
				<Text style={styles.text}>
					In the morning, John was discovered dead in his bedroom, with various
					items around him possibly connected to his death.
				</Text>
				<Text style={styles.text}>
					Upon interviews and further investigation, it is determined that John
					fell out of his bed and there was a struggle before he died. You also
					notice the room smells vaguely of hand sanitizer.
				</Text>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		padding: 20,
	},
	scrollContainer: {
		alignItems: "center",
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
		textAlign: "justify",
		fontFamily: "Courier",
		marginBottom: 15,
	},
});

export default BackgroundScreen;
