import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { View,StyleSheet} from 'react-native'

export default function RootLayout() {
    return (

             <Tabs screenOptions={{   
                tabBarActiveTintColor: "#0C6CAB",
                tabBarStyle: {
                height: 60,
                width:380,
                marginLeft:6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#F4BE00",
                borderTopColor: "yellow",
                backgroundColor: "#F4BE00",
                shadowColor: 'red',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5, // for Android
                },
                tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",
                marginBottom: -28,
                
                },
                }}>
              <Tabs.Screen name="profile"  options={{headerShown:false,tabBarIcon : ({}) => <FontAwesome size={28} name='user'  color={"#2A324E"}/>,}} />
              <Tabs.Screen name="home2"    options={{headerShown:false,tabBarIcon : ({}) => <FontAwesome size={28} name='heart' color={"#2A324E"} />,}}/>
              <Tabs.Screen name="home"     options={{headerShown:false,tabBarIcon : ({}) => <FontAwesome size={48} name='home' color={"#2A324E"}
              />,}}/>

              <Tabs.Screen name="card"     options={{headerShown:false,tabBarIcon : ({}) => <FontAwesome size={28} name='shopping-cart' color={"#2A324E"} />,}}/>
              <Tabs.Screen name="index"    options={{headerShown:false,tabBarIcon : ({}) => <FontAwesome size={28} name='list' color={"#2A324E"} />,}}/>
           
             </Tabs>
      
       

       
    );
};


const styles = StyleSheet.create({

  one:{

  },

})