import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Registration from "./Screens/RegistrationScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"R-400": require("./assets/fonts/Roboto-Regular.ttf"),
		"R-500": require("./assets/fonts/Roboto-Medium.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Registration />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
