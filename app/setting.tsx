import { View, Text ,StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground,Image} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function index() {
  return (
    <SafeAreaView>
      <View style = {styles.container}>

      <TouchableOpacity style={styles.button2} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=80689&format=png&color=000000',
            }}
            style={styles.imageBackground2}
            imageStyle={styles.imageStyle2}
            >
            </ImageBackground>
            
        </TouchableOpacity>

        <Text style = {styles.Text2}>My Profile </Text>

                   <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=11642&format=png&color=000000',
                    }}
                    />  
      </View>

      <View style = {styles.container1}>
        <Text style = {styles.Text3}>Your Info</Text>
        
                    <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=11730&format=png&color=000000',
                    }}
                    />  
                         <Text style={styles.Text4}>Full Name</Text>
                         <Text style= {styles.Text7}>Navishka Pucnhihewa</Text>
                         <View style={styles.currentIndicator} />
                   <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=12580&format=png&color=000000',
                    }}
                    />  
                            <Text style={styles.Text4}>Email Address</Text>
                            <Text style= {styles.Text7}>NavishkaPucnhihewa@gmail.com </Text>
                            <View style={styles.currentIndicator} />
                   <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=59517&format=png&color=000000',
                    }}
                    />  
                        <Text style={styles.Text4}>Mobile Number</Text>
                        <Text style= {styles.Text7}> +94 714419471</Text>
                        <View style={styles.currentIndicator} />
                   <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=101486&format=png&color=000000',
                    }}
                    />  
                        <Text style={styles.Text4}>BirthDay</Text>
                        <Text style= {styles.Text7}>10 - 2 -2002</Text>
                        <View style={styles.currentIndicator} />
                   <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=109041&format=png&color=000000',
                    }}
                    />  
                      <Text style={styles.Text4}>Gender</Text>
                       <Text style= {styles.Text7}>Male</Text>
                      <View style={styles.currentIndicator} />
      </View>
      <View style = {styles.foolter}>
      <Text style = {styles.Text3}>Your Preferences</Text>
              
      <Image
                    style={styles.tinyLogo6}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=11730&format=png&color=000000',
                    }}
                    />  
                         <Text style={styles.Text5}>Full Name</Text>
                         <View style={styles.currentIndicator} />
                   <Image
                    style={styles.tinyLogo6}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=12580&format=png&color=000000',
                    }}
                    />  
                            <Text style={styles.Text5}>Email Address</Text>
                            <View style={styles.currentIndicator} />
                   <Image
                    style={styles.tinyLogo6}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=59517&format=png&color=000000',
                    }}
                    />  
                        <Text style={styles.Text5}>Mobile Number</Text>
                        <View style={styles.currentIndicator} />
      </View>

      
      <View style={styles.flooter1}>
        <Text style = {styles.Text6}> LOGOUT</Text>
        <Link href="/login" style={{ flex: 1 }}>
              
              </Link>
        </View>
      
    </SafeAreaView>
  )
}   

const styles = StyleSheet.create({

  container: {
      width: 390,
      height: 50,
      backgroundColor: '#ffbfff', 
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // for Android
      marginTop:10,
    },
    container1: {
      width: 390,
      height: 420,
      backgroundColor: '#ffffec', 
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // for Android
      marginTop:10,
    },
    foolter: {
      width: 390,
      height: 240,
      backgroundColor: '#ffffec', 
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // for Android
      marginTop:10,
    },

    button2: {
      width: 36,
      height: 36,
      borderRadius: 10,
      overflow: 'hidden',
      marginTop:6,
      marginLeft:12,
    },
  
    imageBackground2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle2: {
      borderRadius: 10,
    },
    Text2:{
      color: 'black',
      fontWeight: 'bold',
      marginLeft:150,
      marginTop:-22,
    },
    Text3:{
      fontSize:17,
      color: 'black',
      fontWeight: 'bold',
      marginLeft:10,
      marginTop:10,
    },
  
  tinyLogo4:{
     
    width: 30,
    height: 28,
    marginTop:-20,
    marginLeft:340
  },
  tinyLogo5:{
     
    width: 30,
    height: 28,
    marginTop:18,
    marginLeft:14
  },

  Text4:{
    fontSize:13,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:78,
    marginTop:-30,
  },
  currentIndicator: {
    height: 2,
    width: 260,
    borderRadius: 10,
    backgroundColor:"orange",
    marginHorizontal: 5,
    marginLeft:70,
    marginTop:20
  },

  tinyLogo6:{
     
    width: 30,
    height: 28,
    marginTop:18,
    marginLeft:14
  },

  Text5:{
    fontSize:13,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:78,
    marginTop:-30,
  },

  flooter1: {
    width: 180,
    height: 40 ,
    backgroundColor: 'red', 
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android
    marginTop:-40,
    marginLeft:102,
    borderRadius:10,
  },

  Text6:{
    fontSize:17,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:50,
    marginTop:11,
  },

  Text7:{
    fontSize:10,
    color: 'black',
    marginLeft:90,
    marginTop:10,
  },

  
  })