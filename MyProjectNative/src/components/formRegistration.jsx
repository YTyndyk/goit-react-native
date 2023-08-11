import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	TouchableWithoutFeedback,
} from "react-native";

export default function FormRegistration() {
	const [focusLogin, setFocusLogin] = useState(false);
	const [focusEmail, setFocusEmail] = useState(false);
	const [focusPassword, setFocusPassword] = useState(false);
	const [isPasswordSecure, setIsPasswordSecure] = useState(true);

	return (
		<View>
			<View style={styles.user}>
				<Image source={require("../../assets/Empty.png")} style={styles.img} />
				<TouchableOpacity style={styles.iconAdd}>
					<Ionicons
						name="add-circle-outline"
						size={25}
						color="rgba(255 108 0/ 1)"
					/>
				</TouchableOpacity>
			</View>

			<View>
				<Text style={styles.text}>Реєстрація</Text>
			</View>

			<TextInput
				style={{
					...styles.input,
					borderColor: focusLogin ? "#FF6C00" : "#E8E8E8",
					backgroundColor: focusLogin ? "#fff" : "rgba(246 246 246/ 1)",
				}}
				placeholder="Логін"
				onFocus={() => setFocusLogin(true)}
				onBlur={() => setFocusLogin(false)}
			/>
			<TextInput
				style={{
					...styles.input,
					borderColor: focusEmail ? "#FF6C00" : "#E8E8E8",
					backgroundColor: focusEmail ? "#fff" : "rgba(246 246 246/ 1)",
				}}
				placeholder="Адреса електронної пошти"
				onFocus={() => setFocusEmail(true)}
				onBlur={() => setFocusEmail(false)}
			/>
			<TextInput
				style={{
					...styles.input,
					borderColor: focusPassword ? "#FF6C00" : "#E8E8E8",
					backgroundColor: focusPassword ? "#fff" : "rgba(246 246 246/ 1)",
				}}
				placeholder="Пароль"
				onFocus={() => setFocusPassword(true)}
				onBlur={() => setFocusPassword(false)}
				secureTextEntry={isPasswordSecure}
			/>
			<TouchableWithoutFeedback
				onPress={() => {
					isPasswordSecure
						? setIsPasswordSecure(false)
						: setIsPasswordSecure(true);
				}}
			>
				<Text style={styles.textInInput}>
					{isPasswordSecure ? "Показати" : " Приховати"}
				</Text>
			</TouchableWithoutFeedback>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.ButtonText}>Зареєструватися</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.textAccount}>Вже є акаунт? Увійти</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	textAccount: {
		fontFamily: "R-400",
		fontSize: 16,
		color: "rgba(27 67 113/ 1)",
		textAlign: "center",
		marginBottom: 45,
	},
	user: {
		position: "absolute",
		alignSelf: "center",
		top: "-10%",
	},
	img: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
	},
	iconAdd: {
		position: "absolute",
		right: -12,
		top: "70%",
		width: 25,
		height: 25,
	},
	text: {
		marginTop: 92,
		marginBottom: 32,
		lineHeight: 35,
		color: "rgba(33 33 33/ 1)",
		textAlign: "center",
		fontFamily: "R-500",
		fontSize: 30,
	},
	input: {
		fontFamily: "R-400",
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		fontSize: 16,
		marginBottom: 16,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 15,
		marginHorizontal: 16,
	},
	button: {
		fontFamily: "R-400",
		backgroundColor: "rgba(255 108 0/ 1)",
		height: 51,
		paddingVertical: 16,
		borderRadius: 100,
		marginTop: 43,
		marginBottom: 16,
		marginHorizontal: 16,
	},
	ButtonText: {
		color: "rgba(255 255 255/ 1)",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",
	},

	textInInput: {
		position: "absolute",
		fontFamily: "R-400",
		fontSize: 16,
		lineHeight: 19,
		color: "rgba(27 67 113/1)",
		top: "58%",
		right: 33,
	},
});