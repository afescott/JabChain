import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mainpage from "../views/Mainpage";
import { Homepage } from "../views/Homepage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { creae } from "@react-navigation/material-bottom-tabs";
import { Certificates } from "../views/Certificates";
import VerifyFloatingButton from "../assets/VerifyFloatingButton";
import BarcodeScanner from "../assets/BarcodeScanner";
import TabBarHomeIcon from "../assets/TabBarIcon";
import { navigationRef } from "./RootNavigation";
import { AccountInfo } from "../views/AccountInfo";
import MainpageToolbar from "../assets/MainpageToolbar";
import TestImage from "../assets/Test";

const BottomTab = createMaterialBottomTabNavigator();

function MyBottomTabs() {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTab.Navigator
        // activeColor="#f0edf6"
        style={{ activeColor: "#f0edf6" }}
        barStyle={{ backgroundColor: "#1e1e1e" }}
      >
        <BottomTab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarHomeIcon
                focused={focused}
                name={Platform.OS === "ios" ? `ios-home` : "md-home"}
              />
            ),
          }}
          name="Mainpage"
          component={MainpageToolbar}
        />

        <BottomTab.Screen
          name="Account"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarHomeIcon
                focused={focused}
                name={Platform.OS === "ios" ? `md-person` : "md-person"}
              />
            ),
          }}
          component={MainpageToolbar}
        />

        {/* <BottomTab.Screen //see how the other tab bar icons style, and how the guy programmed it in the vid
          name="Account"
          options={{
            tabBarIcon: <TestImage style={{ height: 15 }} />,
          }}
          component={MainpageToolbar}
        /> */}

        <BottomTab.Screen
          name="Certificates"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarHomeIcon
                focused={focused}
                name={Platform.OS === "ios" ? `md-wallet` : "md-wallet"}
              />
            ),
          }}
          component={Certificates}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
export default MyBottomTabs;

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        tabBarOptions={{ style: { backgroundColor: "powderblue" } }}
      >
        <Tab.Screen name="Mainpage" component={Mainpage} />
        <Tab.Screen name="Certificates" component={Certificates} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export  MyTabs;

// const Stack = createStackNavigator();

// export default function StackVerification() {
//   return (

//     <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen name="Home" component={VerifyUser} />
//     <Stack.Screen name="Details" component={DetailsScreen} />
//   </Stack.Navigator>

//   );
// }

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Homepage" component={Homepage}></Screen>
    <Screen name="Mainpage" component={Mainpage} />
    {/* <Screen name="BarcodeScanner" component={BarcodeScanner} /> */}
  </Navigator>
);

export const HomeNavigate = () => (
  <NavigationContainer ref={navigationRef}>
    <HomeNavigator />
  </NavigationContainer>
);
