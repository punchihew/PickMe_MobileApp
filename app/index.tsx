import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView>
      <View style = {styles.container}></View>
      <View style = {styles.container1}></View>
      <View style = {styles.foolter}></View>
    </SafeAreaView>
  )
}   

const styles = StyleSheet.create({

  container: {
      width: 390,
      height: 50,
      backgroundColor: 'white', 
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // for Android
      marginTop:10,
    },
    container1: {
      width: 390,
      height: 420,
      backgroundColor: 'white', 
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // for Android
      marginTop:10,
    },
    foolter: {
      width: 390,
      height: 240,
      backgroundColor: 'white', 
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // for Android
      marginTop:10,
    },
  })