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
        style={styles.location1}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000',
        }}
      /> 
        <Text style = {styles.Text4}>Sri Lanka, Matara</Text>
      <View>
      <Image
        style={styles.location}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=70098&format=png&color=000000',
        }}
      /> 

       
      </View>
       
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
          uri: 'https://img.icons8.com/?size=100&id=7695&format=png&color=000000',
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

            <View style = {styles.last}>
              <Text style = {styles.Text5}>More Info</Text> 
            </View>
            <Image
        style={styles.lastPic}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
        }}
        />
       
    <Image
        style={styles.image1}
        source={require('../assets/home/image1.jpg')}
      />
      
      <View style = {styles.last}>
              <Text style = {styles.Text5}>More Info</Text> 
            </View>
            <Image
        style={styles.lastPic}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
        }}
        />

     <Image
        style={styles.image1}
        source={require('../assets/home/image2.jpg')}
      /> 

          <View style = {styles.last}>
              <Text style = {styles.Text5}>More Info</Text> 
            </View>
            <Image
        style={styles.lastPic}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
        }}
        />

     <Image
        style={styles.image1}
        source={require('../assets/home/image8.jpg')}
      />
          <View style = {styles.last}>
              <Text style = {styles.Text5}>More Info</Text> 
            </View>
            <Image
        style={styles.lastPic}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
        }}
        />

      <Image
        style={styles.image1}
        source={require('../assets/home/image9.jpg')}
        
      />

          <View style = {styles.last}>
              <Text style = {styles.Text5}>More Info</Text> 
            </View>
            <Image
        style={styles.lastPic}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
        }}
        />

      <Image
        style={styles.image1}
        source={require('../assets/home/image10.jpg')}
      />
            <View style = {styles.last}>
              <Text style = {styles.Text5}>More Info</Text> 
            </View>
            <Image
        style={styles.lastPic}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
        }}
        />

       </ScrollView>
      
       <View style={styles.footer}>

       <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=2797&format=png&color=000000',
        }}
        />

      <Image
        style={styles.tinyLogo4}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=51779&format=png&color=000000',
        }}
        />

        <Image
        style={styles.tinyLogo5}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=23175&format=png&color=000000',
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
        width: 25,
        height: 25,
        marginLeft:160,
        marginTop: -30,
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
        width: 32,
        height: 32,
        marginTop:-58,
        marginLeft:10
      },

      tinyLogo5:{
        width: 30,
        height: 35,
        marginTop:-30,
        marginLeft:340
      },

      Text4:{
        fontSize :8,
        textAlign : "left",
        fontWeight: 'bold',
        marginTop:-7,
        marginLeft:-143
      },

      last: {
        height: 28,
        width:90,
        backgroundColor: 'orange',
        borderTopColor: '#e7e7e7',
        borderRadius:10,
        marginTop:-20,
        marginLeft:220,
        
      },

      Text5:{
        textAlign:"center",
        marginTop:6,
        marginLeft:-10
      },
      lastPic: {
        width: 20,
        height: 20,
      position:"relative",
      borderRadius:10,
      marginLeft:290,
      marginTop:-26
      },

      location1:{
        width: 28,
        height: 28,
        marginLeft:-230,
        marginTop: -32,
      },
     


});