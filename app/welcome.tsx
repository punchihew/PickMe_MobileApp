import { StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

type Props = {}

const welcom = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text></Text>

      <Image
        style={styles.tinyLogo}
        source={require('../assets/welcomImage.png')}
      />

     <Image
        style={styles.tinyLogo1}
        source={require('../assets/imagePickMe.jpeg')}
      />
      
      

      <TouchableOpacity style={styles.button} onPress={() => alert('Welcome To Our Foodies!')}>
         <Link href="/login" style={{ flex: 1 }}>
                {/* <Loading/> */}
            </Link>
        <Text style={styles.Text}> Get Started</Text>
      </TouchableOpacity>
      <Image
        style={styles.tinyLogo4}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000',
        }}
      /> 
         <Image
        style={styles.tinyLogo5}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000',
        }}
      />
       <Image
        style={styles.tinyLogo6}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=17843&format=png&color=000000',
        }}
      />


      <Text style = {styles.Text1}>We help you to find best and delicious food</Text>
      <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=o5eTz7iA0GaX&format=png&color=000000',
        }}
      />

    </View>
  )
}

export default welcom

const styles = StyleSheet.create({
  
    
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFC301', 
    position: 'relative'
  },

  tinyLogo: {
    width: 300,
    height: 300,
  position:"relative"
  },

  tinyLogo1:{
    width: 200,
    height: 200,
  position:"relative",
  marginTop: 10,
  marginRight:50
  },

  button:{
    width: 200,
    height: 50,
    marginLeft:80,
    fontWeight: 'bold',
    color: 'black',
    borderRadius:30,
    backgroundColor : "white",
    position:"relative"
  
  },

  Text:{
   
    textAlign:'center',
    marginTop:15,
    
  },

  Text1:{
    marginTop:30,
    fontSize:16,
    
  },

  tinyLogo3:{
    width: 20,
    height: 20,
    marginTop: -20,
    marginLeft:340
  },

  tinyLogo4:{
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft:10,
  },

  tinyLogo5:{
    width: 20,
    height: 20,
    marginTop: -20,
    marginLeft:60,
  },

  tinyLogo6:{
    width: 24,
    height: 20,
    marginTop: -20,
    marginLeft:110,
  },

  

})