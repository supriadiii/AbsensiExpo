import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Image, TouchableOpacity, TextInput, StyleSheet, View, Text } from "react-native";

const Register = (props: any) => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");
  const [prodi, setProdi] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    props.navigation.navigate("Login", {
      name,
      nim,
      kelas,
      prodi,
      password,
    });
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
              style={styles.textInput}
              placeholder="Kata Sandi"
              onChangeText={handleTextPassword}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="lock" type="material-community" size={25} color="#26E467" />

            <TextInput
              value={confirmPassword}
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
    fontSize: 16,
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
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
    paddingVertical: 12,
    fontWeight: "bold",
  },
  viewRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    flexDirection: "row",
    gap: 4,
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
