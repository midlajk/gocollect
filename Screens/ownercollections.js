import React,{useEffect,useState,useRef} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image,FlatList,Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
import {queryallowner,deleteowner,ownercollectionquery} from './model/modalschema';
import Addowner from './addowner';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const HEADER_HEIGHT = 200;

export default function App({navigation}) {
  const offset = useRef(new Animated.Value(0)).current;
  const [owner, setOwner] = useState([]);
  const [modelopen, setModelopen] = useState(false);
  const [tempSum, setTempSum] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
         getdata()
          }, []);
          async function getdata(){
            let data = await ownercollectionquery()
            setSum(data.sum)
            setOwner(data.data)
            setTempSum(data.tempvehiclesum)
          }
          function deleting(data){
            deleteowner(data)
            .then(docs=>{
              setModelopen(false)
        
            })
            .catch(err => alert(`Some error occured`));
        
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
Owners and Collection
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
      <Addowner modalopen={modelopen} navigation={navigation} setModelopen={setModelopen} />
    
        <AnimatedHeader animatedValue={offset} navigation={navigation} setModelopen={setModelopen} sum={sum} />
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
          {owner.map((item,index) => (
            <View style={styles.shadow} key={index}>
               <View style={styles.button}
                onPress={() => { navigation.navigate('Owner Collection') }}>
            
            
            <View style={{width:150}}>
                <Text style={[styles.text,{color:'#007FC4'}]}>{item.name}</Text>
                <Text >{item.place}</Text>
                <Text >{item.phone}</Text>
            
                </View>
            <View>
                
            </View>
                  <Text style={[styles.text,{color:'#2d387a',fontWeight:'bold'}]}>₹ {item.sum}</Text>
                  <TouchableOpacity onPress={()=>{deleting(item.name)}}>
                          <Iconb
                  
                                            name={'delete'}
                                            size={40}
                                            color={'#3A8885'}
                                       
                                        />
                  </TouchableOpacity>
            
            </View>
             </View>
          ))}
            <View style={[styles.button,{margin:5}]}>
            
            
            <View style={{width:150}}>
                <Text style={[styles.text,{color:'#007FC4'}]}>Temporary Permit</Text>
                <Text >Owners Fee</Text>

                </View>
            <View>
                
            </View>
                  <Text style={[styles.text,{color:'#2d387a',fontWeight:'bold'}]}>₹ {tempSum}</Text>
                  
                  <TouchableOpacity >
                          <Iconb
                  
                                            name={'delete'}
                                            size={40}
                                            color={'#3A8885'}
                                       
                                        />
                  </TouchableOpacity>
            </View>
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
         width:'95%',height:120,backgroundColor:'#F9F8FF',justifyContent:'center',alignItems:'center',
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
        }
   
  })

  const AnimatedHeader = ({ animatedValue,navigation,setModelopen,sum }) => {
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
          <Text style={[styles.text,{fontWeight:'bold',fontSize:20}]}>
Total amount collected
          </Text>
          <Text style={[styles.textb,{marginTop:10}]}>
From 12/12/2022 To 12/01/2023     
</Text>
          <Text style={[styles.text,{fontWeight:'bold',fontSize:25,marginTop:5}]}>
          ₹ {sum}
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