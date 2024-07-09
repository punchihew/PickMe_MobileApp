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
        style={styles.tinyLogo5}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=14oX0z9ydOeX&format=png&color=000000',
        }}
        />

       <Image
        style={styles.tinyLogo5}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=9807&format=png&color=000000',
        }}
        />

       <Image
        style={styles.tinyLogo5}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=19099&format=png&color=000000',
        }}
        />
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

  tinyLogo5:{
    width: 20,
    height: 24,
    marginTop:20,
    marginLeft:-290
  },

});