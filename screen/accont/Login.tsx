import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Login = (props: any) => {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const handleNimChange = (text: string) => {
    setNim(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleLogin = () => {
    if (nim === "5202451003" && password === "kapantamat") {
      props.navigation.navigate("HomeDosen", { password, nim });
    } else if (password !== "kapantamat") {
      alert("Maaf password kamu salah ");
    }
  };
  console.log(nim);
  console.log(props);
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" translucent={true} backgroundColor="rgba(0,0,0,0)" />
          <Image
            style={styles.backgroundImage}
            source={require("../../assets/background/bglogin.png")}
          />
          <View style={styles.overlay}>
            <Image
              style={styles.assetImage}
              source={require("../../assets/background/assetLogin.png")}
            />
          </View>
          <View style={styles.countainerInput}>
            <TextInput
              style={styles.input}
              placeholder="Nim"
              value={nim}
              onChangeText={handleNimChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "bold",
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Belum memiliki akun? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text style={styles.registerButtonText}>Daftar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#ff22"
  },
  backgroundImage: {
    height: 600,
    width: "100%",
    marginTop: -100,
  },
  overlay: {
    zIndex: 1,
    marginTop: -156,
    alignItems: "center",
  },
  assetImage: {
    // Styling untuk Image kedua
  },
  input: {
    height: 36,
    width: 240,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#26E467",
    padding: 10,
    textAlign: "center",
  },
  countainerInput: {
    color: "#C0C",
    // backgroundColor:"red",
    marginTop: 50,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#26E467",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    width: 240,
    height: 48,
    marginTop: 10,
    justifyContent: "center",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    textAlignVertical: "center",
    alignSelf: "center",
  },
  registerText: {},
  registerButton: {
    backgroundColor: "yellow",
    marginLeft: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  registerButtonText: {
    color: "#FF0000",
  },
});

export default Login;
