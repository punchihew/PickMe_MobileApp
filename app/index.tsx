import { View, Text ,StyleSheet,SafeAreaView,Image} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView style={styles.container}> 
       <View>
       <Image
        style={styles.image1}
        source={require('../assets/home/image9.jpg')}
        
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

});