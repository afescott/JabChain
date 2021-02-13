import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mainpage from "../views/Mainpage";
import { Homepage } from "../views/Homepage";

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Homepage" component={Homepage}></Screen>
    <Screen name="Mainpage" component={Mainpage} />
    {/* <Screen name="Contact" component={Contact} />
    <Screen name="Contacts" component={sendMessage} /> */}
  </Navigator>
);

export const HomeNavigate = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
