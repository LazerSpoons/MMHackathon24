import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

const GuessScreen = () => {
	const [guess, setGuess] = useState("");
	const [feedback, setFeedback] = useState("");

	const checkGuess = () => {
		if (["Emily", "Joseph", "Charles"].includes(guess)) {
			setFeedback("Wrong!");
		} else if (guess === "Jane") {
			setFeedback("Correct!");
		} else {
			setFeedback("Hint: It's either Emily, Joseph, Jane, or Charles!");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Who did it?</Text>
			<TextInput
				style={styles.input}
				placeholder='Enter your guess'
				onChangeText={(text) => setGuess(text)}
				value={guess}
			/>
			<TouchableOpacity style={styles.button} onPress={checkGuess}>
				<Text style={styles.buttonText}>Submit Guess</Text>
			</TouchableOpacity>
			//this should work
			{feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
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
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		marginBottom: 20,
		width: "80%",
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
	feedback: {
		marginTop: 20,
		fontSize: 24,
		color: "#fff",
		fontFamily: "Courier",
	},
});

export default GuessScreen;
