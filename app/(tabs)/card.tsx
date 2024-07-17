import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,ImageBackground,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function index() {
  return (
    <SafeAreaView>
       <View style = {styles.container}>
       <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')} >
           <Link href="/profile" style={{ flex: 1 }}>
              
              </Link>
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=000000',
            }}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
            >
            </ImageBackground>
            
        </TouchableOpacity>
        <Text style ={styles.Text10}>My Card</Text>
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
        <Text style= {styles.Text5}>Gamini Hall , MoCallum Road , Colombo 10</Text>
       </View>

       <View style={styles.container2}>
       <TouchableOpacity style={styles.button2} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=489&format=png&color=000000',
            }}
            style={styles.imageBackground2}
            imageStyle={styles.imageStyle2}
            >
            </ImageBackground>
            
        </TouchableOpacity>
        <Text style ={styles.Text11}>Kells Super Colombo</Text>
       </View>

       <View style={styles.container3}>
          
            <Text style = {styles.Text4}>Rice Kottu With Chiken Popcorn</Text>
            <Text style = {styles.Text5}>RS.135.00</Text>
            <Image
            style={styles.tinyLogo1}
            source={require('../../assets/home/Home2/Ellipse_3.png')}
            />            

                  <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=3314&format=png&color=000000',
                    }}
                    />     

                    <Text style = {styles.Text12}>2</Text> 

                    <Image
                    style={styles.tinyLogo6}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=62888&format=png&color=000000',
                    }}
                    />  
       </View>

       <View style={styles.container3}>
          
          <Text style = {styles.Text4}>Rice Kottu With Chiken Popcorn</Text>
          <Text style = {styles.Text5}>RS.135.00</Text>
          <Image
          style={styles.tinyLogo1}
          source={require('../../assets/home/Home2/Ellipse_2.png')}
          />            

<Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=3314&format=png&color=000000',
                    }}
                    />     

                    <Text style = {styles.Text12}>1</Text> 

                    <Image
                    style={styles.tinyLogo6}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=62888&format=png&color=000000',
                    }}
                    />  
     </View>
     <View style={styles.container3}>
          
          <Text style = {styles.Text4}>Rice Kottu With Chiken Popcorn</Text>
          <Text style = {styles.Text5}>RS.135.00</Text>
          <Image
          style={styles.tinyLogo1}
          source={require('../../assets/home/Home2/Ellipse_4.png')}
          />      

                  <Image
                    style={styles.tinyLogo5}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=3314&format=png&color=000000',
                    }}
                    />     

                    <Text style = {styles.Text12}>2</Text> 

                    <Image
                    style={styles.tinyLogo6}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=62888&format=png&color=000000',
                    }}
                    />  
     </View>

     <View style={styles.container4}>
         
         <Text style = {styles.Text6}>Sub Total (LKR)</Text>
         <Text style = {styles.Text6}>Dilivery Fee (LKR)</Text>
         <Text style = {styles.Text6}>Handling Fee (LKR)</Text>
         <Text style = {styles.Text7}>Total(LKR)</Text>


         <Text style = {styles.Text8}> + 178.00</Text>
         <Text style = {styles.Text8}> + 110.00 </Text>
         <Text style = {styles.Text8}> 1780.00 </Text>
         <Text style = {styles.Text9}> 1670.71 </Text>
     </View>

       {/* <View style={styles.flooter}>

              <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=14oX0z9ydOeX&format=png&color=000000',
                    }}
                    />
           
           <Text style = {styles.Text3}>Place A Oder</Text>
       </View> */}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        width: 390,
        height: 50,
        backgroundColor: '#FEF5E6', 
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        marginTop:10,
      },
      
      button: {
        width: 28,
        height: 32,
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
        backgroundColor: '#FEF5E6', 
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
   

  container2: {
    width: 330,
    height: 44,
    backgroundColor: '#FFBD31', 
    position: 'relative',
    shadowColor: 'orange',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android
    marginTop:-538,
    marginLeft:32,
    borderRadius:10,
  },
  button2: {
    width: 32,
    height: 36,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:1,
    marginLeft:20,
  },

  imageBackground2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle2: {
    borderRadius: 10,
  },

  container3: {
    width: 368,
    height: 68,
    backgroundColor: 'white', 
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android
    marginTop:18,
    marginLeft:12,
    borderRadius:10,
  },

  flooter: {
    width: 368,
    height: 54,
    backgroundColor: '#00941A', 
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android
    marginTop:20,
    marginLeft:12,
    borderRadius:10,
  },
  tinyLogo4:{
     
    width: 30,
    height: 28,
    marginTop:18,
    marginLeft:16
  },
  Text3:{
    fontSize:20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:120,
    marginTop:-28,
 },
 tinyLogo1:{
  width: 60,
  height: 60,
  marginTop:-40,
  marginLeft:10
},
tinyLogo2:{
  width: 60,
  height: 60,
  marginTop:10,
  marginLeft:10
},
tinyLogo3:{
  width: 60,
  height: 60,
  marginTop:10,
  marginLeft:10
},

Text4:{
  color: 'orange',
  fontWeight: 'bold',
  marginLeft:80,
  marginBottom:48,
},

Text5:{
  color: 'black',
  fontWeight: 'bold',
  marginLeft:86,
  marginTop:6,
},

container4: {
  width: 368,
  height: 148,
  backgroundColor: 'white', 
  position: 'relative',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5, // for Android
  marginTop:22,
  marginLeft:12,
  borderRadius:10,
},
Text6:{
  color: 'black',
  marginLeft:12,
  marginTop:16,
},
Text7:{
  color: 'black',
  fontWeight: 'bold',
  marginLeft:12,
  marginTop:16,
},

  Text8:{
    color: 'black',
    marginLeft:280,
    marginTop:-52,
  },
  Text9:{
    color: 'black',
    fontWeight: 'bold',
    marginLeft:280,
    marginTop:89,
  },
  Text10:{
    color: 'black',
    fontWeight: 'bold',
    marginLeft:60,
    marginTop:-22,
  },
  Text11:{
    color: 'black',
    fontWeight: 'bold',
    marginLeft:70,
    marginTop:-22,
  },

  tinyLogo5:{
     
    width: 14,
    height: 28,
    marginTop:-40,
    marginLeft:280,
  },
  tinyLogo6:{
     
    width: 14,
    height: 12,
    marginTop:-15,
    marginLeft:320,
  },
  Text12:{
    color: 'black',
    fontWeight: 'bold',
    marginLeft:306,
    marginTop:-22,
  }
 
      

    })
       

