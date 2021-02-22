import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MainpageToolbar from "../assets/MainpageToolbar";
import VerifyFloatingButton from "../assets/VerifyFloatingButton";
import MyTabs from "../navigation/BaseNavigationService";

const Mainpage = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <MainpageToolbar />
      {/* <View
        style={{
          shadowColor: "black",

          shadowOpacity: 0.3,
          elevation: 0.1,
          justifyContent: "center",
          alignContent: "center",
          borderRadius: 30 / 2,
        }}
      >
        <Text style={{ fontSize: 15, padding: 10 }}>Seek the information</Text>
        <Text>Total number of Jab certificates : 15</Text>
      </View>

      <View
        style={{
          shadowColor: "black",
          shadowOpacity: 0.3,
          elevation: 0.1,

          justifyContent: "center",
          alignContent: "center",
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 15, padding: 10 }}>Seek the information</Text>
        <Text>Total number of Jab certificates : 15</Text>
      </View> */}
    </View>
  );
};

export default Mainpage;
