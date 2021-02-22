import * as React from "react";
import { Button, StatusBar, Text, View, Image } from "react-native";
import styled from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";

const MainpageToolbar = () => {
  return (
    <Container>
      <Header>
        <ProfilePhoto source={require("./profilePicture.png")} />
        <Welcome>
          <Text style={{ color: "#dcdcdc" }}>Welcome,</Text>

          <Text style={{ color: "#808080" }}>Blockchain Hero</Text>
        </Welcome>
        <FontAwesome5 name="cog" size={24} color="#565656" />
      </Header>

      <StatusBar barStyle="light-content" />
    </Container>
  );
};
export default MainpageToolbar;
// const StatusBar = styled.StatusBar``;

const ProfilePhoto = styled.Image`
  width: 40;
  height: 40;
  border-radius: 20px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 16px;
`;
