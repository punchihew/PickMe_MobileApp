import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView>
       <View style = {styles.container}>
       <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=19175&format=png&color=000000',
            }}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
            >
            </ImageBackground>
            
        </TouchableOpacity>
        <Text style ={styles.Text}>Clear Card</Text>
       </View>

       <View style={styles.container1}>
       <TouchableOpacity style={styles.button1} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000',
            }}
            style={styles.imageBackground1}
            imageStyle={styles.imageStyle1}
            >
            </ImageBackground>
            
        </TouchableOpacity>

        <Text style = {styles.Text1}>Delivery Address</Text>
        <Text style= {styles.Text2}>Gamini Hall , MoCallum Road , Colombo 10</Text>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        width: 390,
        height: 50,
        backgroundColor: 'white', 
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        marginTop:10,
      },
      button: {
        width: 32,
        height: 36,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:8,
        marginLeft:10,
        display:"flex"
      },

      imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageStyle: {
        borderRadius: 10,
      },    
      Text:{
            color: 'red',
            fontWeight: 'bold',
            marginLeft:310,
            marginTop:-28,
      },
      container1: {
        width: 390,
        height: 640,
        backgroundColor: 'white', 
        position: 'relative',
        shadowColor: 'orange',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        marginTop:10,
      },
      button1: {
        width: 32,
        height: 36,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:28,
        marginLeft:30,
        display:"flex"
      },

      imageBackground1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageStyle1: {
        borderRadius: 10,
      },
      Text1:{
        color: 'black',
        fontWeight: 'bold',
        marginLeft:66,
        marginTop:-28,
     },
    Text2:{
        color: 'orange',
        fontWeight: 'bold',
        marginLeft:66,
        marginTop:1,
  },
      

    })
       