import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tax_collection from '../Tax_collection';
import Taxcollection_credit from '../Taxcollection_credit';
import Tax_debit from '../Tax_debit';
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
    <Tab.Screen name={'Tax collection'} component={Tax_collection} 
         options={{
            headerShown: false,
            tabBarLabel: 'All',

    }}
    /> 
    <Tab.Screen name={'Tax credit'} component={Taxcollection_credit} 
         options={{  headerShown: false,
            tabBarLabel: 'Collected',

    }}
    />      
    <Tab.Screen name={'Tax Debit'} component={Tax_debit} 
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