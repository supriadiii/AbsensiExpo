import { Icon } from "@rneui/base";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { Image, TouchableOpacity, TextInput, StyleSheet, View, Text } from "react-native";
const Register = (props: any) => {
  const [name, setName] = useState<any>();
  const [nim, setNim] = useState<any>();
  const [kelas, setKelas] = useState<any>();
  const [prodi, setProdi] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [confirmPassword, setConfirmPassword] = useState<any>();

  //save ke local storege
  const saveDataToStorage = async () => {
    try {
      await SecureStore.setItemAsync("name", name);
      await SecureStore.setItemAsync("nim", nim);
      await SecureStore.setItemAsync("kelas", kelas);
      await SecureStore.setItemAsync("prodi", prodi);
      await SecureStore.setItemAsync("password", password);
      await SecureStore.setItemAsync("confirmPassword", confirmPassword);

      console.log("Data saved to local storage");
    } catch (error) {
      console.log("Error saving data to local storage:", error);
    }
  };

  const handleTextName = (text: string) => {
    setName(text);
  };
  const handleTextNim = (text: string) => {
    setNim(text);
  };
  const handleTextKelas = (text: string) => {
    setKelas(text);
  };
  const handleTextProdi = (text: string) => {
    setProdi(text);
  };
  const handleTextPassword = (text: string) => {
    setPassword(text);
  };
  const handleTextConfirmPassword = (text: string) => {
    setConfirmPassword(text);
  };

  const handleDaftar = () => {
    if (password !== confirmPassword) {
      alert("Konfirmasi password salah");
    } else if (
      name !== undefined &&
      nim !== undefined &&
      kelas !== undefined &&
      password !== undefined
    ) {
      props.navigation.navigate("Login", {
        name,
        nim,
        kelas,
        prodi,
        password,
      });
      saveDataToStorage();
    } else {
      alert("Masukkan data dengan benar");
    }
  };

  console.log({ name, nim, kelas, prodi, password, confirmPassword });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleBar}>
        <Image source={require("../../assets/iconqr.png")} style={{ width: 36, height: 40 }} />
        <Text style={styles.titleText}>Registrasi Account</Text>
      </View>
      <View style={styles.viewForm}>
        <View style={{ gap: 20 }}>
          <View style={styles.viewRow}>
            <Icon name="ios-person-circle" type="ionicon" size={25} color="#26E467" />
            <TextInput
              value={name}
              style={styles.textInput}
              placeholder="Nama Mahasiswa"
              onChangeText={handleTextName}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="id-card-o" type="font-awesome" size={20} color="#26E467" />
            <TextInput
              value={nim}
              style={styles.textInput}
              placeholder="Nomor Induk Mahasiswa"
              onChangeText={handleTextNim}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="google-classroom" type="material-community" size={25} color="#26E467" />
            <TextInput
              value={kelas}
              style={styles.textInput}
              placeholder="Kelas"
              onChangeText={handleTextKelas}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="school" type="ionicon" size={25} color="#26E467" />
            <TextInput
              value={prodi}
              style={styles.textInput}
              placeholder="Prodi"
              onChangeText={handleTextProdi}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="lock" type="material-community" size={25} color="#26E467" />
            <TextInput
              value={password}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Kata Sandi"
              onChangeText={handleTextPassword}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="lock" type="material-community" size={25} color="#26E467" />
            <TextInput
              value={confirmPassword}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Konfirmasi Kata Sandi"
              onChangeText={handleTextConfirmPassword}></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => handleDaftar()}>
            <Text style={styles.registerButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "Poppins_Regular",
    flex: 1,
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins_Bold",
  },
  button: {
    backgroundColor: "#26E467",
    borderRadius: 10,
    alignItems: "center",
  },
  registerButton: {
    fontSize: 20,
    color: "#FFFFFF",
    paddingHorizontal: 60,
    paddingVertical: 8,
    fontFamily: "Poppins_Bold",
  },
  viewRow: {
    paddingVertical: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  viewForm: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 60,
    justifyContent: "center",
    gap: 24,
  },
  titleBar: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#26E467",
    paddingVertical: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
