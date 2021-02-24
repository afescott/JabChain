import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import InputTextField from "../components/InputTextField";
import { AntDesign } from "@expo/vector-icons";
import MyBottomTabs from "../navigation/BaseNavigationService";
import * as RootNavigation from "../navigation/RootNavigation";

export default SignInScreen = ({}) => {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            marginTop: 60,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/verifylogo.png")}
          ></Image>
          <Text
            style={[
              styles.text,
              { marginTop: 10, fontSize: 22, fontWeight: "500" },
            ]}
          >
            JabChain
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <AntDesign name="qrcode" size={20} color="#1D2029" />
              {/* <Image
                style={[styles.socialLogo, { width: 15, height: 15 }]}
                source={require("../assets/jablogo.png")}
              ></Image> */}
              <Text style={[styles.text, { fontSize: 15 }]}>Scan QR Code</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text,
            {
              color: "#ABB4BD",
              fontSize: 15,
              textAlign: "center",
              marginVertical: 20,
            },
          ]}
        >
          Or
        </Text>

        <InputTextField
          style={styles.inputTitle}
          title="Enter the usercode sent to your email/phone"
        />
        {/* <InputTextField
          style={{
            marginTop: 32,
            marginBottom: 8,
          }}
          title="Password"
          isSecure={true}
        /> */}

        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
          What is this?
        </Text>

        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => {
            RootNavigation.navigate("MyBottomTabs");
          }}
        >
          <Text
            onPress={() => MyBottomTabs}
            style={[
              styles.text,
              { color: "#fff", fontWeight: "600", fontSize: 16 },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              fontSize: 18,
              color: "#ABB4BD",
              textAlign: "center",
              marginTop: 24,
            },
          ]}
        >
          {/* Don't have an account?{" "} */}
          <Text style={[styles.text, styles.link]}>
            You will need to have had a vaccination to have an account{" "}
          </Text>{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  text: {
    color: "#1D2029",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171,180,189,0.65)",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(171,180,189,0.35)",
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: "#FF1654", //get this to a different colour
    fontSize: 14,
    fontWeight: "500",
  },
  submitContainer: {
    backgroundColor: "#FF1654",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255,22,84,0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
