import React,{useState} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
import {inserOwner} from './model/modalschema';


export default function Addbus(props) {
  const [names, setName] = useState('');
  const [phones, setPhone] = useState('');
  const [places, setPlace] = useState(''); 
  const {modalopen,navigation,setModelopen, ...attributes} = props;

  function Addowner(){
    const newowner = {
      id: Math.floor(Date.now() / 1000),
      name: names,
      phone: phones,
      place:places,
     
    };
    inserOwner(newowner)
    .then(docs=>{
      setModelopen(false)

    })
    .catch(err => alert(`Insert new todoList err: ${err}`));

  }
  return (
    <Modal  transparent={true}
    animationType={'none'}
    visible={modalopen}
    onRequestClose={() => {
      setModelopen(false)
  }}>
      <View style={{ flex: 1, justifyContent: 'center',backgroundColor: '#00000040',
      alignItems:'center'}}>
  <View style={styles.activityIndicatorWrapper}> 
  <TouchableOpacity
  onPress={()=>setModelopen(false)}>
     <Iconb
                                name={'close'}
                                size={25}
                                color={'#000'}
                           style={{alignSelf:'flex-end'}}
                            />
  </TouchableOpacity>
 
  <Text style={styles.text} > Owner/Company Name</Text>

  <TextInput style={styles.input} onChangeText={(name)=>setName(name)}></TextInput>

<Text style={styles.text} > Phone</Text>
<TextInput style={styles.input} onChangeText={(phone)=>setPhone(phone)}></TextInput>
<Text style={styles.text}> Place</Text>
<TextInput style={styles.input} onChangeText={(place)=>setPlace(place)}></TextInput>
      <TouchableOpacity style={styles.extra_button} onPress={()=>{Addowner()}}>
        <Text style={{color:'#fff'}}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor:'#000',
    borderWidth:1,
    width:'90%',
    alignSelf:'center',
    borderRadius:10
  },
  text: {
        left:'4%',
     },
     extra_button: {
    height:50,
    left:'5%',
      backgroundColor: '#253B8A',
      borderRadius: 10,
      marginTop:10,
      justifyContent: 'center',
      alignItems: 'center',
      width:'90%',
  },

  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 400,
    width: '80%',
    borderRadius: 16,
    padding:20,
    display: 'flex',
    justifyContent: 'space-around',
  },
 
})