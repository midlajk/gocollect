import * as React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Addowner() {
  return (
    <ScrollView style={{flex:1}}>
<View style={{ flex: 1, justifyContent: 'center',marginTop:'20%',marginBottom:50}}>
      <Text style={styles.text}> Owner Name</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}> Identity </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}> Phone</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}> Place</Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.extra_button}>
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
    width:'80%',
    margin:10,
    alignSelf:'center'
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