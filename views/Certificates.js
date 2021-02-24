import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";
import VerifyFloatingButton from "../assets/VerifyFloatingButton";

export const Certificates = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", margin: 200 }}>
      <VerifyFloatingButton />
    </View>
  );
};
