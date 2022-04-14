
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Addowner from './Screens/addowner';
import Addbus from './Screens/addbus';
import Tabs from './Screens/navigation/tab';
import AddCategory from './Screens/addcategory';
import AddCollector from './Screens/addcollector';
import Collection from './Screens/Collection';
import Splash from './Screens/Splash';
import RegisterScreen from './Screens/register';
import Entityselections from './Screens/entityselection';
import Submit from './Screens/submit';
import Entitycollection from './Screens/entitycollection';
import EntityTotal from './Screens/collectionfrombus';
function HomeTabs() {
  return (
   
      <Tabs  />

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
             options={{headerShown: false}}
            name="Home Tabs"
            component={HomeTabs}
            
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
            name="Entity Total"
            component={EntityTotal}
            options={{headerShown: false}}
            />
              <RootStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{headerShown: false}}
      />
      <RootStack.Screen
                name="Submit"
                component={Submit}
                options={{headerShown: false}}
      />
       <RootStack.Screen
             
            name="Add Owner"
            component={Addowner}
            
          />
             <RootStack.Screen
             
             name="Add bus"
             component={Addbus}
             
           />
           <RootStack.Screen
             
             name="Add category"
             component={AddCategory}
             
           />
               <RootStack.Screen
             
             name="Add collector"
             component={AddCollector}
             
           />
           <RootStack.Screen
                 options={{headerShown: false}}
             name="collection"
             component={Collection}
             
           />
        </RootStack.Navigator>
      </NavigationContainer>
  )
}

export default App;