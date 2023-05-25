import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Home from "./Home";

const TabNavigation = (props: any) => {
  const Tab = createBottomTabNavigator();
  return (
    <View>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 25,
            backgroundColor: "#ffffff",
            borderRadius: 16,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 15,
            ...style.shadow,
          },
        }}>
        <Tab.Screen
          name="Home"
          children={() => <Home props={props} />}
          options={{
            tabBarIcon: HomeMenu,
          }}
        />
        {/* <Tab.Screen
          name="Voucher"
          children={() => <VoucherScreen props={props} />}
          options={{
            tabBarIcon: VoucherMenu,
          }}
        />
        <Tab.Screen
          name="Bookings"
          children={() => <BookingsScreen props={props} />}
          options={{
            tabBarIcon: BookingsMenu,
          }}
        />
        <Tab.Screen
          name="Notification"
          children={() => <NotificationScreen props={props} />}
          options={{
            tabBarIcon: NotificationMenu,
          }}
        />
        <Tab.Screen
          name="Account"
          children={() => <AccountScreen props={props} />}
          options={{
            tabBarIcon: AccountMenu,
          }}
        /> */}
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigation;

const HomeMenu = ({ focused }: any) => {
  return (
    <View style={style.viewStyle}>
      <Icon name="home" type="antdesign" size={25} color={focused ? "#26E467" : "#D6D6D6"} />
      <Text style={focused ? style.textFocus : style.textNoFocus}>HOME</Text>
    </View>
  );
};

// const VoucherMenu = ({ focused }: any) => {
//   const { t } = useTranslation();
//   return (
//     <View style={style.viewStyle}>
//       <Icon
//         name="ticket-confirmation-outline"
//         type="material-community"
//         size={25}
//         color={focused ? SeindoColor.seindoRed : SeindoColor.seindoGray}
//       />
//       <Text style={focused ? style.textFocus : style.textNoFocus}>VOUCHER")}</Text>
//     </View>
//   );
// };

// const BookingsMenu = ({ focused }: any) => {
//   const { t } = useTranslation();
//   return (
//     <View style={style.viewStyle}>
//       <Icon
//         name="calendar"
//         type="antdesign"
//         size={25}
//         color={focused ? SeindoColor.seindoRed : SeindoColor.seindoGray}
//       />
//       <Text style={focused ? style.textFocus : style.textNoFocus}> BOOKINGS")}</Text>
//     </View>
//   );
// };

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  viewStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
  textFocus: {
    paddingTop: 4,
    fontSize: 8,
    color: "#26E467",
  },
  textNoFocus: {
    paddingTop: 4,
    fontSize: 8,
    color: "#D6D6D6",
  },
});
