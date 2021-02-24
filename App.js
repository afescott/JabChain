import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { HomeNavigate } from "./navigation/BaseNavigationService";
import MyBottomTabs from "./navigation/BaseNavigationService";
import { NavigationContainer } from "@react-navigation/native";
import VerifyFloatingButton from "./assets/VerifyFloatingButton";
import BarcodeScanner from "./assets/BarcodeScanner";
import MainpageToolbar from "./assets/MainpageToolbar";
import SignInScreen from "./views/SignInScreen";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BottomTabNavigate } from "./navigation/BottomTabBar";
import TestImage from "./assets/Test";

export default function App() {
  return (
    // <BottomTabNavigate />
    // <TestImage />
    // <SignInScreen />
    <MyBottomTabs />
  );
}
