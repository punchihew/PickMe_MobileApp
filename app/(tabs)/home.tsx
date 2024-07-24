
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView,} from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import {Ionicons} from "@expo/vector-icons";
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons';
import listingData from '@/data/descrpition.json';
import Listings from '@/components/Listings';




const Page = () => {

    const headerHeight = useHeaderHeight();
    const [category, setCategory] = useState('All');
    const [size,setSize] = useState('small');

    const onCatChanged = (category: string) => {    
        console.log("Categpry:",category);
        setCategory(category);
    }

    return (
        <>   

            <View style={styles.menuImage}>

                  <Image
                    style={styles.location2}
                    source={{
                        uri: 'https://img.icons8.com/?size=100&id=9q3GMpxNIMjC&format=png&color=000000',
                    }}
                    /> 

                    <Image
                        style={styles.location1}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/2645/2645890.png',
                        }}
                        /> 


                       
                    </View>

                    <TouchableOpacity 
                            onPress={()=> setSize('small')}
                            style={{borderRadius:6,width:70,height:30, marginTop:30,marginLeft:80,backgroundColor:size=='small'? '#d44d4d': '#f8841f'}}
                            >
                             <Text style={{color:'white',left:26,top:6}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                            onPress={()=> setSize('medium') }
                                style={{borderRadius:6,width:80,height:30,marginTop:-30,marginLeft:160,backgroundColor:size=='medium'? '#d44d4d': '#f8841f'}}
                            >
                            <Text style={{color:'white',left:5,top:6}}>Self Pickup</Text>
          </TouchableOpacity>

          <TouchableOpacity 
                            onPress={()=> setSize('large')}
                            style={{borderRadius:6,width:70,height:30,marginTop:-30,marginLeft:250,backgroundColor:size=='large'? '#d44d4d': '#f8841f'}}
                            >
                            <Text style={{color:'white',left:12,top:6}}>Dilivery</Text>
          </TouchableOpacity>

          
            <View style={[styles.container,{paddingTop:headerHeight}]}>
                
            
                    <Text style={styles.headingTxt}>Make Your own Food Stay At</Text>
                    <Text style={styles.headingTxt1}>Home!</Text>

                    <View style={styles.currentIndicator} />
                    <View style={styles.currentIndicator1} />
                    <View style={styles.currentIndicator2} />
                    
                    <View style={styles.searchSectionWrapper}>
                        <View style={styles.search}>
                            <Ionicons name='search' size={18} style={{marginRight:5}} color={'black'}/>
                            <TextInput placeholder='Search...'/>
                        </View>
                        <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                            <Ionicons name='options' size={28} color={'black'}/>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.new}>
                    <CategoryButtons onCagtegoryChanged={onCatChanged}/>
                    <Listings listings={listingData} category={category}/>

                     <Text style={styles.Text}> Today Offers </Text>
                     <Image
                        style={styles.lastPic}
                        source={{
                        uri: 'https://pbs.twimg.com/media/FGyMsvMUcAI1C7z.jpg',
                        }}
                        />
                     <Image
                        style={styles.lastPic}
                        source={{
                        uri: 'https://offers.lk/images/product/1712038200/17120382004332981738152892372948463171653883770570923n.jpg',
                        }}
                        />
                     <Image
                        style={styles.lastPic}
                        source={{
                        uri: 'https://images.deliveryhero.io/image/fd-pk/LH/eee3-listing.jpg',
                        }}
                        />
                     <Image
                        style={styles.lastPic}
                        source={{
                        uri: 'https://d12eu00glpdtk2.cloudfront.net/public/images/local/_910x600_clip_center-center_none/Deals-of-the-week-August-22-28-2021-Shutterstock.jpg',
                        }}
                        />

                    <Image
                        style={styles.lastPic}
                        source={{
                        uri: 'https://images.deliveryhero.io/image/fd-pk/LH/f235-listing.jpg',
                        }}
                        />

                     <Image
                        style={styles.lastPic}
                        source={{
                        uri: 'https://store.topaz.lk/wp-content/uploads/2021/12/CHICKEN-BIRIYANI.jpg',
                        }}
                        />
             
                    </ScrollView>
            </View>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        backgroundColor:'',
    },
    menuImage:{
        backgroundColor:'orange',
        width:373, 
        height:46, 
        top:10,
        borderRadius:10,
        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10,
        marginLeft:9,
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android
        
        // position:'absolute'

      },
    headingTxt:{
        fontSize:20,
        fontWeight:'800',
        color:'black',
        marginTop:30,
        marginLeft:-6
    },
    searchSectionWrapper:{
        flexDirection:'row',
        marginVertical:20,
        marginTop:30,
    },
    search: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        padding:16,
        borderRadius:10
    },
    filterBtn:{
        backgroundColor:'#b00b1e',
        padding:12,
        borderRadius:10,
        marginLeft:20
    },

    headingTxt1:{
        fontSize:24,
        fontWeight:'800',
        color:'orange',
        marginTop:0,
        marginLeft:-6,
    },
    location2:{
        width: 48,
        height: 46,
        marginTop: -2,
        marginRight:300,
       
    },
    location1:{
        width: 30,
        height: 30,
        marginLeft:336,
        marginTop: -36,
    },
    lastPic: {
        width: 340,
        height: 240,
        position:"relative",
        borderRadius:10,
        marginLeft:-1,
        marginTop:12
    },
    Text:{
        fontSize :22,
        textAlign : "left",
        fontWeight: 'bold',
        marginTop:18,
        marginLeft:2
        },

        new:{
          marginTop:-10,  
        },

        currentIndicator: {
            height: 2,
            width: 240,
            borderRadius: 10,
            backgroundColor:"orange",
            marginHorizontal: 5,
            marginTop:10
            },
        currentIndicator1: {
            height: 4,
            width: 4,
            borderRadius: 40,
            backgroundColor:"orange",
            marginHorizontal: 5,
            marginTop:-2,
            marginLeft:250,
            },
        currentIndicator2: {
            height: 4,
            width: 4,
            borderRadius: 40,
            backgroundColor:"orange",
            marginHorizontal: 5,
            marginTop:-4,
            marginLeft:260,
            },
})


