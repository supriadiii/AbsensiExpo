import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";

const Home = (props: any) => {
  const [nim] = useState<any>(props.route.params.nim);
  console.log({ props });
  return (
    <>
      <View style={{ backgroundColor: "#26E467", position: "relative" }}>
        <Text
          style={{
            paddingVertical: 50,
            textAlign: "center",
            fontSize: 24,
            marginTop: 20,
            fontWeight: "bold",
            color: "white",
          }}>
          Home
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          borderRadius: 30,
          position: "absolute",
          top: 130,
          backgroundColor: "white",
          width: "100%",
        }}>
        <Image style={{ margin: 20 }} source={require("../assets/FotoProfil.png")} />
        <Text style={styles.TextStyle}>Supriadi</Text>
        <Text style={styles.TextStyle}>{nim}</Text>
        <Text style={styles.TextStyle}>PTIK A 2020</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#26E467",
            width: 261,
            height: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconqr.png")} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Tampilkan QrCode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#26E467",
            width: 261,
            height: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconqr.png")} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Simpan PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#26E467",
            width: 261,
            height: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}>
          <View style={{ marginRight: 15 }}>
            <Image source={require("../assets/iconqr.png")} />
          </View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Tampilkan QrCode</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  TextStyle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});
