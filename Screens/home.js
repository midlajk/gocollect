import * as React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyle from './styles/input';
import SelectDropdown from 'react-native-select-dropdown'



export default function AppCategoryScreen({route,navigation}) {
  const category = ["Stand fee", "Tire Cost", "Donation", "Chitty"]
  return (
    <ScrollView style={{flex:1}}>
      <View style={{backgroundColor:'#fff',height:60,justifyContent:'space-around',flexDirection:'row'}}>  
      <View style={{flex:6,padding:15}}>
      <Text style={{fontSize:16}}>
        Collection Point
      </Text>
    </View >
    <View style={{flex:2,flexDirection:'row',justifyContent:'space-around'}}>  
  
    <View>
    <TouchableOpacity
                style={{
                    paddingTop:15,
                    flex:1
                }}
                onPress={() => { navigation.navigate('Entity coll') }}> 
                
                      
        <Image
                source={require('../assets/history.png')} 
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
                    padding:15,
                    flex:1
                }}> 
                
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
   
      </View>
    <View style={{ flex: 1, justifyContent: 'center',marginTop:'35%',marginBottom:50}}>
    
      <Text style={styles.text} > Bus Number </Text>
      <TextInput onFocus={() => { navigation.navigate('Entity Selection') }} style={styles.input}value='KL 12 AB 1234'></TextInput>
      <Text style={styles.text}> Collection Type</Text>
      <SelectDropdown
      buttonStyle={styles.input}
      
      defaultValueByIndex='0'
	data={category}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
    
      <Text style={styles.text}> Collection Amount</Text>
      <TextInput keyboardType='number-pad' style={styles.input} value='10'></TextInput>
      <TouchableOpacity  style={styles.extra_button}
      onPress={() => { navigation.navigate('Submit') }}>
        <Text style={{color:'#fff'}}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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