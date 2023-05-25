import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import AddAbsensi from "./screen/Dosen/AddAbsensi";
import HomeDosen from "./screen/Dosen/HomeDosen";
import Home from "./screen/Home";
import TabNavigation from "./screen/TabNavigation";
import Login from "./screen/accont/Login";
import Register from "./screen/accont/register";
import ShowQR from "./screen/screenUser/ShowQR";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="ShowQR" component={ShowQR} />
          <Stack.Screen name="HomeDosen" component={HomeDosen} />
          <Stack.Screen name="AddAbsensi" component={AddAbsensi} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
