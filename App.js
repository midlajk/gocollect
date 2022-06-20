
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Addowner from './Screens/addowner';
import Addbus from './Screens/addbus';
import Home from './Screens/home';
import Admin from './Screens/admin';

import Tyrecol_tab from './Screens/navigation/tyrecol_tab';
import TaxCollection from './Screens/Tax_collection';
import Settings from './Screens/Settings';
import Standfee from './Screens/Stand_fee';
import Tempororyfee from './Screens/temperoryfee';
import Tyrecollection from './Screens/Tyre_collection';
// import profile from './Screens/profile';
import Splash from './Screens/Splash';
import RegisterScreen from './Screens/register';
import Entityselections from './Screens/entityselection';
import Submit from './Screens/submit';
import Entitycollection from './Screens/entitycollection';
import OwnerCollection from './Screens/ownercollections';
function TyreTabs() {
  return (
   
      <Tyrecol_tab  />

  );
}

const RootStack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
   
        >
            <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
         
          
           <RootStack.Screen
            name="Entity Selection"
            component={Entityselections}
            
          />
            <RootStack.Screen
            name="Entity coll"
            component={Entitycollection}
            options={{headerShown: false}}
            />
             <RootStack.Screen
            name="Owner Collection"
            component={OwnerCollection}
            options={{headerShown: false}}
            />
              <RootStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{headerShown: false}}
      />
       {/* <RootStack.Screen
                name="Profile Screen"
                component={profile}
                options={{headerShown: false}}
      /> */}
      <RootStack.Screen
                name="Submit"
                component={Submit}
                options={{headerShown: false}}
      />
       {/* <RootStack.Screen
             
            name="Add Owner"
            component={Addowner}
            
          />
             <RootStack.Screen
             
             name="Add bus"
             component={Addbus}
             
           /> */}
           <RootStack.Screen
                              options={{headerShown: false}}

             name="Tyre collection"
             component={Tyrecollection}
             
           />
             <RootStack.Screen
                              options={{headerShown: false}}

             name="Tax Collection"
             component={TaxCollection}
             
           />
               <RootStack.Screen
             
             name="Manage Settings"
             component={Settings}
             options={{ 
             headerTitle : 'Manage User',
  
      }}
             
           />
           <RootStack.Screen
                 options={{headerShown: false}}
             name="Stand fee"
             component={Standfee}
             
           />
           <RootStack.Screen
                 options={{headerShown: false}}
             name="Temporory fee"
             component={Tempororyfee}
             
           />
                <RootStack.Screen
                 options={{headerShown: false}}
             name="home"
             component={Home}
             
           />
            <RootStack.Screen
                 options={{headerShown: false}}
             name="admin"
             component={Admin}
             
           />
        </RootStack.Navigator>
      </NavigationContainer>
  )
}

export default App;