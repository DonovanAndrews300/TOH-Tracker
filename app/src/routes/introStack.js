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
import { ActivityIndicator } from 'react-native';
import { colors } from '../styles';
import ForgotPassword from '../screens/ForgotPassword';




const Stack = createStackNavigator();
const AuthStack = () => {
  return <Stack.Navigator headerMode={'none'}>
<Stack.Screen name="Introduction"  component={Introduction} />
      <Stack.Screen name="Login"  component={Login} />
      <Stack.Screen name="SignUp"  component={SignUp} />
      <Stack.Screen name="ResetPassword"  component={ForgotPassword} />
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
  const {user, authLoading} = useAuth()
  return (
    <NavigationContainer> 
      {authLoading && <ActivityIndicator style={{height: '100%',justifySelf: 'center', alignSelf: 'center'}} size={'large'} color={colors.theme.primary500}/>}
      {user &&
      <AppStack/>
      }{!user && !authLoading &&
        <AuthStack/>
      }
    </NavigationContainer>
  );

  
}



