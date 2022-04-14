// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef,useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Loader from './loader';

const RegisterScreen = ({navigation}) => {
 
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/check.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Collection Successful
        </Text>

      <View style={styles.shadow}>
    
            <View>
                <Text style={styles.text}>KL 12 AB 3434</Text>
                <Text >NMS</Text>
                <Text >972232323</Text>
                <Text >COLLECTED BY SHAJAHAN</Text>
                <Text >Collection of : 12/12/2022</Text>
                <Text >Collected on: 12/12/2022 12 pm</Text>
                </View>
            <View>
                
            </View>
            <Text style={styles.text}>$78</Text>
       

      </View>
      <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => { navigation.goBack() }}>
            <Text style={styles.buttonTextStyle}>Print</Text>
          </TouchableOpacity>
       
      </View>
    );
  }


export default RegisterScreen;

const styles = StyleSheet.create({
 
  

 
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  shadow:{
    width:'90%',height:120,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
    padding:20,
    flexDirection:'row',justifyContent:'space-between',margin:5
}, text: {
    color:'#000',
    fontSize:16,

  },
  buttonStyle: {
    backgroundColor: '#0080ff',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#0080ff',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 16,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});