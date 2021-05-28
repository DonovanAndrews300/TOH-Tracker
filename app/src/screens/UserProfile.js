import React from 'react';
import { Text, View } from 'react-native';
import {MenuButton} from "../components/buttons/buttons"

export default function UserProfile(props) {
  return (
      <View>
         <MenuButton props={props}/>
          <Text>UserProfile</Text>
      </View>
  );
}
