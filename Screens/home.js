import  React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image,KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {insertcollection,findbus,insertbuscollection,todaysum} from './model/modalschema';

const data = [
  { label: 'Owners fee', value: '1' },
  { label: 'Tyre Collection', value: '2' },
  { label: 'Tax Collection', value: '3' },

];


export default function AppCategoryScreen({route,navigation}) {
  const [value, setValue] = useState('Owners fee');
  const [isFocus, setIsFocus] = useState(false);
  const [bus, setBus] = useState('');
  const [owner, setOwner] = useState(null);
  const [name, setName] = useState(null);
  const [amount, setAmount] = useState(10);
  const [total, setTotal] = useState(0);
  const [standfee, setstandfee] = useState(0);
  const [tyrefee, settyrefee] = useState(0);
  const [taxcollection, settaxcollection] = useState(0);
  const [subimit, setSubmit] = useState(0);

  useEffect(() => {
    setBus(route.params.bus)
    setOwner(route.params.owner)
    setName(route.params.name)

  }, [route]);

  useEffect(() => {
    getdata()
    setSubmit(0)

  }, [subimit]);
  async function getdata(){
    let letdata = await todaysum()
    setTotal(letdata.total)
    settyrefee(letdata.Tyrecost)
    setstandfee(letdata.ownersfee)
    settaxcollection(letdata.Taxcollection)

   }
  async function logout() {
    try {
        await AsyncStorage.removeItem('usertype');
        await AsyncStorage.removeItem('user');
        navigation.navigate('RegisterScreen')
    }
    catch(exception) {
    }
}

var date = new Date()
date.setHours(date.getHours() + 5);
date.setMinutes(date.getMinutes() + 30);
  function submit(){
    if (!bus) {
      alert('Please give a bus number');
      return;
    }
    if (!amount) {
      alert('Please fill amount');
      return;
    }
 
    findbus(bus).then((docs)=>{
      if(typeof docs === 'undefined'){   
        if (value!='Owners fee') {
          alert('You can only add Owners fee for non registered bus');
          return;
        }
     
          const newcollection = {
          id: Math.floor(Date.now() / 1000),
          c_name: value,
          c_date: date,
          c_vehicle:'TEMP '+bus,
          c_type:'payment',
          c_amount:amount,
        };
          insertocollection(newcollection)      
        }else{
          const col = {
            cd:bus,
            collection:{
            id: Math.floor(Date.now() / 1000),
            c_name: value,
            c_date: date ,
            c_vehicle:bus,
            c_type:'payment',
            c_amount:amount,
            }
            
          };
          insertobuscollection(col)
      }
    })
     .catch(err => alert(` err: ${err}`));
     function insertocollection(params) {
      insertcollection(params)
      .then(docs=>{
      alert('Successfully Added');
      setBus('')
      setSubmit(1)

    })
    .catch(err => alert(`err: ${err}`));
  
     }
 
     function insertobuscollection(params) {
      insertbuscollection(params)
     .then(docs=>{
     alert('Successfully Added data');
     setBus('')
     setSubmit(1)

   })
   .catch(err => alert(`err: ${err}`));
 
    }
  }
  return (
  <View style={{height:'100%',backgroundColor:'#fff'}}>
    <View style={{flex:1,backgroundColor:'#fff'}}>
     
    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>  
  
    
                 <View>
                 <TouchableOpacity
                style={{
                    padding:15,
                    flex:1
                }}
                onPress={logout}> 
                 
                
                <Image
                source={require('../assets/logout.png')} 
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                  
                }}
                /> 

                 </TouchableOpacity>
                 </View>

      </View>
    <View style={{ justifyContent: 'center',marginTop:30}}>
    
      <Text style={styles.text} > Bus Number </Text>
      {/* onFocus={()=>navigation.navigate('Entity Selection')} */}
      <View style={{flexDirection:'row',width:'85%',alignSelf:'center'}}>
         <TextInput value={bus} style={[styles.input,{height:50,padding:10,width:'80%'}]} onChangeText={(value)=>setBus(value)}>
     
      </TextInput>
      <TouchableOpacity style={{width:50,height:50,backgroundColor:'#3A8885',marginTop:10,borderRadius:12,justifyContent:'center',alignItems:'center'}} onPress={()=>{navigation.navigate('Entity Selection')}}>

      <Icon
 
 name={'search'}
 size={20}
 color={'#fff'}

/>

      </TouchableOpacity>
      </View>

      <Text style={styles.text}> Collection Type</Text>

    
      <Dropdown
          style={[styles.input, isFocus && { borderColor: 'blue' }]}
              data={data}
          
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? value : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.label);
            item.value==1?setAmount(10):item.value==2?setAmount(100):setAmount(200)
            setIsFocus(false);
          }}
       
        />
      <Text style={styles.text}> Collection Amount</Text>
      <TextInput keyboardType='number-pad' value={amount.toString()} style={styles.input} onChangeText={(text)=>setAmount(text)}>

      </TextInput>
      <TouchableOpacity  style={styles.extra_button}
      onPress={submit}>
        <Text style={{color:'#fff'}}>Submit & Print</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={{height:'45%'}} >

   
    <HideWithKeyboard>
    <View  style={{height:'100%',backgroundColor:'#253b8a',borderTopLeftRadius:60,borderTopRightRadius:60}} >
    
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
                                name={'cash-fast'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Owners Fee</Text>
                          <Text style={styles.textb}>₹ {standfee}</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                     <Iconb
                                name={'cash-refund'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Tyre Cost</Text>
                          <Text style={styles.textb}>₹ {tyrefee}</Text>

    </View>
    <View style={{width:'50%',height:100,marginBottom:20,justifyContent:'center',alignItems:'center'}}
      >
                         <Iconb
                                name={'account-cash'}
                                size={40}
                                color={'#fff'}
                           
                            />
                          <Text style={styles.textb}>Tax Fee</Text>
                          <Text style={styles.textb}>₹ {taxcollection}</Text>

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
    backgroundColor:'#fff',
    width:'80%',
    margin:10,
    alignSelf:'center',
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
  },textb: {
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
      backgroundColor: '#3A8885',
      borderRadius: 10,
      marginTop:10,
      justifyContent: 'center',
      alignItems: 'center',
      width:'80%',
  },
 
})