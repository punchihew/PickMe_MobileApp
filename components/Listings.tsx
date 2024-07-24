import { View, Text, FlatList, ListRenderItem, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ListingType} from '@/type/listingType'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props ={
    listings:any[]
    category: string;
}

// const Listings = ({listings}: Props) => {
export default function Listings({listings,category}:Props) {

    const[loading,setLoding] =useState(false);
    useEffect(() => {
        console.log('updated');
        setLoding(true);

        setTimeout(() => {
            setLoding(false)
        },200);
    }, [category]);

    const renderItems:ListRenderItem<ListingType> = ({item}) => {
        return(
            <Link href={`/listing/${item.id}`} asChild>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Image source={{uri:item.image}} style={styles.imge}/>
                        <View style={styles.heart}>
                            <Ionicons name='heart-outline' size={20} color={'white'}/>
                        </View>
                        <Text style={styles.itemTxt}>{item.name}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <FontAwesome5 name='star' size={18} color={'red'}/>
                                <Text style={styles.itemRatingTxt}>{item.rating}</Text>
                            </View>
                            <Text style={styles.itemPriceTxt}>Rs.{item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        );
    }

  return (
    <View>
      <FlatList 
        data={loading ? [] : listings} 
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

// export default Listings;

const styles = StyleSheet.create ({
    item:{
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        marginRight:20,
        width:220,
    },
    imge:{
        width:200,
        height:200,
        borderRadius:10,
        marginBottom:30,
    },
    heart:{
        position:'absolute',
        top:185,
        right:30,
        backgroundColor:'red',
        padding:10,
        borderRadius:30,
        borderWidth:2,
        borderColor:'white'
    },
    itemTxt:{
        fontSize:16,
        fontWeight:'600',
        color:'black',
        marginBottom:10,
    },
    itemRatingTxt:{
        fontSize:12,
        margin:5,
    },
    itemPriceTxt:{
        fontSize:12,
        fontWeight:'600',
        color:'red',
        margin:5
    }
})