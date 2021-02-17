import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

import styled from "styled-components";
import {AntDesign, Entypo } from "@expo/vector-icons"


export default class VerifyFloatingButton extends React.Component {

animation = new Animated.Value(0);

toggleMenu  = () => {
const toValue = this.open ? 0 : 1;

Animated.spring(this.animation, {
  toValue,
  friction : 5,
}).start()

this.open = !this.open;

}


  render()
  {
    const pinStyle = {
      transform: [
        {scale:this.animation},
        {
       translateY : this.animation.interpolate({
         inputRange : [0, 1],
         outputRange: [0,-80]
         
       })
      }
      ]
      }
    

     const rotation = {
transform: [{
 rotate : this.animation.interpolate({
   inputRange : [0, 1],
   outputRange: ["0deg", "45deg"]
 })
}]



      
     }
    return (
        <View style={styles.container}> 
<Text> Button</Text>
{/* <Image source={require("../assets/verifylogo.png")} resize="cover" style={{width:500, height : 900, opacity:0.5}} ></Image> */}

    {/* <TouchableWithoutFeedback>
     <Animated.View style={styles.button, styles.secondary}>
    <AntDesign name="hearto" size={20} color="#F02A4B">/ </AntDesign>
     </Animated.View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback>
     <Animated.View style={styles.button, styles.secondary}></Animated.View>
     <Image/>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback>
     <Animated.View style={styles.button, styles.secondary}></Animated.View>
     <Image/>
    </TouchableWithoutFeedback> */}

<TouchableWithoutFeedback>
     <Animated.View style={styles.button, styles.secondary}>
     <Entypo name="thumbs-up" size={160} color="#FMP" ></Entypo>
     </Animated.View>
    </TouchableWithoutFeedback>

<TouchableWithoutFeedback>
     <Animated.View style={styles.button, styles.secondary, pinStyle}>
     <Entypo name="location-pin" size={160} color="#FMP" ></Entypo>
     </Animated.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={this.toggleMenu}>
     <Animated.View style={styles.button, styles.menu, rotation} >
     <AntDesign name="plus" size={200} color="#FAC" ></AntDesign>
     </Animated.View>
    </TouchableWithoutFeedback>

    </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    marginTop:300
    
   
    // position:"absolute" //this might f it up but the guy uses it in the vid
  
  },
  button : {
    position: "absolute",
    width: 500,  
  height: 500,   
  borderRadius: 60/2,
   alignItems:"center",
   justifyContent: "center",
  shadowRadius:10,
  elevation:10,  //android shadow
shadowColor: "#F02A4B",   //shadows props only avaliable on iOS
shadowOpacity:0.3,
shadowOffset : {height:10}                                         
  },
menu:
{
backgroundColor: "#FFF",
},
secondary: {
width : 350,
height : 350,
borderRadius : 48/2,
backgroundColor : "#FFF"

}
}
)





