import { Icon } from "@rneui/base";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListAbsensi = (props: any) => {
  return (
    <View style={styles.layoutView}>
      <View style={styles.rowTitleBar}>
        <Icon
          name="chevron-left"
          type="entypo"
          size={25}
          color="#FFFFFF"
          onPress={() => props.navigation.navigate("HomeDosen")}
        />
        <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>Daftar Absensi</Text>
      </View>
      <View style={styles.viewForm}>
        <View style={styles.viewKelas}>
          <Text style={styles.textMataKuliah}>Mata Kuliah</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Kelas</Text>
            <Text>2023-10-10,08.00</Text>
          </View>
          <Text>Pendidikan Teknologi Informatika dan Komputer</Text>
          <TouchableOpacity
            style={styles.buttonViewAbsen}
            onPress={() => props.navigation.navigate("ListMahasiswa")}>
            <Text style={styles.textViewAbsen}>Lihat Daftar Absensi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListAbsensi;

const styles = StyleSheet.create({
  textViewAbsen: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonViewAbsen: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#26E467",
    borderRadius: 10,
  },
  textMataKuliah: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewKelas: {
    backgroundColor: "#FBFBFB",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    gap: 12,
    borderColor: "#D6D6D6",
    borderWidth: 0.5,
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
  viewForm: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 32,
    alignItems: "center",
    gap: 24,
  },
});
