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

     <TouchableOpacity style={styles.button} onPress={() => alert('Welcome To Our Foodies!')}>
        <Text style={styles.Text}> LOG OUT</Text>
      </TouchableOpacity>
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
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft:10,
      },
      button:{
        width: 80,
        height: 18,
        marginRight:280,
        fontWeight: 'bold',
        color: 'black',
        borderRadius:10,
        backgroundColor : "orange",
        position:"relative",
        marginTop:-40
      
      },
      Text:{
   
        textAlign:'center',
        
      },

    Text1:{
      marginTop:20,
      textAlign:'center',
      fontWeight: 'bold',
      
    },

      
});