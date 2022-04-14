import * as React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Home!

      </Text>
    </View>
  );
}

export default function AppCategoryScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
    <View style={{backgroundColor:'#fff',height:60,justifyContent:'space-around',flexDirection:'row'}}>  
    <View style={{flex:6,padding:15}}>
    <Text style={{fontSize:16}}>
      Admin Section
    </Text>
  </View >
  <View style={{flex:2,flexDirection:'row',justifyContent:'space-around'}}>  

  <View>
  <TouchableOpacity
              style={{
                  padding:15,
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
    <ScrollView style={{flex:1}}>
     
    <View style={{ flex: 1, justifyContent: 'center',marginTop:50,marginBottom:100}}>

      <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button}
         onPress={() => { navigation.navigate('Entity Total') }}>
          <Text style={styles.text}> COLLECTION FROM A BUS </Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button}
         onPress={() => { navigation.navigate('collection') }}>
          <Text style={styles.text}> COLLECTION FROM OWNERS</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button}
         onPress={() => { navigation.navigate('collection') }}>
          <Text style={styles.text}> COLLECTION FROM COLLECTORS</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button} 
        onPress={() => { navigation.navigate('Add Owner') }}>
          <Text style={styles.text}> ADD OWNER </Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button}
        onPress={() => { navigation.navigate('Add bus') }}>
          <Text style={styles.text}> ADD BUS </Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button}
             onPress={() => { navigation.navigate('Add category') }}>
          <Text style={styles.text}> ADD COLLECTION TYPE </Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',margin:10}}>
        <TouchableOpacity style={styles.button}
             onPress={() => { navigation.navigate('Add collector') }}>
          <Text style={styles.text}> ADD NEW COLLECTOR</Text>
        </TouchableOpacity>
        </View>
      
     
    </View>
    </ScrollView>
    </View>
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
       color:'#fff',
       fontSize:16
     },
     button: {
       width:'80%',height:70,backgroundColor:'#4263EB',justifyContent:'center',alignItems:'center'
      },
 
})