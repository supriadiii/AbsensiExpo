import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
export default function ShowQR(props: any) {
  const [data, setData] = useState({
    nim: "adi",
    nama: "aa",
    prodi: "aaadd",
    kelas: "asasda",
  });
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
          Home
        </Text>
      </View>
      <View style={styles.countainerAction}>
        <View>
          <Image
            style={{ margin: 20, marginTop: 30 }}
            source={require("../../assets/FotoProfil.png")}
          />
          <QRCode value={JSON.stringify(data)} logoSize={30} logoBackgroundColor="transparent" />
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
