import React from 'react'
import { Text, View,StyleSheet,Image,TextInput,TouchableOpacity, } from "react-native";

export default function index() {
  return (
    <View style = {styles.container}>
        <Text>Hi</Text>
    </View>
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