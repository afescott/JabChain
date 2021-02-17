import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mainpage from "../views/Mainpage";
import { Homepage } from "../views/Homepage";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Certificates } from "../views/Certificates"

const Tab = createMaterialTopTabNavigator();
  

function MyTabs() {
  return (
          <Tab.Navigator tabBarOptions={{style: { backgroundColor: 'powderblue' }}}>
              <Tab.Screen name="Mainpage" component={Mainpage} />
              <Tab.Screen name="Certificates" component={Certificates} />
          </Tab.Navigator>
          
  );
}


export default MyTabs;

// const Stack = createStackNavigator();

// export default function StackVerification() {
//   return (
      
//     <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen name="Home" component={VerifyUser} />
//     <Stack.Screen name="Details" component={DetailsScreen} />
//   </Stack.Navigator>
          
//   );
// }


const { Navigator, Screen } = createStackNavigator();

 const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Homepage" component={Homepage}></Screen>
    <Screen name="Mainpage" component={Mainpage} />
   
  </Navigator>
);

export const HomeNavigate = () => (
   <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);


