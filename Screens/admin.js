

import  React,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
 import AsyncStorage from '@react-native-community/async-storage';
 import Realm from 'realm';
 import {todaysum} from './model/modalschema';

export default function ReportScreen({navigation,route}) {
  const [total, setTotal] = useState(0);
  const [standfee, setstandfee] = useState(0);
  const [tyrefee, settyrefee] = useState(0);
  const [taxcollection, settaxcollection] = useState(0);

  useEffect(() => {

    getdata()

  }, [route]);

  async function getdata(){
    let letdata = await todaysum()
    setTotal(letdata.total)
    settyrefee(letdata.Tyrecost)
    setstandfee(letdata.ownersfee)
    settaxcollection(letdata.Taxcollection)

   }
 
  return (
    <View style={{height:'100%'}}>   
    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>  
  
    
  <View>
  <TouchableOpacity
 style={{
     padding:15,
     flex:1
 }}
 onPress={() => { navigation.navigate('Manage Settings') }}
 > 
  
 
 <Image
 source={require('../assets/settings.png')} 
 resizeMode='contain'
 style={{
     width:25,
     height:25,
   
 }}
 /> 

  </TouchableOpacity>
  </View>

</View>


    <View style={{ flex: 1, justifyContent: 'space-around',flexDirection:'row',padding:20,flexWrap: 'wrap',paddingTop:40}}>
    
      <TouchableOpacity style={{width:'40%',height:100,backgroundColor:'#fff',borderRadius:16,marginBottom:10,justifyContent:'center',alignItems:'center',elevation:3}}
         onPress={() => { navigation.navigate('Owner Collection') }}>
                        <Icon
                                name={'person'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Manage Owner</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
          onPress={() => { navigation.navigate('Entity coll') }}>
      <Iconb
                                name={'bus'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Manage Bus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
     onPress={() => { navigation.navigate('Stand fee') }} >
      <Iconb
                                name={'cash-fast'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center'}}>Manage Stand fee</Text>
      </TouchableOpacity>
 
     
     
      <TouchableOpacity style={styles.button}
        onPress={() => { navigation.navigate('Tyre collection') }} >
      <Iconb
                                name={'cash-refund'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center',padding:5}}>Manage Tyre Cost Collection </Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.button}
   onPress={() => { navigation.navigate('Tax Collection') }}
    >
      <Iconb
                                name={'account-cash'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Manage Tax Collection</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
     onPress={()=> {navigation.navigate('Temporory fee')}} >
      <Iconb
                                name={'timelapse'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center',padding:5}}>Temporary Fee Collection</Text>
                            </TouchableOpacity> 
      
     
    
    </View>
    <View  style={{height:'45%',backgroundColor:'#253b8a',borderTopLeftRadius:60,borderTopRightRadius:60}} >
   
    <View style={{ flex: 1, justifyContent: 'space-around',flexDirection:'row',padding:20,flexWrap: 'wrap',paddingTop:40,marginTop:40}}>
    
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                      <Iconb
                                name={'bus'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Today's Collection</Text>
                          <Text style={styles.textb}>₹ {total}</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                      <Iconb
                                name={'bus'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Owners Fee</Text>
                          <Text style={styles.textb}>₹ {standfee}</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                     <Iconb
                                name={'account-cash'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Tyre Expense</Text>
                          <Text style={styles.textb}>₹ {tyrefee}</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                         <Iconb
                                name={'account-cash'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Tax Collection</Text>
                          <Text style={styles.textb}>₹ {taxcollection}</Text>

    </View>
   </View>
      


    </View>
   
    </View>
  );
}
const styles = StyleSheet.create({
 
  button: {
    width:'40%',height:100,backgroundColor:'#fff',borderRadius:16,marginBottom:10,justifyContent:'center',alignItems:'center',elevation:3

  },
  textb: {
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'

 },

})