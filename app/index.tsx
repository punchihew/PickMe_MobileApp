import { View, Text,StyleSheet,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container1}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
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
  
    })