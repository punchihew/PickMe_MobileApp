import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView style = {styles.container}>
       <View>

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

    })