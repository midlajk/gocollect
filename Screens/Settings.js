import React,{useEffect,useState} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';import AsyncStorage from '@react-native-community/async-storage';
import HideWithKeyboard from 'react-native-hide-with-keyboard';


export default function Addbus({navigation}) {
  const [adminlogin, setAdminlogin] = useState('Loading..');
  const [userlogin, setuserlogin] = useState('Loading..');
  async function logout() {
    try {
        await AsyncStorage.removeItem('usertype');
        await AsyncStorage.removeItem('user');
        navigation.navigate('RegisterScreen')
    }
    catch(exception) {
    }
  }
  useEffect(() => {
   getdata()
  }, []);
  async function getdata(){
    await AsyncStorage.getItem('Admin').then(async (res) => {
      setAdminlogin(res)
    })
    await AsyncStorage.getItem('Collector').then(async (re) => {
      setuserlogin(re)
    })

  }
  async function update(){
    await AsyncStorage.setItem('Collector', userlogin);
    await AsyncStorage.setItem('Admin', adminlogin);
    alert('Successfully updated');

  }
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
<View style={{ flex: 1, justifyContent: 'center',marginTop:'10%',marginBottom:50}}>
      <Text style={styles.text}> Admin Password</Text>
      <TextInput style={styles.input}
       value={adminlogin}
       onChangeText={(va)=>setAdminlogin(va)}></TextInput>
      <Text style={styles.text}>User Password </Text>
      <TextInput style={styles.input}
      value={userlogin}
      onChangeText={(val)=>setuserlogin(val)}></TextInput>
     
      <TouchableOpacity style={styles.extra_button}
      onPress={update}>
        <Text style={{color:'#fff'}}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.extra_button}
      onPress={logout}>
        <Text style={{color:'#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
    <View style={{height:'50%'}}>

    <HideWithKeyboard> 

    <View  style={{height:'100%',backgroundColor:'#253b8a',borderTopLeftRadius:60,borderTopRightRadius:60,}} >
    
    <View style={{ flex: 1, justifyContent: 'space-around',flexDirection:'row',padding:20,flexWrap: 'wrap',paddingTop:40,marginTop:40}}>
    
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                      <Iconb
                                name={'bus'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Today's Collection</Text>
                          <Text style={styles.textb}>₹ 176637</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                      <Iconb
                                name={'cash-fast'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Owners Fee</Text>
                          <Text style={styles.textb}>₹ 176637</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                     <Iconb
                                name={'cash-refund'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Tyre Cost</Text>
                          <Text style={styles.textb}>₹ 176637</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                         <Iconb
                                name={'account-cash'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Tax Fee</Text>
                          <Text style={styles.textb}>₹ 176637</Text>

    </View>
   </View>
      

    </View>
    </HideWithKeyboard> 

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor:'#000',
    borderWidth:1,
    width:'80%',
    borderRadius:10,
    padding:10,
    margin:10,
    alignSelf:'center'
  },
  textb: {
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'

 },
  text: {
        left:'9%',
     },
     extra_button: {
    height:50,
    left:'10%',
      backgroundColor: '#0080ff',
      borderRadius: 10,
      marginTop:10,
      justifyContent: 'center',
      alignItems: 'center',
      width:'80%',
  },
 
})