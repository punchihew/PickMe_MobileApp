import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container1}>
        

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
  
    })