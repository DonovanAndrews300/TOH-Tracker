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

const Login = props => {
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
  const {login,user,error, setError} = useAuth()

  const onLogin = async () => {
      login(email,password)
      if(error){
        Alert.alert("Error",`${error.message}`)
        setError(null)
      }
  }

  return <>
          <View style={styles.container}>
          <Text style={styles.h1}>Login</Text>
        <TextInput value={email} onChangeText={email => setEmail(email)} placeholder={'email'} style={styles.input} />
        <TextInput value={password} onChangeText={password => setPassword(password)} placeholder={'Password'} secureTextEntry={true} style={styles.input} />
        <Button onPress={() => onLogin()} title={'Login'} color={colors.theme.primary700} style={styles.input} />
        <View style={{
        paddingTop: 10,
        alignItems: 'center'
      }}>
          <Pressable onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.authText}>Sign-up</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.authText}>Forgot your password?</Text>
          </Pressable>
        </View>
      </View>
      </>;
};

export default withNavigation(Login)