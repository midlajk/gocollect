import React,{useState,useEffect,useRef} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {queryallbus} from './model/modalschema';

export default function TrackScreen({navigation,route}) {
   const [list, setList] = useState([]);

  const [searchText, setSearchText] = useState('');
 

  useEffect(() => {

    getdata()

  }, [1]);
  async function getdata(){
    let letdata = await queryallbus()
    setList(letdata)
   } 

        


  //Data can be coming from props or any other source as well
  const data = list
  const filteredData = searchText ? data.filter(x =>
    x.number.toLowerCase().includes(searchText.toLowerCase())||x.assignee[0].name.toLowerCase().includes(searchText.toLowerCase())
    ): data
    

  return (
    <View style={{flex:1,}}>
      <Searchbar
  fontColor="#c6c6c6"
  iconColor="#c6c6c6"
  style={{margin:10,}}
  shadowColor="#282828"
  cancelIconColor="#c6c6c6"
  placeholder="Search here"
  autoFocus
  onChangeText={(text) => setSearchText(text)}
  onPress={() => alert("onPress")}
/>
        
          
          <View style={{ flex: 1, justifyContent: 'center',marginTop:10}}>

                <FlatList
                data={filteredData}
                renderItem={({ item }) => (

                <View style={styles.shadow}>
               <TouchableOpacity style={styles.button}
              onPress={()=>navigation.navigate('home',{bus:item.number,name:item.name,owner:item.assignee[0].name})}
              >
        
            
                    <View style={{flex:1,alignItems:'center'}}>
         
                  

                      <Text style={styles.text}>{item.number}</Text>
                      <Text style={{fontSize:16,color:'#000'}}>{item.name}</Text>
                      <Text style={{fontSize:16,color:'#000'}}>{item.assignee[0].name}</Text>

                     
                      
                      
                        
                        </View>
              
               </TouchableOpacity>
              </View>
                )}
                keyExtractor={(item, id) => id.toString()}/>
    

  </View>
  
    
  </View>
  );
       }


const styles = StyleSheet.create({
   
    text: {
         color:'#000',
         fontSize:14,
      
       },
       textb: {
        color:'#fff',
        fontSize:16,
     
      },
       button: {
         width:'90%',borderRadius:16,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
         padding:10,
         flexDirection:'row',justifyContent:'space-between',
         shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:6,
        },
        shadow:{
            
            alignItems:'center',margin:5
        }
   
  })