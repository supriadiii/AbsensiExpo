import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from "react-native";

const AddAbsensi = () => {
  const [mataKuliah, setMataKuliah] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [kelas, setKelas] = useState("");
  const [prodi, setProdi] = useState("");

  const handleSubmit = (props: any) => {
    console.log({ mataKuliah, tanggal, jam, kelas, prodi });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleBar}>
        <Icon
          name="chevron-left"
          type="entypo"
          size={25}
          color="#FFFFFF"
          onPress={() => props.avigation.navigate("HomeDosen")}
        />
        <Text style={styles.titleText}>Tambah Absensi</Text>
      </View>
      <View style={styles.viewForm}>
        <View style={{ gap: 20 }}>
          <View style={styles.viewRow}>
            <Icon name="ios-person-circle" type="ionicon" size={25} color="#26E467" />
            <TextInput
              value={mataKuliah}
              style={styles.textInput}
              placeholder="Nama Mahasiswa"
              onChangeText={(value) => setMataKuliah(value)}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="id-card-o" type="font-awesome" size={20} color="#26E467" />
            <TextInput
              value={tanggal}
              style={styles.textInput}
              placeholder="Nomor Induk Mahasiswa"
              onChangeText={(value) => setTanggal(value)}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="google-classroom" type="material-community" size={25} color="#26E467" />
            <TextInput
              value={jam}
              style={styles.textInput}
              placeholder="Kelas"
              onChangeText={(value) => setJam(value)}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="google-classroom" type="material-community" size={25} color="#26E467" />
            <TextInput
              value={kelas}
              style={styles.textInput}
              placeholder="Kelas"
              onChangeText={(value) => setKelas(value)}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="school" type="ionicon" size={25} color="#26E467" />
            <TextInput
              value={prodi}
              style={styles.textInput}
              placeholder="Prodi"
              onChangeText={(value) => setProdi(value)}></TextInput>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.registerButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddAbsensi;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    flex: 1,
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
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 32,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
});
