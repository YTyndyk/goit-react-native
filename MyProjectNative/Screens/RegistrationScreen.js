import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Button,
} from "react-native";

export default function Registration() {
	return (
		<View>
			<TextInput style={styles.input} placeholder="Логін" />
			<TextInput style={styles.input} placeholder="Адреса електронної пошти" />
			<TextInput style={styles.input} placeholder="Пароль" />
			<TouchableOpacity style={styles.button}>
				<Text style={styles.ButtonText}>Зареєструватися</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontFamily: "R-400",
		width: 343,
		height: 50,
		backgroundColor: "rgba(246 246 246/ 1)",
		borderWidth: 1,
		borderColor: "rgba(232 232 232/ 1)",
		borderRadius: 6,
		fontSize: 16,
		marginBottom: 10,
		marginLeft: 16,
		marginRight: 16,
		paddingLeft: 10,
	},
	button: {
		fontFamily: "R-400",
		backgroundColor: "rgba(255 108 0/ 1)",
		width: 343,
		height: 51,
		paddingTop: 16,
		paddingRight: 32,
		paddingBottom: 16,
		paddingLeft: 32,
		marginLeft: 16,
		borderRadius: 100,
		alignItems: "center",
	},
	ButtonText: {
		color: "rgba(255 255 255/ 1)",
		fontSize: 16,
	},
});
