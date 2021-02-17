import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import styled from "styled-components/native";

const HeaderStyle = styled.View`
  height: 80px;
  width: 100%;
`;

const Content = styled.View`
  border-color: black;
  padding: 16px;
`;
//allows access to parent class, will provide reference error otherwis
export class Homepage extends React.Component {
  constructor(props) {
    super(props); //allows access to parent class, will provide reference error otherwis

    this.state = { isLoggedIn: false };
  }

  togglerUser = () => {
    this.setState((previousState) => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };

  //arrow function in toggerUser means we don't have to bind to this

  render() {
    let display = this.state.isLoggedIn ? "Verify" : this.props.message;
    return (
      <View style={styles.style}>
        <View
          style={{
            backgroundColor: "powderblue",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.logoStyle}
            source={require("../assets/jablogo.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: "skyblue",
            flex: 3,
            alignItems: "center",
          }}
        >
          <Text style={styles.headText} onPress={this.togglerUser}>
            {display}
          </Text>
          <Text>By clicking Log in, you agree to our terms of service. </Text>
          <Text>Privacy policy heree aswell maybe? </Text>
        </View>
        <View
          style={{
            backgroundColor: "steelblue",
            flex: 3,
            alignItems: "center",
          }}
        >
          <Text style={styles.instructions}>
            Please log in with the confirmation code sent to your email or phone
            number
          </Text>

          <TextInput
            style={styles.textField}
            value=""
            placeholder="Enter your code"
          ></TextInput>

          <View style={styles.fixToText}>
            <Button
              style={{ flex: 2 }}
              title="LOGO"
              onPress={() => this.props.navigation.navigate("Mainpage")}
            />
            <Button
              style={{ flex: 2 }}
              title="Login"
              onPress={() => this.props.navigation.navigate("Mainpage")}
            />
          </View>
        </View>
      </View>

      /* // <View style={styles.style}>
      //   <View
      //     style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
      //   />
      //   <Image
      //     style={styles.logoStyle}
      //     source={require("../assets/jablogo.png")}
      //   />
      //   <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />

      //   <Text style={styles.headText} onPress={this.togglerUser}>
      //     {" "}
      //     {display}
      //   </Text>
      //   <Text>By clicking Log in, you agree to our terms of service. </Text>
      //   <Text>Privacy policy maybe </Text>

      //   <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />

      //   <Text style={styles.instructions}>
      //     Please log in with the confirmation code sent to your email or phone
      //     number
      //   </Text>

      //   <TextInput
      //     style={styles.textField}
      //     value=""
      //     placeholder="Enter your code"
      //   ></TextInput>

      //   <View style={styles.fixToText}>
      //     <Button
      //       title="Left button"
      //       onPress={() => Alert.alert("Left button pressed")}
      //     />
      //     <Button
      //       title="Right button"
      //       onPress={() => Alert.alert("Right button pressed")}
      //     />
      //   </View>
      // </View>

      //
      // ); */
    );
  }
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    alignItems: "flex-start",
    fontSize: 100,
    alignContent: "space-around",
    // marginBottom: 10,
  },
  textField: {
    marginVertical: 8,
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    // borderColor: "#000000",
    fontSize: 20,
  },
  headText: {
    textAlign: "center",

    // backgroundColor: "#fff",
    borderColor: "#000000",
    fontSize: 30,
  },
  instructions: {
    textAlign: "center",
    borderColor: "#000000",
    paddingTop: 25,
    lineHeight: 15,
    fontSize: 20,
  },
  style: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  headStyle: {
    backgroundColor: Platform.OS === "android" ? "#31e981" : "#35605a",
    //positive value works in the way of other components
    flexDirection: "row", //so image and text appear side by side

    borderColor: "#000000",
  },
  logoStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
