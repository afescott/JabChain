import React from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import VerifyFloatingButton from "../assets/VerifyFloatingButton";
import Header from "./Header";

// import ModernHeader from "react-native-modern-header";

const Mainpage = ({ navigation }) => {
  return (
    // Try setting `flexDirection` to `column`.

    <View
    style={{
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    }}
    >

      {/* <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} >
      <Image source={require("../assets/verifylogo.png")} resize="cover" style={{width:500, height : 900, opacity:0.5}} ></Image>
      </View>
       <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} > */}
        
        <VerifyFloatingButton/>
         {/* </View> */}

         
    </View>
  );
};

export default Mainpage;


const styles = StyleSheet.create({
    logoStyle: {
      width: 100,
      height: 100,
      resizeMode: "contain",
    
  }

})