import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tyre_Collection from '../Tyre_collection';
import Tyre_Collection_credit from '../Tyrecollection_credit';
import Tyre_Collection_debit from '../tyre_debit';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(

        <Tab.Navigator
        

          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarIconStyle:{display:'none'},
            tabBarLabelStyle: {
                fontSize: 16,
               bottom:10,

              },
             

          }}
        >
    <Tab.Screen name={'Tyre Collection'} component={Tyre_Collection} 
         options={{
            headerShown: false,
            tabBarLabel: 'All',

    }}
    /> 
    <Tab.Screen name={'Tyre Collection_credit'} component={Tyre_Collection_credit} 
         options={{  headerShown: false,
            tabBarLabel: 'Collected',

    }}
    />      
    <Tab.Screen name={'Tyre Collection_debit'} component={Tyre_Collection_debit} 
         options={{  headerShown: false,
            tabBarLabel: 'Provided',

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