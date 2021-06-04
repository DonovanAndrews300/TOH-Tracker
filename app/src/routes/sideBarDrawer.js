import React from 'react';
import Home from '../screens/Home';
import {Share, StyleSheet} from 'react-native'
import UserProfile from '../screens/UserProfile'
import UserResources from '../screens/UserResources';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../styles';
import {useAuth} from './authProvider'


const styles = {
  marginVertical: 5,
   width:20,
  backgroundColor:"white"

}



const onShare = async () => {
  try {
    const result = await Share.share({
      message:
      //This should have actual app link tp share
        'Tree of Heaven Tracker | Help track the tree of heaven to stop lanternfly',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};


function CustomDrawerContent(props) {
  const {signOut} = useAuth()
  const onSignOut = () => {
  signOut()
}

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Share" onPress={onShare} />
      <DrawerItem label="Logout" onPress={onSignOut} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator()
export default function SideBarDrawer() {
  return (
      <Drawer.Navigator  initialRouteName="Home" 
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{backgroundColor:colors.theme.primary500}}
        drawerContentOptions={{
        activeTintColor:"white",
        style:{styles}
      }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={UserProfile} />
      </Drawer.Navigator>
  )
}
