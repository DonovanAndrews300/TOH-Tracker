import React from 'react';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import UserResources from '../screens/UserResources';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator()
export default function SideBarDrawer() {
  return (

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={UserProfile} />
        <Drawer.Screen name="Resources" component={UserResources} />
        {
          // Ill put the share button here using drawer list item of whatever
        }
      </Drawer.Navigator>
  )
}
