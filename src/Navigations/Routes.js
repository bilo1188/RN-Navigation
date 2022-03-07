import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Home,Profile} from '../Screens'
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";

const Stack = createNativeStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;