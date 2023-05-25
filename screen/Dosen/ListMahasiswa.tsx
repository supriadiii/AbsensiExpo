import { Icon } from "@rneui/base";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

const ListMahasiswa = (props: any) => {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      axios
        .get("https://sheet.best/api/sheets/b06d6084-9463-4cf5-905e-c0e72c704d37")
        .then((response: any) => {
          setData(response.data);
        })
        .catch((error: any) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const formatDateTime = (dateTime: any) => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}.${minutes}`;

    return `${formattedDate}, ${formattedTime}`;
  };

  console.log("ini data ya ", data);
  return (
    <ScrollView style={styles.ScrollStyle}>
      {data.length > 0 ? (
        <View style={styles.layoutView}>
          <View style={styles.rowTitleBar}>
            <Icon
              name="chevron-left"
              type="entypo"
              size={25}
              color="#FFFFFF"
              onPress={() => props.navigation.navigate("ListAbsensi")}
            />
            <Text style={styles.titleText}>Status Absensi Mahasiswa</Text>
          </View>
          <View style={styles.viewForm}>
            {data.map((item: any, index: number) => (
              <View key={index} style={styles.viewMahasiswa}>
                <Text style={styles.textProdi}>{item.prodiLocal}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.textNormal}>{item.nameLocal}</Text>
                  <Text style={styles.textNormal}>{item.nimLocal}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.textNormal}>{item.kelasLocal}</Text>
                  <Text style={styles.textNormal}>{formatDateTime(item.createDate)}</Text>
                </View>
                <TouchableOpacity style={styles.buttonViewAbsen}>
                  <Text style={styles.textViewAbsen}>Hadir</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.layoutView}>
          <Text>Data not found</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ListMahasiswa;

const styles = StyleSheet.create({
  textNormal: {
    fontFamily: "Poppins_Regular",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins_Bold",
  },
  textViewAbsen: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Poppins_Bold",
  },
  buttonViewAbsen: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#26E467",
    borderRadius: 10,
  },
  textProdi: {
    fontSize: 18,
    fontFamily: "Poppins_Bold",
  },
  viewMahasiswa: {
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
    paddingTop: 56,
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
  ScrollStyle: {
    paddingBottom: 20,
  },
});
