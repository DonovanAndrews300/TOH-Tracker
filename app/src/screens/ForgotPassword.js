import React, { useState, useContext, useEffect } from 'react'
import {colors} from '../styles/index'
import { Button,Text, TextInput, View, StyleSheet, Alert} from 'react-native'
import { withNavigation } from 'react-navigation'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useAuth } from '../routes/authProvider'

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.theme.primary100
    },
    h1: {
      padding: 20,
      fontWeight: "500",
      fontSize: 20,
      lineHeight: 28
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      backgroundColor: colors.theme.white,
      borderColor:colors.theme.black,
      marginBottom: 10
    },
    authText: {
      marginTop: 5,
      color: "grey"
    }
  });

const ForgotPassword = props => {
  const [email,setEmail] = useState(null)
  const {resetPassword,error, setError} = useAuth()

  const onSubmit = async () => {
      resetPassword(email).then(() => Alert.alert("We've sent your email"))
      
      if(error){
        Alert.alert("Error",`${error.message}`)
        setError(null)
      }
  }

  return <>
          <View style={styles.container}>
          <Text style={styles.h1}>Reset Password</Text>
        <TextInput value={email} onChangeText={email => setEmail(email)} placeholder={'email'} style={styles.input} />
        <Button onPress={() => onSubmit()} title={'Reset Password'} color={colors.theme.primary700} style={styles.input} />
        <View style={{
        paddingTop: 10,
        alignItems: 'center'
      }}>
        </View>
      </View>
      </>;
};

export default withNavigation(ForgotPassword)