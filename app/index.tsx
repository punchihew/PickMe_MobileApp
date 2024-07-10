import { View, Text ,StyleSheet,SafeAreaView,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView style={styles.container}> 
       <View style={styles.container1}>

            <Image
            style={styles.tinyLogo8}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=40401&format=png&color=000000',
            }}
            />
            <Image
            style={styles.tinyLogo9}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=13042&format=png&color=000000',
            }}
            />
       <Image
        style={styles.image}
        source={require('../assets/home/image5.jpg')}
      />

           <Image
            style={styles.tinyLogo10}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=40401&format=png&color=000000',
            }}
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
          uri: 'https://img.icons8.com/?size=100&id=10034&format=png&color=000000',
        }}
        />
         <Text style = {styles.Text3}>Est:31 +mins</Text>

         
     <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
        <Text style={styles.Text4}> ADD </Text>
        <Image
        style={styles.tinyLogo4}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=nkplpFWWQEKZ&format=png&color=000000',
        }}
        />
      </TouchableOpacity>
       </View>

       <View style={styles.footer}>

            <Image
            style={styles.tinyLogo5}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=2797&format=png&color=000000',
            }}
            />

            <Image
            style={styles.tinyLogo6}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=51779&format=png&color=000000',
            }}
            />

            <Image
            style={styles.tinyLogo7}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=23175&format=png&color=000000',
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
    position: 'relative',
    borderRadius:10
  },
  image: {
    width: 360,
    height: 220,
    position:"relative",
    borderRadius:18,
    marginLeft:-2,
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
    width: 19,
    height: 22,
    marginTop:-18,
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
  Text3:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:136,
    marginTop:-16,
  },
  button:{
    marginLeft:280,
    fontWeight: 'bold',
    height:18,
    width:58,
    borderRadius:6,
    color: 'white',
    marginTop:20,
    backgroundColor:"#D6EBF2"
  
  },

  Text4:{
    fontSize :14,
    fontWeight: 'bold',
    color:"black",
    
  },
  tinyLogo4:{
     
    width: 16,
    height: 16,
    marginTop:-17,
    marginLeft:38
  },
  footer: {
    height: 40,
    width:389,
    backgroundColor: 'orange',
    borderTopColor: '#e7e7e7',
    borderRadius:10
  },
  tinyLogo5:{
    width: 50,
    height: 50,
    marginTop:10,
    marginLeft:170
  },
  
  tinyLogo6:{
    width: 32,
    height: 32,
    marginTop:-58,
    marginLeft:10
  },

  tinyLogo7:{
    width: 30,
    height: 35,
    marginTop:-30,
    marginLeft:340
  },
  tinyLogo8:{
    width: 30,
    height: 35,
    marginTop:6,
    marginLeft:320
  },
  tinyLogo9:{
    width: 38,
    height: 40,
    marginTop:-40,
    marginLeft:-330
  },
  tinyLogo10:{
    width: 38,
    height: 40,
    marginTop:-40,
    marginLeft:300
  },

});