import React from "react";
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
} from "react-native";

const PaintingsDescriptions = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.child12}>
				<Image style={styles.image} source={props.imageSource} />
			</View>
			<View style={styles.child2}>
				<View style={styles.child3}>
					<Text style={props.textStyle}>{props.title}</Text>
				</View>
				<View style={styles.child4}>
					<Text style={props.textStyle}>{props.author}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: null,
		width: null,
		aspectRatio: 1,
	},
	container: {
		backgroundColor: "white",
		flex: 1,

		flexDirection: "row",
	},
	child2: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
	},
	child12: {
		flex: 1,
		borderColor: "black",
		borderWidth: 3,
	},
	child3: {
		backgroundColor: "#fadfb4",
		flex: 1,
		borderColor: "#3b3224",
		borderWidth: 3,
		fontFamily: "Courier",
	},
	child4: {
		backgroundColor: "#ccb693",
		flex: 1,
		borderColor: "#3b3224",
		borderWidth: 3,
		fontFamily: "Courier",
	},
});

export default PaintingsDescriptions;
