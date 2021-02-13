import React from "react";
import { Button, View } from "react-native";
import Header from "./Header";
import ModernHeader from "react-native-modern-header";

const Mainpage = ({ navigation }) => {
  return (
    // Try setting `flexDirection` to `column`.

    <View
    // style={{
    //   flex: 1,
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "space-around",
    // }}
    >
      <Button title={"asfaf"} onPress={() => navigation.goBack()}></Button>
      <Header />
      {/* <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} /> */}
    </View>
  );
};

export default Mainpage;
