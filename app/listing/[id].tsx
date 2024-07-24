import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Stack,useLocalSearchParams, useNavigation } from 'expo-router'
import { ListingType }  from '@/type/listingType'
import listingData from '@/data/descrpition.json';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import {Link} from "expo-router";




const ListingDetails = () => {

  const {id} = useLocalSearchParams();
  const listing:ListingType = (listingData as any[]).find(
    (item) => item.id === id
  );

  const router = useRoute();
  const [size,setSize] = useState('small');
  const navigation = useNavigation();



  return (
   <>
   <View style={styles.container1}>
      {/* <Image source={require('')} style={styles.mainImg}/> */}
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{
            backgroundColor:"#eaeaea",
            borderRadius:10,
            padding:4,
            marginLeft:15,
            marginTop:2,
            height:41,    
          

          }}>
            <View style={{backgroundColor:"#db3232",padding:6,borderRadius:10, }}>
              <Feather name='arrow-left' size={20} color={'white'}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{
            backgroundColor:"#eaeaea",
            borderRadius:10,
            padding:4,
            marginRight:15,
            height:40, 
            marginTop:2,    
            position:'relative'

          }}>
            <View style={{backgroundColor:'#db3232',padding:6,borderRadius:10,}}>
              <Ionicons name='heart-outline' size={20} color={'white'}/>
            </View>
          </TouchableOpacity>
      </View>
   </View>
   
    <View style={styles.container}>
      <Image source={{uri:listing.image}} style={styles.image}/>
      <View style={styles.starIcon}>
          <FontAwesome5 name="star" size={18} color={'white'} style={styles.voit}/>
          <Text style={styles.woat}>{listing.rating}</Text>
      </View>
      <View style={styles.ContentWrapper}>
        <Text style={styles.listingName}>{listing.name}</Text>
        <Text style={styles.listngPriceTxt}>Rs.{listing.price}</Text>
      </View>

    
        <Image
        style={styles.tinyLogo1}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=14oX0z9ydOeX&format=png&color=000000',
        }}
        />
          <Text style = {styles.Text1}>Delivery</Text>

          <Image
        style={styles.tinyLogo2}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=9807&format=png&color=000000',
        }}
        />

        <Text style = {styles.Text2}>Self Pickup</Text>


        <Image
        style={styles.tinyLogo3}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=10034&format=png&color=000000',
        }}
        /> 
         <Text style = {styles.Text3}>Est:31 +mins</Text>

         <Image
        style={styles.tinyLogo11}
        source={{
          uri: 'https://img.icons8.com/?size=100&id=53376&format=png&color=000000',
        }}
        />
         <Text style = {styles.Text7}>96%(500+)</Text>

      <View style={{left:27}}>
        <Text style={styles.Text}>Size</Text>

        <View >
          <TouchableOpacity 
          onPress={()=> setSize('small')}
            style={{borderRadius:10,width:70,height:30,marginLeft:10,marginTop:10, backgroundColor:size=='small'? '#d44d4d': '#f8841f'}}
          >
            <Text style={{color:'white',left:20,top:4}}>small</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={()=> setSize('medium') }
                style={{borderRadius:10,width:80,height:30,marginLeft:100,marginTop:-28,backgroundColor:size=='medium'? '#d44d4d': '#f8841f'}}
              >
              <Text style={{color:'white',left:14,top:4}}>medium</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={()=> setSize('large')}
              style={{borderRadius:10,width:70,height:30,left:200,marginTop:-28,backgroundColor:size=='large'? '#d44d4d': '#f8841f'}}
            >
            <Text style={{color:'white',left:20,top:4}}>large</Text>
          </TouchableOpacity>
        </View>
        <View style={{top:10}}>
          <Text style={styles.aboutTxt}>About</Text>
          <Text style={styles.aboutDes}>{listing.description}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',top:35}}>
          <TouchableOpacity style={styles.btnBuy}>
            <Link href="/cart" style={{textAlign:'center',top:12,color:'white',fontWeight: 'bold'}}> 
              <Text style ={styles.Text4} >ADD TO CARD</Text>
            </Link>
          </TouchableOpacity>

          <View style={styles.itemQty}>
            <View>
              <TouchableOpacity style={styles.btn}>
              <Text style={styles.addTxt}>ADD</Text>
              </TouchableOpacity>
              <Text style={styles.itemQtyTxt}>2</Text>
              <TouchableOpacity style={styles.btn1}>
              <Text style={styles.addTxt1}>REMOVE</Text>
              </TouchableOpacity>
          </View>
        </View>
        
        </View>

        </View>
    </View>
    <View></View>
   </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#edeff8',
    flex:1,
  },
  container1:{
    backgroundColor:'#edeff8',
  },
  mainImg:{
    width:360, 
    height:270, 
    right:0,
    top:1,
    
  },
  image:{
    height:250,
    width:320,
    marginTop:6,
    borderRadius:20,
    marginLeft:36
  },
  starIcon:{
    flexDirection: 'row',
    backgroundColor:'#003261',  
    left:20,
    width:80,
    height:30,
    borderRadius:10,
    marginTop:10
  },
  voit:{
    left:10,
    width:20,
    height:20,
    top:4
  },
  woat:{
    left:20,
    fontWeight: 'bold',
    color:'white',
    fontSize: 18,
    top:2
  },
  ContentWrapper:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  listingName:{
    fontSize:22,  
    fontWeight:'700',
    color:'#232b3a',
    letterSpacing:0.5,
    left:10
  },
  listngPriceTxt:{
    fontSize:18,  
    fontWeight:'700',
    color:'#5a2e01',
    letterSpacing:0.5,
    top:2,
    right:10
  },
  aboutTxt:{
    fontSize:18,
    fontWeight:'700',
  },
  aboutDes:{
    color:'grey',
    top:3,
    left:15,
    width:300
  },
  btnBuy:{
    backgroundColor:'#00941A',
    width:180,
    height:44,
    borderRadius:10,
    textAlign:'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android
  },
  itemQty:{
    right:45,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  itemQtyTxt:{
    fontSize:18,
    right:10,
    fontWeight:'bold',
    marginTop:-20,
  },
  Text:{
    fontWeight:'bold',
    fontSize:20,
    marginTop:36,
  },
  tinyLogo1:{
    width: 20,
    height: 24,
    marginTop:8,
    marginLeft:40,

  },

   Text1:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:70,
    marginTop:-18,
  },
  tinyLogo2:{
    width: 20,
    height: 24,
    marginTop:-19,
    marginLeft:150
  },
  Text2:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:170,
    marginTop:-16,
  },
  tinyLogo3:{
    width: 20,
    height: 22,
    marginTop:18,
    marginLeft:50
  },
  Text3:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:73,
    marginTop:-16,
  },
  tinyLogo11:{
    width: 19,
    height: 22,
    marginTop:-18,
    marginLeft:150
  },
  Text7:{
    fontSize :10,
    fontWeight: 'bold',
    color:"black",
    marginLeft:175,
    marginTop:-15,
  },

  Text4:{
    fontWeight:'bold'
  },

  btn:{
    width:40 ,
    height:16,
    backgroundColor:'red',
    borderRadius:3,
    marginLeft:-60,
    marginTop:20,

  },
  
  addTxt:{
    marginLeft:5,
    marginTop:1.5,
    fontWeight:'bold',
    color:"white",
    fontSize:12,
    },

  btn1:{
    width:58 ,
    height:16,
    backgroundColor:'red',
    borderRadius:3,
    marginTop:-18,
    marginLeft:10,
  },
  addTxt1:{
    marginLeft:4,
    fontWeight:'bold',
    color:"white",
    fontSize:12,
    },


})



// style={tw`flex-row items-center space-x-4 border-gray-500 border rounde-5 p-2 px-6 rounded-2`}
// style={tw`flex-row justfy-between mt-2`}