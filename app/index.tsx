import { View, Text ,StyleSheet,SafeAreaView,Image} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView style={styles.container}> 
       <View style={styles.container1}>
       <Image
        style={styles.image}
        source={require('../assets/home/image5.jpg')}
      />
      <Text style = {styles.Text}> Sri Lankan Rice And Curry</Text>

      <Image
        style={styles.tinyLogo1}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=14oX0z9ydOeX&format=png&color=000000',
        }}
        />
        <Text style = {styles.Text1}>Delivery</Text>

       <Image
        style={styles.tinyLogo2}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=9807&format=png&color=000000',
        }}
        />

        <Text style = {styles.Text2}>Self Pickup</Text>

       <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=19099&format=png&color=000000',
        }}
        />
         <Text>Est:31 +mins</Text>
       </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white', 
    position: 'relative'
  },
  container1: {
    width:380,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange', 
    position: 'relative'
  },
  image: {
    width: 340,
    height: 220,
    position:"relative",
    borderRadius:18,
    marginLeft:-6,
    marginTop:10
  },

  Text:{
    fontSize :20,
    fontWeight: 'bold',
    color:"white",
    marginRight:100,
    marginTop:10,
  },

  tinyLogo1:{
    width: 20,
    height: 24,
    marginTop:20,
    marginLeft:-290
  },
  tinyLogo2:{
    width: 20,
    height: 24,
    marginTop:-20,
    marginLeft:-140
  },
  tinyLogo3:{
    width: 20,
    height: 24,
    marginTop:-20,
    marginLeft:36
  },

  Text1:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:-220,
    marginTop:-19,
  },

  Text2:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:-60,
    marginTop:-16,
  },

});