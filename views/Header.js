import React from "react";
import ModernHeader from "react-native-modern-header";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";

const Header = ({ navigation }) => {
  return (
    <View>
      <ModernHeader
        title={"Verify"}
        titleStyle={styles.fixToText}
        titleOnPress={leftIconOnPress}
        leftIconOnPress={leftIconOnPress}
      ></ModernHeader>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }}>
          <Button title={"asfaf"} onPress={() => navigation.goBack()}>
            {" "}
          </Button>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>

      {/* <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} /> */}
    </View>
  );
};

export default Header;

const leftIconOnPress = () => {
  alert("Compatible Device!");
};

const styles = StyleSheet.create({
  fixToText: {
    fontSize: 25,
  },
});
