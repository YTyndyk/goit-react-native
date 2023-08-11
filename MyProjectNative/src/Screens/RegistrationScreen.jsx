import React, { useState } from "react";
import {
	StyleSheet,
	TouchableWithoutFeedback,
	ImageBackground,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";
import FormRegistration from "../components/formRegistration";

export default function Registration() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground
				source={require("../../assets/photo.png")}
				style={styles.backgroundImg}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.formWrapper}
						keyboardVerticalOffset={-130}
					>
						<FormRegistration />
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	backgroundImg: {
		flex: 1,
		justifyContent: "flex-end",
		resizeMode: "cover",
		width: "100%",
	},

	formWrapper: {
		backgroundColor: "rgba(255 255 255/ 1)",
		borderTopStartRadius: 25,
		borderTopEndRadius: 25,
	},
});
