import * as SecureStore from "expo-secure-store";
import React, { useState, useMemo, useEffect } from "react";
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

import { getDataFromStorage } from "../../core/const/serviceScantime";

const Login = (props: any) => {
  const [nim, setNim] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [dataLocal, setDataLocal] = useState<any>({
    nameLocal: undefined,
    nimLocal: undefined,
    kelasLocal: undefined,
    prodiLocal: undefined,
  });
  const [passwordLocal, setPasswordLocal] = useState<any>();
  // memanggil data local storege

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getDataFromStorage();
      console.log("=============", storedData);
      if (storedData) {
        setDataLocal(storedData);
        setPasswordLocal(storedData.passwordLocal);
      }
    };
    fetchData();
  }, []);

  const handleNimChange = (text: string) => {
    setNim(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleLogin = () => {
    if (nim === dataLocal.nimLocal && password === passwordLocal) {
      props.navigation.replace("HomeDosen", { dataLocal });
    } else {
      alert("Maaf password kamu salah ");
    }
  };
  console.log("ini data local", { dataLocal });
  console.log("ini data local password ===", { passwordLocal });
  console.log("ini password ===", { password });
  console.log("ini nim ===", dataLocal.nimLocal);
  console.log("ini nim ===", dataLocal.nimLocal);
  console.log("ini ===", nim);
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
                  fontFamily: "Poppins_Bold",
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
