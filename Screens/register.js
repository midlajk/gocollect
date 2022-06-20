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
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './loader';

const RegisterScreen = ({navigation}) => {

  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);



  const passwordInputRef = createRef();

  const handleSubmitButton = async () => {

    setErrortext('');
   

    if (!userPassword) {
      alert('Please fill Password');
      return;
    }else{
      await AsyncStorage.getItem('Admin').then(async (res) => {
        if(res){
        if(res==userPassword){
          await AsyncStorage.setItem('user', userPassword);
          await AsyncStorage.setItem('usertype', 'admin');

          navigation.navigate('admin')
        }else{
          await AsyncStorage.getItem('Collector').then(async (re) => {
            if(re){
               if(re==userPassword){
                await AsyncStorage.setItem('user', userPassword);
                await AsyncStorage.setItem('usertype', 'user');
                navigation.navigate('home',{bus:'',name:'',owner:''})



            }else{

              alert('Wrong password');

            }
            }else{

              alert('Wrong password/No collector registered');
            }
           
          })
        }
        
        }else{
          await AsyncStorage.setItem('Admin', userPassword);
          await AsyncStorage.setItem('user', userPassword);
          await AsyncStorage.setItem('usertype', 'admin');

          navigation.navigate('admin')

        }  
        })

}

    }
  

   
  

  
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Loader loading={loading} />
      <ScrollView

        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop:'40%'
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/ownerslogo.jpeg')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
          <Text>App Registration/Login</Text>
        </View>
        <KeyboardAvoidingView enabled>
    
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
             
              blurOnSubmit={false}
            />
          </View>
         {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </ScrollView>
    </View>
  )
}
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#253b8a',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#253b8a',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    height:50,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});