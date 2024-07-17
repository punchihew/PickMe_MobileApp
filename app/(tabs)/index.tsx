import React from 'react';
import { Link } from 'expo-router';
import { View} from 'react-native';



export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <Link href="/index" style={{ flex: 1 }}>
                
            </Link>
        </View>
    );
}