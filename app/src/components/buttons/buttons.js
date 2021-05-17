import React, { Component } from 'react'
import {Button, TouchableOpacity,Text, StyleSheet} from 'react-native'
import {colors} from '../../styles/index'

const styles = StyleSheet.create({
    primaryButton : { 
        backgroundColor:colors.theme.primary700,
        height:45,
        width:125,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3

    }
})

export const PrimaryButton = (props) => 
<TouchableOpacity onPress={() => props.onPress()} style={styles.primaryButton}>
  <Text>{props.title} </Text> 
</TouchableOpacity>

