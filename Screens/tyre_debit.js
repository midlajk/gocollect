import React,{useEffect,useState,useRef} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image,FlatList,Animated,Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
import {queryallbus} from './model/modalschema';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const HEADER_HEIGHT = 200;

export default function App({navigation}) {
  const offset = useRef(new Animated.Value(0)).current;
  const [bus, setBus] = useState([]);
  const [modelopen, setModelopen] = useState(false);
  useEffect(() => {
         getdata()
          }, []);
          async function getdata(){
           let letdata = await queryallbus()
           setBus(letdata)
          }
  return (
    <SafeAreaProvider>
       <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#253B8A'}}>  

<View>
<TouchableOpacity
style={{
padding:20,
flex:1
}}
onPress={() => { navigation.goBack() }}> 
<Icon
               name={'arrow-back'}
               size={30}
               color={'#fff'}
          
           />


</TouchableOpacity>
</View>
<View style={{ padding:25,}}>
<Text style={[styles.textb,{fontWeight:'bold'}]}>
Tyre Cost Provided
</Text>
</View>


<View>
<TouchableOpacity
style={{
padding:20,
 flex:1
}}> 



         <Iconb
 
 name={'filter-outline'}
 size={30}
 color={'#fff'}

/>

</TouchableOpacity>
</View>
</View>

      <SafeAreaView style={{ flex: 1 ,backgroundColor:'#253B8A'}} forceInset={{ top: 'always' }}>
      <AddDebit modalopen={modelopen} navigation={navigation} setModelopen={setModelopen} />
    
        <AnimatedHeader animatedValue={offset} navigation={navigation} setModelopen={setModelopen} />
        <ScrollView
          style={{ flex: 1, backgroundColor: 'white', }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          {bus.map((item,index) => (
            <View style={[styles.shadow,styles.button]} key={index}>
              
            <View style={{width:150}}>
                <Text style={[styles.text,{color:'#007FC4'}]}>{item.name}</Text>
                <Text >{item.number}</Text>
                <Text >{item.phone}</Text>
            
                </View>
            <View>
                
            </View>
                  <Text style={[styles.text,{color:'#2d387a',fontWeight:'bold'}]}>₹78</Text>
                
            
             </View>
          ))}
        </ScrollView>
       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
   
    text: {
         color:'#fff',
         fontSize:18,

       },
       textb: {
        color:'#fff',
        fontSize:16,

      },
       button: {
         width:'100%',height:120,backgroundColor:'#F9F8FF',justifyContent:'center',alignItems:'center',
         padding:20,
         flexDirection:'row',justifyContent:'space-between',
         borderRadius:16,

         shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:3,
        },
        shadow:{
            
            alignItems:'center',margin:5
        },
        input: {
            borderColor:'#000',
            borderWidth:1,
            width:'90%',
            alignSelf:'center',
            borderRadius:10
          },
          textc: {
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

  const AnimatedHeader = ({ animatedValue,navigation,setModelopen }) => {
    const insets = useSafeAreaInsets();

    const headerHeight = animatedValue.interpolate({
      inputRange: [0, HEADER_HEIGHT + insets.top],
      outputRange: [HEADER_HEIGHT + insets.top, insets.top + 0],
      extrapolate: 'clamp'
    });
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
          backgroundColor: '#253B8A',
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20

        }}
      >
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={[styles.textb,{marginTop:10}]}>
From 12/12/2022 To 12/01/2023     
</Text>
        
          <Text style={[styles.text,{fontWeight:'bold',fontSize:20,color:'#BE1437'}]}>
Total amount collected
          </Text>
         <Text style={[styles.text,{fontWeight:'bold',fontSize:25,marginTop:5,color:'#BE1437'}]}>
          ₹ 7866766
          </Text> 
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:70,backgroundColor:'#3A8885',width:70,borderRadius:50,}}
     onPress={()=>setModelopen(true)}> 
    
     <Iconb
                                name={'plus'}
                                size={40}
                                color={'#fff'}
                           
                            />
     </TouchableOpacity>
          </View>
         
      
        </Animated.View>
    );
  };
  function AddDebit(props) {
    const [names, setName] = useState('');
    const [phones, setphone] = useState('');
    const [number, setNumber] = useState(''); 
    const {modalopen,navigation,setModelopen, ...attributes} = props;
  
    function Addowner(){
  
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
   

        <Text style={styles.textc}> Bus Number </Text>
        <TextInput style={styles.input} onChangeText={value=>setNumber(value)}></TextInput>
        <Text style={styles.textc}> Amount provided</Text>
        <TextInput style={styles.input} onChangeText={value=>setphone(value)}></TextInput>
      
        <TouchableOpacity style={styles.extra_button} onPress={()=>{Addowner()}}>
          <Text style={{color:'#fff'}}>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
      </Modal>
    );
  }
  
 