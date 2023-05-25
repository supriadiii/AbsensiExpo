import { Icon } from "@rneui/base";
import * as FileSystem from "expo-file-system";
import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { captureRef } from "react-native-view-shot";

import { getDataFromStorage } from "../../core/const/serviceScantime";

export default function ShowQR(props: any) {
  const [dataLocal, setDataLocal] = useState<any>({
    nameLocal: undefined,
    nimLocal: undefined,
    kelasLocal: undefined,
    prodiLocal: undefined,
  });
  const [qrCodeCaptured, setQRCodeCaptured] = useState(false);
  const [uri, setUri] = useState("");
  const dataLocalRef = useRef<any>(null);
  const passwordLocalRef = useRef<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getDataFromStorage();
      console.log("=============", storedData);
      if (storedData) {
        setDataLocal(storedData);
        passwordLocalRef.current = storedData.passwordLocal;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (dataLocal && !qrCodeCaptured) {
      saveQRCode();
    }
  }, [dataLocal]);

  const saveQRCode = async () => {
    const qrCodeCapture = await captureRef(dataLocalRef.current!, {
      format: "png",
      quality: 1,
    });

    const fileUri = `${FileSystem.documentDirectory}qrcode.png`;
    await FileSystem.copyAsync({
      from: qrCodeCapture,
      to: fileUri,
    });

    await SecureStore.setItemAsync("qrcodeUri", fileUri);
    setUri(fileUri);
    console.log("QR code data saved", fileUri);
    setQRCodeCaptured(true);
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "#26E467",
          position: "relative",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}>
        <View
          style={{ alignItems: "center", backgroundColor: "white", padding: 10, borderRadius: 30 }}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.goBack()}>
            <Icon name="left" type="ant-design" size={20} color={"#26E467"} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingVertical: 70,
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
          }}>
          Tampilan QR
        </Text>
      </View>
      <View style={styles.countainerAction}>
        <View style={{ marginBottom: 50 }}>
          <Image
            style={{ margin: 20, marginTop: 20 }}
            source={require("../../assets/FotoProfil.png")}
          />
        </View>
        <View
          ref={dataLocalRef}
          style={{
            flex: 1,
            paddingBottom: 200,
            backgroundColor: "#DCDCDC",
            width: "100%",
            alignItems: "center",
            paddingTop: 70,
            borderRadius: 20,
          }}>
          {qrCodeCaptured ? (
            <Image style={{ width: 350, height: 350 }} source={{ uri }} />
          ) : (
            <QRCode
              value={JSON.stringify(dataLocal)}
              logoSize={50}
              logoBackgroundColor="transparent"
              size={250}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  countainerAction: {
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    top: 140,
    backgroundColor: "white",
    width: "100%",
    flex: 1,
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
