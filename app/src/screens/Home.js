import React, { Component } from 'react'
import {MenuButton, PrimaryButton} from "../components/buttons/buttons"
import { View,Text,StyleSheet, Image} from 'react-native'
import {withNavigation} from 'react-navigation'
import {colors} from '../styles/index' 
import { useAuth } from '.././routes/authProvider'
import {api} from '../routes/dataProdiver'


const Home = props => {
  const styles = StyleSheet.create({
    container: {
      height: "100%",
    
      backgroundColor: colors.theme.primary700
    },
    flexContainer: {
      justifyContent: 'center',
          alignItems: 'center',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10
    },
    image: {
      margin:0,
    },
    navButtons: {
      justifyContent: 'flex-end',
      marginBottom:150
    }
  });
  const {user} = useAuth()
  const { getTrees} = api()
  
  return <View style={styles.container}>
          <MenuButton props={props}/>
          <View style={styles.flexContainer}>
               <Image style={styles.image} source={require("../../../assets/logo.png")}/>
          <View style={styles.navButtons}>
            <PrimaryButton onPress={() => props.navigation.navigate("AppCamera")} title={'Scan Tree'} />
            <PrimaryButton onPress={() => props.navigation.navigate("Map")} title={'View Map'} />
          </View> 
          </View>     
          
       
           </View>;
};
export default withNavigation(Home)
