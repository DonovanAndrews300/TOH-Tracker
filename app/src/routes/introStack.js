import {createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Introduction from '../screens/Introduction/Introduction';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login'
import AppCamera from '../screens/AppCamera';



const Stack = createStackNavigator();
export default function StackRouter() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Introduction"  component={Introduction} />
      <Stack.Screen name="Login"  component={Login} />
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="AppCamera"  component={AppCamera} />
    </Stack.Navigator>
    </NavigationContainer>
  );

  
}



