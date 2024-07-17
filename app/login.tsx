import { Text, View,StyleSheet,Image,TextInput,TouchableOpacity, } from "react-native";
import { Link } from 'expo-router';


export default function login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome Pick Me Foods </Text>

      <Image
        style={styles.tinyLogo}
        source={require('../assets/images.jpg')}
      />

    
      
     <TextInput
        style={styles.input}
        placeholder ="ENTER YOUR EMAIl"
        keyboardType="default"
      />
     <TextInput
        style={styles.input1}
        placeholder ="ENTER YOUR PASSWORD"
        keyboardType="default"
      />

     <Text style={styles.text1}>FORGOT PASSWORD</Text>

     <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
        <Text style={styles.button}> SIGN UP </Text>
        
        <Link href="/home" style={{ flex: 1 }}>
              
            </Link>
      </TouchableOpacity>

     <Image
        style={styles.tinyLogo1}
        source={require('../assets/imagePickMe.jpeg')}
      />

   </View>
    

     
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize :30,
    textAlign : "left",
    fontWeight: 'bold',
    marginTop:70

    
  },

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

  input:{

    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius:10,
    marginTop:20,

  },

  input1:{

    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius:10,
    

  },
  text1: {
    fontSize :10,
    fontWeight: 'bold',
    marginRight:140,
   

    
  },
  tinyLogo1:{
    width: 200,
    height: 200,
  position:"relative",
  marginTop: 2
  },

  text2: {
    fontSize :8,
    fontWeight: 'bold',
    marginRight:50,
    marginLeft:40

    
  },

  button:{
    marginLeft:80,
    fontWeight: 'bold',
    color: 'white',
    borderRadius:10
  
  }
  
  
});
