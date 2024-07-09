import React from 'react'
import { Text, View,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity,SafeAreaView } from "react-native";


export default function index() {
  return (
    <SafeAreaView style = {styles.container}>


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


       <Image
        style={styles.Ellipse4}
        source={require('../assets/home/Home2/Ellipse_3.png')}
      />
       <Image
        style={styles.Ellipse5}
        source={require('../assets/home/Home2/Ellipse_5.png')}
      />
       <Image
        style={styles.Ellipse3}
        source={require('../assets/home/Home2/Ellipse_4.png')}
      />
      <Image
        style={styles.Ellipse6}
        source={require('../assets/home/Home2/Ellipse_2.png')}
      />
            <View style={styles.currentIndicator} />
          
        
       <ScrollView style={styles.scrollView}>

       <Image
        style={styles.image1}
        source={require('../assets/home/image5.jpg')}
      />
       
    <Image
        style={styles.image1}
        source={require('../assets/home/image1.jpg')}
      />

     <Image
        style={styles.image1}
        source={require('../assets/home/image2.jpg')}
      />

     <Image
        style={styles.image1}
        source={require('../assets/home/image8.jpg')}
      />
      <Image
        style={styles.image1}
        source={require('../assets/home/image9.jpg')}
        
      />
      <Text> Good</Text>
      <Image
        style={styles.image1}
        source={require('../assets/home/image10.jpg')}
      />

       </ScrollView>
      
       <View style={styles.footer}>

       <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=118969&format=png&color=000000',
        }}
        />

      <Image
        style={styles.tinyLogo4}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=JjXkZB4POgHN&format=png&color=000000',
        }}
        />

        <Image
        style={styles.tinyLogo5}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=akhzv8xSoXT9&format=png&color=000000',
        }}
        />

        <Text style={styles.footerText}></Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF5EE', 
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
        margin: -1,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        backgroundColor: "#FBFAF5"
      },

      search:{
        width: 35,
        height: 35,
        marginLeft:237,
        marginTop: -32,
      },
      Text3:{
        fontSize :20,
        fontWeight: 'bold',
        color:"orange",
        marginLeft:-190,
        marginTop:10,
      },

      image1: {
        width: 320,
        height: 220,
      position:"relative",
      borderRadius:10,
      marginLeft:-10,
      marginTop:10
      },

      scrollView: {
        marginHorizontal: 20,
        marginLeft:-10,
        
      },

      footer: {
        height: 40,
        width:389,
        backgroundColor: 'orange',
        borderTopColor: '#e7e7e7',
        borderRadius:10
      },

      footerText: {
        fontSize: 18,
        textAlign:'center', 
      },

      Ellipse4: {
        width: 60,
        height: 60,
      borderRadius:10,
      marginLeft:-110,
      marginTop:5,
      },

      Ellipse5: {
        width: 60,
        height: 60,
      borderRadius:10,
      marginLeft:-290,
      marginTop:-61,
      borderColor:"orange"
      },

      Ellipse6: {
        width: 60,
        height: 60,
      borderRadius:10,
      marginLeft:270,
      marginTop:-61,
      
      },

      Ellipse3: {
        width: 60,
        height: 60,
      borderRadius:10,
      marginLeft:80,
      marginTop:-61,
      
      },
      tinyLogo3:{
        width: 50,
        height: 50,
        marginTop:10,
        marginLeft:170
      },
      
      tinyLogo4:{
        width: 50,
        height: 50,
        marginTop:-65,
        marginLeft:10
      },

      tinyLogo5:{
        width: 50,
        height: 50,
        marginTop:-50,
        marginLeft:320
      },

});