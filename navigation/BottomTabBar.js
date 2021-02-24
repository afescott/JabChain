import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Homepage } from "../views/Homepage";
import Mainpage from "../views/Mainpage";
import VerifyFloatingButton from "../assets/VerifyFloatingButton";

// https://dribbble.com/shots/7046707-Nav-Bar-Animation

//navigation ref requires structure to be changed
export const BottomTabNavigate = () => (
  <NavigationContainer>
    <MyBottomTabs />
  </NavigationContainer>
);

const BottomTab = createBottomTabNavigator();

function MyBottomTabs() {
  return (
    <BottomTab.Navigator
      // activeColor="#f0edf6"
      style={{ activeColor: "#f0edf6" }}
      barStyle={{ backgroundColor: "#1e1e1e" }}
    >
      <BottomTab.Screen
        name="Pay"
        component={Homepage}
        options={{
          tabBarButton: () => <VerifyFloatingButton />,
        }}
      />
    </BottomTab.Navigator>
  );
}

//     },
//     //     Measures: {
//     //         screen: MeasuresScreen,
//     //         navigationOptions: {
//     //             tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
//     //         }
//     //     },
//     //     Add: {
//     //         screen: () => null,
//     //         navigationOptions: {
//     //             tabBarIcon: <AddButton />
//     //         }
//     //     },
//     //     Treatment: {
//     //         screen: TreatmentScreen,
//     //         navigationOptions: {
//     //             tabBarIcon: () => <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
//     //         }
//     //     },
//     //     Profile: {
//     //         screen: ProfileScreen,
//     //         navigationOptions: {
//     //             tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#CDCCCE" />
//     //         }
//     //     }
//     // },
//     // {
//     //     tabBarOptions: {
//     //         showLabel: false
//     //     }

// });
