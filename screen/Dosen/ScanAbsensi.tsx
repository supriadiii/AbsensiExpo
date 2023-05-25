import { Button } from "@rneui/base";
import axios from "axios";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ScanAbsensi = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert("Data Berhasil di scan");
    setData(JSON.parse(data));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const dataWithDate = {
      ...data,
      createDate: new Date().toISOString(), // Menambahkan tanggal saat ini
    };
    axios
      .post("https://sheet.best/api/sheets/b06d6084-9463-4cf5-905e-c0e72c704d37", dataWithDate)
      .then((response) => {
        console.log("============================", response);
        alert("selamat kamu sudah absen");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("ini data", { data });
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
      </View>
      <TouchableOpacity style={styles.button} onPress={(e: any) => handleSubmit(e)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    height: "70%",
    width: "80%",
    // backgroundColor: "red",
  },
  button: {
    backgroundColor: "#26E467",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 10,
    width: 240,
    height: 48,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Poppins_Bold",
  },
});

export default ScanAbsensi;
