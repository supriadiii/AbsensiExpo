import * as FileSystem from "expo-file-system";
import * as Print from "expo-print";
import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";

import { getDataFromStorage } from "../core/const/serviceScantime";

const Home = (props: any) => {
  const [dataLocal, setDataLocal] = useState<any>({
    nameLocal: undefined,
    nimLocal: undefined,
    kelasLocal: undefined,
    prodiLocal: undefined,
  });
  const [passwordLocal, setPasswordLocal] = useState<any>();
  const [dataUri, setDataUri] = useState("");

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
    GetUri();
  }, []);

  const GetUri = async () => {
    try {
      const dataUri = await SecureStore.getItemAsync("qrcodeUri");
      if (dataUri) {
        setDataUri(dataUri);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  console.log({ props });
  return (
    <>
      <View style={{ backgroundColor: "#26E467", position: "relative" }}>
        <Text
          style={{
            paddingVertical: 70,
            textAlign: "center",
            fontSize: 24,
            marginTop: 20,
            fontWeight: "bold",
            color: "white",
          }}>
          Home
        </Text>
      </View>
      <View style={styles.countainerAction}>
        <Image style={{ margin: 20, marginTop: 30 }} source={require("../assets/FotoProfil.png")} />
        <Text style={styles.TextStyle}>{dataLocal.nameLocal}</Text>
        <Text style={styles.TextStyle}>{dataLocal.nimLocal}</Text>
        <Text style={styles.TextStyle}>PTIK A 2020</Text>
        <TouchableOpacity
          style={styles.ButtonMahasiswa}
          onPress={() => props.navigation.navigate("ShowQR")}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconqr.png")} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Tampilkan QrCode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonMahasiswa}
          onPress={() => props.navigation.navigate("StatusAbsensi")}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconSstatus.png")} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Status Absen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  countainerAction: {
    flex: 1,
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    top: 160,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
  ButtonMahasiswa: {
    backgroundColor: "#26E467",
    width: 261,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 30,
    marginBottom: 10,
  },
  TextStyle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});
