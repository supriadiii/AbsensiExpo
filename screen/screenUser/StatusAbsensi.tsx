import { Icon } from "@rneui/base";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

import { getDataFromStorage } from "../../core/const/serviceScantime";

const StatusAbsensi = (props: any) => {
  const [dataLocal, setDataLocal] = useState<any>("");
  const [data, setData] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getDataFromStorage();
      console.log("=============", storedData);
      if (storedData) {
        setDataLocal(storedData);
      }
    };
    fetchData();
  }, []);

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
  console.log("dataLocal", dataLocal);
  console.log("data", data);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <ScrollView>
          <View style={styles.layoutView}>
            <View style={styles.rowTitleBar}>
              <Icon
                name="chevron-left"
                type="entypo"
                size={25}
                color="#FFFFFF"
                onPress={() => props.navigation.navigate("Home")}
              />
              <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>
                Daftar Absensi
              </Text>
            </View>
            <View style={styles.viewForm}>
              {data.map((item: any, index: number) => (
                <View key={index} style={styles.viewMahasiswa}>
                  <Text style={styles.textMataKuliah}>Daftar kehadiran</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>{item.kelasLocal}</Text>
                    <Text>{formatDateTime(item.createDate)}</Text>
                  </View>
                  <Text>{item.prodiLocal}</Text>
                  <TouchableOpacity style={styles.buttonViewAbsen}>
                    <Text style={styles.textViewAbsen}>Hadir</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <Text>Maaf, kamu belum absen.</Text>
      )}
    </View>
  );
};

export default StatusAbsensi;

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
    width: "100%",
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
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
