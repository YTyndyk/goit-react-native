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
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({
		login: false,
		email: false,
		password: false,
	});

	const submitData = {
		login,
		email,
		password,
	};
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const handleSubmit = () => {
		if (!login) {
			setError((prevState) => ({ ...prevState, login: true }));
			return;
		} else if (!email) {
			setError((prevState) => ({ ...prevState, password: true }));
			return;
		} else if (!emailRegex.test(email)) {
			setError((prevState) => ({ ...prevState, email: true }));
			return;
		} else if (!password) {
			setError((prevState) => ({ ...prevState, password: true }));

			return;
		}

		console.log(submitData);
		setLogin("");
		setEmail("");
		setPassword("");
	};
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
			<View>
				{error.login && (
					<Text style={styles.errorMessage}>Login is a required!</Text>
				)}
				<TextInput
					style={[styles.input, focusLogin && styles.inputFocus]}
					value={login}
					onChangeText={(login) => {
						setLogin(login);
						setError((prevState) => ({ ...prevState, login: false }));
					}}
					placeholder="Логін"
					onFocus={() => setFocusLogin(true)}
					onBlur={() => setFocusLogin(false)}
				/>
				{error.email && (
					<Text style={styles.errorMessage}>
						Please enter the correct email!
					</Text>
				)}
				<TextInput
					style={[styles.input, focusEmail && styles.inputFocus]}
					value={email}
					onChangeText={(email) => {
						setEmail(email);
						setError((prevState) => ({ ...prevState, email: false }));
					}}
					placeholder="Адреса електронної пошти"
					onFocus={() => setFocusEmail(true)}
					onBlur={() => setFocusEmail(false)}
				/>
				{error.password && (
					<Text style={styles.errorMessage}>Password is a required!</Text>
				)}
				<TextInput
					style={[styles.input, focusPassword && styles.inputFocus]}
					value={password}
					onChangeText={(password) => {
						setPassword(password);
						setError((prevState) => ({ ...prevState, password: false }));
					}}
					placeholder="Пароль"
					onFocus={() => setFocusPassword(true)}
					onBlur={() => setFocusPassword(false)}
					secureTextEntry={isPasswordSecure}
				/>
			</View>
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
				<Text style={styles.ButtonText} onPress={handleSubmit}>
					Зареєструватися
				</Text>
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
	errorMessage: {
		color: "#FF6C00",
		marginBottom: 4,
		paddingLeft: 16,
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
		borderColor: "#E8E8E8",
		backgroundColor: "rgba(246 246 246/ 1)",
	},
	inputFocus: {
		borderColor: "#FF6C00",
		backgroundColor: "#fff",
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
