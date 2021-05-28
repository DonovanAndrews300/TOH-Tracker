import React from 'react';
import {Text, View} from 'react-native';
import {MenuButton} from "../components/buttons/buttons"
export default function UserResources(props) {
  return (
    <View>
    <MenuButton props={props}/>
        <Text>
            UserResources
        </Text>
    </View>
  );
}
