import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const AddAbsensi = (props: any) => {
  const [mataKuliah, setMataKuliah] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [kelas, setKelas] = useState("");
  const [prodi, setProdi] = useState("");

  const handleSubmit = () => {
    props.navigation.navigate("ListAbsensi");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleBar}>
        <Icon
          name="chevron-left"
          type="entypo"
          size={25}
          color="#FFFFFF"
          onPress={() => props.navigation.navigate("HomeDosen")}
        />
        <Text style={styles.titleText}>Tambah Absensi</Text>
      </View>
      <View style={styles.viewForm}>
        <View style={{ gap: 20 }}>
          <View style={styles.viewRow}>
            <Icon name="md-newspaper-outline" type="ionicon" size={25} color="#26E467" />
            <TextInput
              value={mataKuliah}
              style={styles.textInput}
              placeholder="Mata Kuliah"
              onChangeText={(value) => setMataKuliah(value)}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="calendar" type="feather" size={25} color="#26E467" />
            <TextInput
              value={tanggal}
              style={styles.textInput}
              placeholder="Tanggal"
              onChangeText={(value) => setTanggal(value)}></TextInput>
          </View>
          <View style={styles.viewRow}>
            <Icon name="clock" type="feather" size={25} color="#26E467" />
            <TextInput
              value={jam}
              style={styles.textInput}
              placeholder="Jam"
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
    gap: 12,
    backgroundColor: "#26E467",
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 32,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
});
