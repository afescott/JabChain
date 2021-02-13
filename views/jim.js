import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { Header } from "./Homepage";

const Header = ({ navigation }) => {
  return (
    <View>
      <Text>asffafafaf</Text>
    </View>
    // <View style={styles.container}>
    // <Header message="Get Started" />
    /* <Text
        style={styles.container}
        onPress={() => navigation.navigate("Menu")}
      ></Text> */

    /* <Text style={{ flex: 6 }}>JabChain</Text> */
    /* <Text style={{ flex: 6 }}> This will be blaasllasflalfalf</Text>
      <Text style={{ flex: 8 }}>Should be bit smaller than homepage </Text> */

    /* <Menu navigate={navigate} /> */
    // </View>
    // );
  );
};

export default Header;

const styles = StyleSheet.create({
  //function
  container: {
    //container= property
    flex: 1,
    flexDirection: "column",
    alignItems: "center",

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
