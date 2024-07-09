import { View, Text ,StyleSheet,SafeAreaView,Image} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView style={styles.container}> 
       <View>
       <Image
        style={styles.image}
        source={require('../assets/home/image5.jpg')}
      />
      <Text> Sri Lankan Rice And Curry</Text>
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
  image: {
    width: 340,
    height: 220,
    position:"relative",
    borderRadius:10,
    marginLeft:-10,
    marginTop:10
  },

});