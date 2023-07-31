import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Registration() {
	return (
		<View>
			<Text style={styles.text}>Регістрація</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "R-500",
		fontSize: 30,
	},
});
