import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Button,
	Image,
	TouchableWithoutFeedback,
} from "react-native";

export default function Registration() {
	return (
		<View>
			<Image source={require("../assets/Empty.png")} style={styles.img} />
			<View>
				<Text style={styles.text}>Реєстрація</Text>
			</View>
			<TextInput style={styles.input} placeholder="Логін" />
			<TextInput style={styles.input} placeholder="Адреса електронної пошти" />
			<TextInput style={styles.input} placeholder="Пароль" />
			<TouchableWithoutFeedback
				onPress={() => console.log("Натиснули на Показати")}
			>
				<Text style={styles.textInInput}>Показати</Text>
			</TouchableWithoutFeedback>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.ButtonText}>Зареєструватися</Text>
			</TouchableOpacity>
			<Button title="Вже є акаунт? Увійти" color={"rgba(27 67 113/ 1)"} />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		marginTop: 20,
		marginBottom: 20,
		color: "rgba(33 33 33/ 1)",
		textAlign: "center",
		fontFamily: "R-500",
		fontSize: 30,
	},
	input: {
		fontFamily: "R-400",
		width: 343,
		height: 50,
		backgroundColor: "rgba(246 246 246/ 1)",
		borderWidth: 1,
		borderColor: "rgba(232 232 232/ 1)",
		borderRadius: 6,
		fontSize: 16,
		marginBottom: 15,
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
		marginTop: 20,
		marginBottom: 10,
		alignItems: "center",
	},
	ButtonText: {
		color: "rgba(255 255 255/ 1)",
		fontSize: 16,
	},
	img: {
		width: 120,
		height: 120,
		borderRadius: 16,
		left: "35%",
	},
	textInInput: {
		fontFamily: "R-400",
		fontSize: 16,
		color: "rgba(27 67 113/1)",
		top: "-9,5%",
		left: "70%",
	},
});
