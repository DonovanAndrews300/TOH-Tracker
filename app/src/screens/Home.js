import React, { Component } from 'react'
import {MenuButton, PrimaryButton} from "../components/buttons/buttons"
import { View,Text,StyleSheet } from 'react-native'
import {withNavigation} from 'react-navigation'
import {colors} from '../styles/index' 
import { useAuth } from '.././routes/authProvider'
import {api} from '../routes/dataProdiver'


const Home = props => {
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.theme.primary700
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10
    },
    navButtons: {
      justifyContent: 'flex-end',
      height:"100%",
      marginBottom:150
    }
  });
  const {user} = useAuth()
  const { getTrees} = api()
  return <View style={styles.container}>     
  {
    //Need to put a side bar menu here. Also gonna just put the image of the logo here instead of doing background
  }
          <MenuButton props={props}/>
          <View style={styles.navButtons}>
            <PrimaryButton onPress={() => props.navigation.navigate("AppCamera")} title={'Scan Tree'} />
            <PrimaryButton onPress={() => props.navigation.navigate("Map")} title={'View Map'} />
          </View>
            
           </View>;
};
export default withNavigation(Home)
