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
    <View style={{ backgroundColor: "#26E467", flex: 1 }}>
      <Text style={styles.titleText}>Home</Text>
      <View style={styles.countainerAction}>
        <Image source={require("../assets/FotoProfil.png")} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.TextStyle}>{dataLocal.nameLocal}</Text>
          <Text style={styles.TextStyle}>{dataLocal.nimLocal}</Text>
          <Text style={styles.TextStyle}>PTIK A 2020</Text>
        </View>

        <TouchableOpacity
          style={styles.ButtonMahasiswa}
          onPress={() => props.navigation.navigate("ShowQR")}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconqr.png")} />
          </View>
          <Text style={{ color: "white", fontFamily: "Poppins_Bold", fontSize: 20 }}>
            Tampilkan QrCode
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonMahasiswa}
          onPress={() => props.navigation.navigate("StatusAbsensi")}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconSstatus.png")} />
          </View>
          <Text style={{ color: "white", fontFamily: "Poppins_Bold", fontSize: 20 }}>
            Status Absen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleText: {
    paddingVertical: 56,
    textAlign: "center",
    fontSize: 24,
    marginTop: 20,
    color: "white",
    fontFamily: "Poppins_Bold",
  },
  countainerAction: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "white",
    padding: 40,
    gap: 20,
  },
  ButtonMahasiswa: {
    backgroundColor: "#26E467",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 12,
    width: "100%",
    marginBottom: 10,
  },
  TextStyle: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 18,
  },
});
