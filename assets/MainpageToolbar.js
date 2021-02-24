import * as React from "react";
import { Button, StatusBar, Text, View, Image } from "react-native";
import styled from "styled-components";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import purchaseData from "./TempApiData";

const MainpageToolbar = () => {
  const renderPurchases = ({ itemaga }) => {
    <Purchase>
      <PurchaseInfo>
        <Text>{itemaga.product}</Text>
        <Text>{itemaga.store}</Text>
        <Text>{itemaga.address}</Text>
      </PurchaseInfo>
      {/* <Text>{itemf.price}</Text> */}
    </Purchase>;
  };
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
      {/* <Text
        style={{
          color: "#808080",
          alignSelf: "center",
          justifyContent: "center",
          fontSize: 20.0,
        }}
      >
        {" "}
        Your last login was 23/02/2021
      </Text> */}
      <View>
        <Text style={{ fontSize: 60.0 }}>Space for data visualisation</Text>
      </View>
      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <Text style={{ color: "#dcdcdc" }}>Last vaccinations</Text>
              <MaterialIcons name="sort" size={24} color="#5196f4" />
            </TransactionsHeader>
            <SearchContainer>
              <AntDesign name="search1" size={18} color="#5196f4" />
              <Search placeholder="Search Transactions" />
            </SearchContainer>
          </>
        }
        data={purchaseData}
        // renderItem={renderPurchases}
        renderItem={({ item }) => (
          <Purchase>
            <PurchaseInfo>
              <Text style={{ color: "#dcdcdc" }}>{item.product}</Text>
              <Text style={{ color: "#808080" }}>{item.store}</Text>
              <Text style={{ color: "#808080" }}>{item.address}</Text>
            </PurchaseInfo>
            <Text style={{ color: "#808080" }}>{item.price}</Text>
          </Purchase>
        )}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar barStyle="light-content" />
    </Container>
  );
};
export default MainpageToolbar;
// const StatusBar = styled.StatusBar``;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
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

const Purchase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const PurchaseInfo = styled.View``;

const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
`;
const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction:row;
  align-items:center;
  padding 0 8px
  border-radius:6px;
`;

const Search = styled.TextInput`
  flex: 1;
  padding 8px 16px;
   font-family ={Platform.OS === "ios" ? "Avenir" : "serif"       //not sure this works
  color: #dbdbdb;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 16px;
`;
