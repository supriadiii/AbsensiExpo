import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity,ScrollView, StatusBar } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <StatusBar barStyle="light-content" translucent={true} backgroundColor="rgba(0,0,0,0)" />
      <Image style={styles.backgroundImage} source={require('../../assets/background/bglogin.png')} />
      <View style={styles.overlay}>
        <Image style={styles.assetImage} source={require('../../assets/background/assetLogin.png')} />
      </View>
      <View style={styles.countainerInput}>
      <TextInput style={styles.input} placeholder="useless placeholder" />
      <TextInput style={styles.input} placeholder="useless placeholder" />
      <TouchableOpacity style={styles.button}>
      <Text style={{color:"#FFFFFF", fontSize:24, textAlign:"center", fontWeight:"bold"}}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Belum memiliki akun? Daftar</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#ff22"
  },
  backgroundImage: {
    height: 600,
    width: '100%',
    marginTop: -100,
  },
  overlay: {
    zIndex: 1,
    marginTop: -156,
    alignItems:"center"
  },
  assetImage: {
    // Styling untuk Image kedua
  },
  input: {

    height: 32,
    width:240,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor:"#26E467",
    padding: 10,
    textAlign:"center"
  },
  countainerInput:{
    color:"#C0C",
    // backgroundColor:"red",
    marginTop:50,
    alignItems:"center"
  },
  button: {
    backgroundColor: "#26E467",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    width:240,
    height:48,
   marginTop:10,
   justifyContent: "center"
  },
  registerText: {
    fontSize: 12,
  },
});

export default Login;
