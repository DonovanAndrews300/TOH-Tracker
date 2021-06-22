import React, { Component } from 'react'
import {Button, TouchableOpacity,Text, StyleSheet, View, Pressable, ActivityIndicator } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import {colors} from '../../styles/index'


const styles = StyleSheet.create({
    primaryButton : { 
        backgroundColor:colors.theme.primary500,
        height:45,
        width:125,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3

    }
})

export const PrimaryButton = (props) => 
<TouchableOpacity onPress={() => props.onPress()} style={styles.primaryButton} disabled={props.loading}>
{props.loading ? 
  <ActivityIndicator color={'#FFFF'}/>
  : 
  <Text>{props.title} </Text> 
}
</TouchableOpacity>



export const MenuButton = (props) => 
<View style={{
  alignSelf: 'flex-end',
  right:10,
  top:10}
}>
<Pressable onPress={() => {

  props.props.navigation.toggleDrawer()}}>
  <Icon name="bars" size={30}/>
</Pressable>
</View>
