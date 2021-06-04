import {createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Introduction from '../screens/Introduction';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login'
import AppCamera from '../screens/AppCamera';
import Map from '../screens/Map';
import {useAuth} from '../routes/authProvider'
import SideBarDrawer from './sideBarDrawer';
import SignUp from '../screens/SignUp';



const Stack = createStackNavigator();
const AuthStack = () => {
  return <Stack.Navigator headerMode={'none'}>
<Stack.Screen name="Introduction"  component={Introduction} />
      <Stack.Screen name="Login"  component={Login} />
      <Stack.Screen name="SignUp"  component={SignUp} />
  </Stack.Navigator>
}
const AppStack = () => {
 return <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name="Home"  component={SideBarDrawer} />
      <Stack.Screen name="AppCamera"  component={AppCamera} />
      <Stack.Screen name="Map"  component={Map} />
  </Stack.Navigator>
}
export default function StackRouter() {
  const {user} = useAuth()
  return (
    <NavigationContainer>     
      {user ?
      <AppStack/>
       :
       <AuthStack/>
      }
    </NavigationContainer>
  );

  
}



