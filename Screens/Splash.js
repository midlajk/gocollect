import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function Splash({ navigation }) {

    useEffect(() => {
        
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
            navigation.replace(
              value === null ? 'RegisterScreen' : 'Home Tabs'
            ),
          );
        }, 2000);
    }, []);

  

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../assets/collect.png')}
            />
            <Text
                style={[
               
                    styles.text
                ]}
            >
                Go Collect
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#000',
    },
})