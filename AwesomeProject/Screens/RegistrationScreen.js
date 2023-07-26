import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
// import _default from "react-native-gesture-handler/lib/typescript/components/GestureHandlerButton";
// import Icon from "react-native-vector-icons/EvilIcons";

// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

export const RegistrationScreen = ({ keyboardShown }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onRegSubmit = () => {
    Keyboard.dismiss();
    console.log(login, email, password);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = (text) => {
    setLogin(text);
  };

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  return (
    <View
      style={{
        ...styles.authContainer,
        paddingBottom: keyboardShown ? 45 : 32,
        marginBottom: keyboardShown ? -150 : 0,
      }}>
      <View style={styles.avatarThumb}>
        {/* <Image
        />
              <Icon name="plus" style={styles.imgAddPhoto} size={35} />  */}
        <Image
          source={require("../assets/add.jpg")}
          style={styles.imgAddPhoto}></Image>
      </View>
      <Text style={styles.authTitle}>Реєстрація</Text>

      <TextInput
        style={styles.authInput}
        placeholder={"Логін"}
        onChangeText={handleLogin}
        value={login}
      />
      <TextInput
        style={styles.authInput}
        placeholder={"Адреса електронної пошти"}
        onChangeText={handleEmail}
        value={email}
      />
      <TextInput
        style={styles.authInput}
        placeholder={"Пароль"}
        secureTextEntry={true}
        onChangeText={handlePassword}
        value={password}
      />
      <TouchableOpacity
        style={styles.buttonPassword}
        activeOpacity={0.7}
        onPress={handleTogglePassword}>
        <Text style={styles.buttonText}>
          {" "}
          {showPassword ? "Приховати" : "Показати"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={onRegSubmit}>
        <Text style={styles.submitButtonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text style={styles.authLink}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarThumb: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 8,
    marginTop: -60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgAddPhoto: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 81,
    right: -12.5,
  },

  authTitle: {
    textAlign: "center",
    marginVertical: 16,
    letterSpacing: 0.01,
    fontSize: 30,
  },

  authInput: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  submitButton: {
    height: 50,
    backgroundColor: "#FF6C00",
    color: "#fff",
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonText: {
    fontSize: 16,
    color: "#fff",
  },

  authLink: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 10,
    textAlign: "center",
  },

  inputLinkText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "#1B4371",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  buttonPassword: {
    position: "absolute",
    paddingVertical: 17,
    right: 6,
    top: 278,
    marginRight: 16,
  },
});

export default RegistrationScreen;
