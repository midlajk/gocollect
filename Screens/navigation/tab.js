import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Login from '../admin';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(

        <Tab.Navigator
        

          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                fontSize: 12,
                bottom:10

              },
              tabBarStyle:{
                  
              position:'absolute',
              bottom:12,
              left:13,
              right:13,
              borderRadius:25,
              backgroundColor:"#fff",
            
                height:70,
           
                ...style.shadow
              }

          }}
        >
    <Tab.Screen name={'Collection'} component={Home} 
         options={{
            headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',justifyContent:"center",}}>
        
        <Image
                source={require('../../assets/hand.png')} 
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor:focused?'#4263EB':"#000"
                }}
                /> 
                    
            </View>
        
        ),
    }}
    /> 
    <Tab.Screen name={'Admin'} component={Login} 
         options={{  headerShown: false,
         tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',justifyContent:"center",}}>
               <Image
                source={require('../../assets/admin.png')} 
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor:focused?'#4263EB':"#000"
                }}/>
                  
            </View>
        
        ),
    }}
    />      
 
            
        </Tab.Navigator>
    
    )
}

export default Tabs;

const style = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
    }
})