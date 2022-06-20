import React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,FlatList,Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
import {queryallowner,updateownerbus} from './model/modalschema';


export default function Addbus(props) {
  const [names, setName] = useState('');
  const [phones, setphone] = useState('');
  const [number, setNumber] = useState(''); 
  const {modalopen,navigation,setModelopen, ...attributes} = props;
  const [searchText, setSearchText] = useState('');
  const [owner, setowner] = useState([]);
  const [ownername, setOwnername] = useState('');
  useEffect(() => {
    getdata()
     }, []);
      async function getdata(){
      let letdata = await queryallowner()
      setowner(letdata)
     }
  function Addowner(){
    const newbus = {
      id:ownername,
      bus:{
        id: Math.floor(Date.now() / 1000),
      name: names,
      phone: phones,
      number:number,
      }
      
    };
    updateownerbus(newbus)
    .then(docs=>{
      setModelopen(false)

    })
    .catch(err => alert(`Insert new todoList err: ${err}`));

  }
  const filtereddata = searchText ? owner.filter(x =>
    x.name.toLowerCase().includes(searchText.toLowerCase())
    ): ''
    
    const onVehicleSelected = (value) => {
      setOwnername(value);
      setSearchText('');
    };
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
  <View>
                  <View>
      <Text style={styles.text} >Owner</Text>
      <TextInput style={styles.input} value={ownername} onChangeText={value=>{setSearchText(value)
            setOwnername(value);
          }}>
            
          </TextInput>
                    </View>

      <FlatList
          style={{marginLeft: 15,
          marginRight: 15,marginTop:5,marginBottom:5,maxHeight:120}}
                  data={filtereddata}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => onVehicleSelected(item.name)}
                      style={{padding:10,borderColor:'#000',borderWidth:.3}}>
                  
                        <Text
                          >
                          {item.name}
                        </Text>
               
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
                    </View>

      <Text style={styles.text} > Bus Name</Text>
      <TextInput style={styles.input} onChangeText={value=>setName(value)}></TextInput>
      <Text style={styles.text}> Bus Number </Text>
      <TextInput style={styles.input} onChangeText={value=>setNumber(value)}></TextInput>
      <Text style={styles.text}> Phone</Text>
      <TextInput style={styles.input} onChangeText={value=>setphone(value)}></TextInput>
    
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
    height: 450,
    width: '80%',
    borderRadius: 16,
    padding:20,
    display: 'flex',
    justifyContent: 'space-around',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
})