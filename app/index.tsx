import { View, Text,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container1}>
        <Image
            style={styles.tinyLogo1}
            source={require('../assets/setting/setting.png')}
            />

            <Text style = {styles.Text}>Navishka Punchihewa</Text>
             <View style={styles.view}>
                <Text>GOLD MEMBER</Text>
             </View>

             <TouchableOpacity style={styles.button1} onPress={() => alert('Button pressed!')} > 
                 
                  <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=6Kirlpj9Yq0L&format=png&color=000000',
                    }}
                    />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} onPress={() => alert('Button pressed!')} > 
                  
                  <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=hZ4wRp2S2o89&format=png&color=000000',
                    }}
                    />

              </TouchableOpacity>
              <TouchableOpacity style={styles.button3} onPress={() => alert('Button pressed!')} > 
                  <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=11267&format=png&color=000000',
                    }}
                    />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4} onPress={() => alert('Button pressed!')} > 
                 <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=31771&format=png&color=000000',
                    }}
                    />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button8} onPress={() => alert('Button pressed!')} > 
                    
              <Image
                    style={styles.tinyLogo4}
                    source={{
                    uri: 'https://img.icons8.com/?size=100&id=7994&format=png&color=000000',
                    }}
                    />
              </TouchableOpacity>
              

       <View style={styles.footer}>

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
            
      </View>
                    
            
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
        marginTop:120,
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
        marginTop:120
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
     
        width: 32,
        height: 29,
        marginTop:12,
        marginLeft:16
      },
    
      
     
  
    })