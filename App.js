import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { HomeNavigate } from "./navigation/BaseNavigationService";
import MyBottomTabs from "./navigation/BaseNavigationService";
import { NavigationContainer } from "@react-navigation/native";
import VerifyFloatingButton from "./assets/VerifyFloatingButton";
import BarcodeScanner from "./assets/BarcodeScanner";
import MainpageToolbar from "./assets/MainpageToolbar";

export default function App() {
  return (
    // <View style={styles.container}>
    /* <BiometricPopup /> */

    <MainpageToolbar />
    // <MyBottomTabs />

    // </View>
  );
}
