import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

import styled from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";
import BarcodeScanner from "./BarcodeScanner";
import { useNavigation } from "@react-navigation/native";

import { supportedAuthenticationTypesAsync } from "expo-local-authentication";
import { HomeNavigate } from "../navigation/BaseNavigationService";
import { Homepage } from "../views/Homepage";
import * as RootNavigation from "../navigation/RootNavigation";

// function Him() {
//   const navigation = useNavigation();

//   navigation.navigate("BarcodeScanner");
// }

export default class TestImage extends React.Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      useNativeDriver: true,
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  };

  render() {
    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={rotation}>
            <View style={styles.button}>
              <AntDesign
                name="plus"
                backgroundColor="red"
                size={25}
              ></AntDesign>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  shadow: {
    // elevation: 5,
    // backgroundColor: "red",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",

    marginTop: 300,

    // position:"absolute" //this might f it up but the guy uses it in the vid
  },
  button: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    elevation: 0.1,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60 / 2,
  },
  secondary: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    elevation: 0.1,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60 / 2,
    backgroundColor: "grey",
  },
  menu: {
    backgroundColor: "red",
  },
});
