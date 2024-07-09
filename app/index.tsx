import React from 'react'
import { Text, View,StyleSheet,Image,TextInput,TouchableOpacity, } from "react-native";

export default function index() {
  return (
    <View style = {styles.container}>
        <Text style = {styles.Text1}>Welcome Foodies</Text>

        <Image
        style={styles.location}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=IFhxBaYSUYkJ&format=png&color=000000',
        }}
      /> 

       <Image
        style={styles.location1}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12773&format=png&color=000000',
        }}
      /> 

        <Image
        style={styles.location2}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=104&format=png&color=000000',
        }}
      /> 

     <TouchableOpacity style={styles.button} onPress={() => alert('Welcome To Our Foodies!')}>
        <Text style={styles.Text}> LOG OUT</Text>
      </TouchableOpacity>

      <View style={styles.currentIndicator} />
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
      location:{
        width: 28,
        height: 24,
        marginLeft:340,
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
      Text:{
   
        textAlign:'center',
        
      },

    Text1:{
      marginTop:20,
      textAlign:'center',
      fontWeight: 'bold',
      
    },

    location1:{
        width: 30,
        height: 30,
        marginTop: -25,
        marginLeft:220,
      },

      location2:{
        width: 24,
        height: 25,
        marginTop: -29,
        marginLeft:280,
      },

      currentIndicator: {
        height: 1,
        width: 350,
        borderRadius: 10,
        backgroundColor:"orange",
        marginHorizontal: 5,
        marginTop:10
      },

      
});