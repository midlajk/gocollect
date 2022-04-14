import * as React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Collection({navigation}) {
  return (
    <View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
    <View style={{backgroundColor:'#fff',height:60,justifyContent:'space-around',flexDirection:'row'}}>  
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>  

                <View>
                <TouchableOpacity
                style={{
                padding:20,
                flex:1
                }}
                onPress={() => { navigation.goBack() }}> 

                <Image
                source={require('../assets/left-arrow.png')} 
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                
                }}
                /> 

                </TouchableOpacity>
                </View>
</View>
    <View style={{flex:6,padding:10}}>
    <Text style={{fontSize:16,color:'#000'}}>
    Collection From Owners
    </Text>
    <Text style={{fontSize:13,padding:3}}>16/12/2022 to 17/12/2022</Text>
  </View >
  <View style={{flex:2,flexDirection:'row',justifyContent:'space-around'}}>  

  
               <View>
               <TouchableOpacity
              style={{
                  padding:20,
                  flex:1
              }}> 
              
              <Image
                source={require('../assets/edit.png')} 
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                  
                }}
                /> 

               </TouchableOpacity>
               </View>
               <View>
               <TouchableOpacity
              style={{
                  padding:20,
                  flex:1
              }}
              > 
              
              <Image
                source={require('../assets/filter.png')} 
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                  
                }}
                /> 

               </TouchableOpacity>
               </View>
    </View>
 
    </View>
  <View style={{ flex: 1, justifyContent: 'center',marginTop:20,marginBottom:50}}>

    <View style={styles.shadow}>
      <TouchableOpacity style={styles.button}
       onPress={() => { navigation.navigate('Entity Total') }}>
        
     
            <View>
                <Text style={styles.text}>Shameer</Text>
                <Text >9744022332</Text>
                <Text >Kondotty</Text>
                <Text >Identity</Text>
                </View>
            <View>
                
            </View>
            <Text style={styles.text}>$78</Text>
       
      </TouchableOpacity>
      </View>
   
      <View style={styles.shadow}>
      <TouchableOpacity style={styles.button}
       onPress={() => { navigation.navigate('Entity Total') }}>
        
     
            <View>
                <Text style={styles.text}>Manaf</Text>
                <Text >9744022332</Text>
                <Text >Kondotty</Text>
                <Text >Identity</Text>
                </View>
            <View>
                
            </View>
            <Text style={styles.text}>$78</Text>
       
      </TouchableOpacity>
      </View>

  </View>
  </ScrollView>
     <View style={{flexDirection:'row',justifyContent:'space-around',height:70,backgroundColor:'#112',margin:'5%',borderRadius:30,bottom:10}}> 
     <View style={{justifyContent:'center'}}>
       <Text style={styles.textb}>
         Total
       </Text>
     </View>
     <View style={{justifyContent:'center'}}>
       <Text style={styles.textb}>
         156
       </Text>
     </View>
     </View>
  </View>
  );
}

const styles = StyleSheet.create({
   
    text: {
         color:'#000',
         fontSize:16,

       },
       textb: {
        color:'#fff',
        fontSize:16,

      },
       button: {
         width:'90%',height:120,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
         padding:20,
         flexDirection:'row',justifyContent:'space-between',
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