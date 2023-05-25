import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const HomeDosen = (props: any) => {
  return (
    <View style={styles.layoutView}>
      <View style={styles.rowTitleBar}>
        <Image source={require("../../assets/iconqrsmall.png")} />
        <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>Home</Text>
      </View>
      <View style={styles.imageView}>
        <View style={{}}>
          <Image source={require("../../assets/scanmenu.png")} />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image
              style={{ height: 20, width: 60 }}
              source={require("../../assets/scanButton.png")}
            />
            <Text style={styles.textButton}>Scan Absensi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => props.navigation.navigate("AddAbsensi")}>
            <Image
              style={{ height: 20, width: 60 }}
              source={require("../../assets/scanButton.png")}
            />
            <Text style={styles.textButton}>Tambah Absensi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => props.navigation.navigate("ListAbsensi")}>
            <Image
              style={{ height: 20, width: 60 }}
              source={require("../../assets/scanButton.png")}
            />
            <Text style={styles.textButton}>Lihat Absensi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeDosen;

const styles = StyleSheet.create({
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonStyle: {
    backgroundColor: "#E6E6E6",
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
  buttonView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 40,
    gap: 24,
  },
  imageView: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    alignItems: "center",
    gap: 24,
  },
  rowTitleBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  layoutView: {
    backgroundColor: "#26E467",
    flex: 1,
  },
});
