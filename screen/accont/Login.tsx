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
      } else {
        console.log("=========salah");
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
    if (nim === "aaa" && password === "12345") {
      props.navigation.replace("HomeDosen", { dataLocal });
    } else if (nim === dataLocal.nimLocal && password === passwordLocal) {
      props.navigation.replace("Home", { dataLocal });
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
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontFamily: "Poppins_Bold",
                }}>
                Login
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
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#26E467",
    textAlign: "center",
    fontFamily: "Poppins_Regular",
  },
  countainerInput: {
    color: "#C0C",
    paddingHorizontal: 50,
    alignItems: "center",
    paddingVertical: 50,
    gap: 24,
  },
  button: {
    width: "100%",
    backgroundColor: "#26E467",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    textAlignVertical: "center",
    alignSelf: "center",
  },
  registerText: {
    fontFamily: "Poppins_Regular",
  },
  registerButtonText: {
    fontFamily: "Poppins_Regular",
    color: "#26E467",
  },
});

export default Login;
