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
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
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
            <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>
              Status Absensi Mahasiswa
            </Text>
          </View>
          <View style={styles.viewForm}>
            {data.map((item: any, index: number) => (
              <View key={index} style={styles.viewMahasiswa}>
                <Text style={styles.textProdi}>{item.prodiLocal}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text>{item.nameLocal}</Text>
                  <Text>{item.nimLocal}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text>{item.kelasLocal}</Text>
                  <Text>{formatDateTime(item.createDate)}</Text>
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
  textProdi: {
    fontSize: 20,
    fontWeight: "bold",
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
  ScrollStyle: {
    paddingVertical: 25,
    paddingBottom: 20,
  },
});
