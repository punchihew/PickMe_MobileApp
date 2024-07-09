import React from 'react'
import { Text, View,StyleSheet,Image,TextInput,ScrollView } from "react-native";


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

       <TextInput
        style={styles.input}
        placeholder="Search Here"
        keyboardType="default"
      />

       <Image
        style={styles.search}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=119005&format=png&color=000000',
        }}
      /> 
       <Text style = {styles.Text3}>Outlets Near You!</Text>


       <ScrollView style={styles.scrollView}>

       <Image
        style={styles.image1}
        source={require('../assets/home/image5.jpg')}
      />

    <Image
        style={styles.image1}
        source={require('../assets/home/image5.jpg')}
      />

     <Image
        style={styles.image1}
        source={require('../assets/home/image5.jpg')}
      />

       </ScrollView>
     

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
        color:"black",
        marginLeft:-110
      },
      Text2:{
        fontSize :20,
        fontWeight: 'bold',
        color:"#FFC301",
        marginLeft:-300
      },
      input: {
        height: 35,
        width : 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        backgroundColor: "#FBFAF5"
      },

      search:{
        width: 35,
        height: 35,
        marginLeft:237,
        marginTop: -46,
      },
      Text3:{
        fontSize :20,
        fontWeight: 'bold',
        color:"orange",
        marginLeft:-200,
        marginTop:10,
      },

      image1: {
        width: 320,
        height: 220,
      position:"relative",
      borderRadius:10,
      marginLeft:-20,
      marginTop:10
      },

      scrollView: {
        marginHorizontal: 20,
      },


      
});