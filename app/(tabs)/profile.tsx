import { View, Text,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container1}>
        <Image
            style={styles.tinyLogo1}
            source={require('../../assets/setting/setting.png')}
            />

            <Text style = {styles.Text}>Navishka Punchihewa</Text>
             <View style={styles.view}>
                <Text>GOLD MEMBER</Text>
                <Link href="/setting" style={{ flex: 1 }}>
              
                </Link>  
             </View>
             <Text style={styles.Text2}>View Profile</Text>

             <View style = {styles.claim}>
              <Text style = {styles.Text3}>
                Don't Miss Out Your Valuable Offers
              </Text>
              <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=23057&format=png&color=000000',
        }}
        />
              <View style={styles.currentIndicator} />

              <TouchableOpacity style={styles.button9} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000',
            }}
            style={styles.imageBackground1}
            imageStyle={styles.imageStyle1}
            >
            <Text style={styles.text}></Text>
            </ImageBackground>
            
        </TouchableOpacity>
             </View>

            

             <TouchableOpacity style={styles.button1} onPress={() => alert('Button pressed!')} > 
                 
                  <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=6Kirlpj9Yq0L&format=png&color=000000',
                    }}
                    />
                    <Text style={styles.Text1}>For a Friend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} onPress={() => alert('Button pressed!')} > 
                  
                  <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=47270&format=png&color=000000',
                    }}
                    />
                      <Text  style={styles.Text1}>Membership</Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.button3} onPress={() => alert('Button pressed!')} > 
                  <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=11267&format=png&color=000000',
                    }}
                    />
                      <Text  style={styles.Text1}>Help And Support</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4} onPress={() => alert('Button pressed!')} > 
                 <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=31771&format=png&color=000000',
                    }}
                    />
                      <Text  style={styles.Text1}>Earn With PickMe</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button8} onPress={() => alert('Button pressed!')} > 
                    
              <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=7994&format=png&color=000000',
                    }}
                    />
                      <Text style={styles.Text1}>Payment</Text>
              </TouchableOpacity>
             

       {/* <View style={styles.footer}>

        <TouchableOpacity style={styles.button7} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=2797&format=png&color=000000',
            }}
            style={styles.imageBackground1}
            imageStyle={styles.imageStyle1}
            >
            <Text style={styles.text}></Text>
            </ImageBackground>
            
            </TouchableOpacity>
        <TouchableOpacity style={styles.button5} onPress={() => alert('Button pressed!')} >
            <ImageBackground
                source={{
                uri: 'https://img.icons8.com/?size=100&id=23175&format=png&color=000000',
            }}
            style={styles.imageBackground1}
            imageStyle={styles.imageStyle1}
            >
            <Text style={styles.text}></Text>
            </ImageBackground>
            
            </TouchableOpacity>
        <TouchableOpacity style={styles.button6} onPress={() => alert('Button pressed!')} >
            <ImageBackground
            source={{
                uri: 'https://img.icons8.com/?size=100&id=51779&format=png&color=000000',
            }}
            style={styles.imageBackground1}
            imageStyle={styles.imageStyle1}
            >
            <Text style={styles.text}></Text>
            </ImageBackground>
            
        </TouchableOpacity>
            
      </View> */}
                    
            
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FEF5E6', 
        position: 'relative'
      },

      container1: {
        width:380,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FCE7A8', 
        position: 'relative',
        borderRadius:10,
        marginTop:10
      },
      tinyLogo1:{
        width: 60,
        height: 60,
        marginTop:6,
        marginLeft:300
      },

      Text:{
        fontSize :11,
        fontWeight: 'bold',
        color:"black",
        marginRight:240,
        marginTop:-44,
      },
       view:{
        width:110,
        height:20,
        backgroundColor:"gold",
        justifyContent:"center",
        marginLeft:-250,
        borderRadius:10,
        marginTop:2,
       },
       button1: {
        width: 320,
        height: 59,
        backgroundColor:"#F39234",
        borderRadius: 10,
        marginTop:50,
        marginLeft:-10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },
      button2: {
        width: 320,
        height: 59,
        backgroundColor:"#F39234",
        borderRadius: 10,
        marginTop:20,
        marginLeft:-10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },
      button3: {
        width: 320,
        height: 59,
        backgroundColor:"#F39234",
        borderRadius: 10,
        marginTop:20,
        marginLeft:-10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },
      button4: {
        width: 320,
        height: 59,
        backgroundColor:"#F39234",
        borderRadius: 10,
        marginTop:20,
        marginLeft:-10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },
      button8: {
        width: 320,
        height: 59,
        backgroundColor:"#F39234",
        borderRadius: 10,
        marginTop:20,
        marginLeft:-10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },
      footer: {
        height: 40,
        width:389,
        backgroundColor: 'orange',
        borderTopColor: '#e7e7e7',
        borderRadius:10,
        marginTop:80
      },
      button7: {
        width: 40,
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:18,
        marginLeft:170,
        display:"flex"
      },
    
      button5: {
        width: 40,
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:-60,
        marginLeft:10,
        display:"flex"
      },
      button6: {
        width: 32,
        height: 36,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:-38,
        marginLeft:340,
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
      text: {
        color: 'white',
        fontWeight: 'bold',
      },
      tinyLogo4:{
     
        width: 30,
        height: 28,
        marginTop:12,
        marginLeft:16
      },
      Text1:{
        fontSize :15    ,
        fontWeight: 'bold',
        color:"black",
        marginLeft:70,
        marginTop:-19,
      },

      Text2:{
        fontSize :10   ,
        fontWeight: 'bold',
        color:"black",
        marginLeft:70,
        marginTop:12,
        marginRight:-230
        
      },

      claim: {
        width: 360,
        height: 70,
        backgroundColor:"#FFFDD0",
        borderRadius: 10,
        marginTop:18,
        marginLeft:2,
        shadowColor: 'orange',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },

      Text3:{
        fontSize :18   ,
        fontWeight: 'bold',
        color:"black",
        marginLeft:10,
        marginTop:12,
        marginRight:-230
        
      },

      button9: {
        width: 30,
        height: 11,
        borderRadius: 10,
        marginTop:2,
        marginLeft:320,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
      },

      currentIndicator: {
        height: 2,
        width: 260,
        borderRadius: 10,
        backgroundColor: "orange",
        marginHorizontal: 5,
        marginLeft:30,
        marginTop:10,
      },
      tinyLogo3:{
        width: 19,
        height: 22,
        marginTop:-19,
        marginLeft:328,
      },

    
      
     
  
    })