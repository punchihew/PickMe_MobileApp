import React from 'react'
import { Text, View,StyleSheet,Image,TextInput,TouchableOpacity, } from "react-native";

export default function index() {
  return (
    <View style = {styles.container}>


       <Image
        style={styles.location2}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=9q3GMpxNIMjC&format=png&color=000000',
        }}
      /> 

       <Image
        style={styles.location}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=IFhxBaYSUYkJ&format=png&color=000000',
        }}
      /> 
       <Text style = {styles.Text}>Hello, Navishka!</Text>
       <Text style = {styles.Text1}>Make your own food stay at</Text>
       <Text style = {styles.Text2}>Home!</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', 
        position: 'relative'
      },
      
      button:{
        width: 80,
        height: 18,
        marginRight:280,
        fontWeight: 'bold',
        color: 'black',
        borderRadius:10,
        backgroundColor : "orange",
        marginTop:-20
      
      },

    location:{
        width: 35,
        height: 35,
        marginLeft:300,
        marginTop: -38,
      },

      location2:{
        width: 50,
        height: 50,
        marginTop: 9,
        marginRight:300,
        borderRadius:10
      },

      currentIndicator: {
        height: 1,
        width: 350,
        borderRadius: 10,
        backgroundColor:"orange",
        marginHorizontal: 5,
        marginTop:10
      },
      Text:{
        fontSize :9,
        textAlign : "left",
        fontWeight: 'bold',
        marginTop:20,
        marginRight:290
      },

      Text1:{
        fontSize :20,
        fontWeight: 'bold',
        color:"#FFC301",
        marginLeft:-50
      }
      Text1:{
        fontSize :20,
        fontWeight: 'bold',
        color:"#FFC301",
        marginLeft:-50
      }

      
});