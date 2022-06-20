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
            AsyncStorage.getItem('user').then((value) =>
             {
                 if(value){
                AsyncStorage.getItem('usertype').then((va) =>   navigation.replace(
              va === 'admin' ? 'admin' : 'home'
            ,{bus:'',name:'',owner:''}),
            )

            }else{
                navigation.replace('RegisterScreen')
            }
     
    }
            
          );
        }, 2000);
    }, []);

  

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../assets/ownerslogo.jpeg')}
            />
            <Text
                style={[
               
                    styles.text
                ]}
            >
                AKBOA KONDOTTY
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