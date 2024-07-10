import { View, Text,StyleSheet,SafeAreaView,ScrollView,Image} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container1}>
      <ScrollView style={styles.scrollView}>
        
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
      </ScrollView>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D3D3D3', 
        position: 'relative'
      },

      container1: {
        width:380,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FAFAFA', 
        position: 'relative',
        borderRadius:10,
        marginTop:10
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
     
  
    })