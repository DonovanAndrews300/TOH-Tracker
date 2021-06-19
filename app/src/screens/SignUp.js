import React, { useState, useContext} from 'react'
import {colors} from '../styles/index'
import { Button,Text, TextInput, View, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation'

import { AuthContext } from '../routes/authProvider'


const SignUp = props => {
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)

  const {register, error, setError} = useContext ( AuthContext )

  const onSubmit= () =>{
      register(email,password)
      if(error){
        Alert.alert("Error",`${error.message}`)
        setError(null)
      }
  }

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
  return <>
          <View style={styles.container}>
          <Text style={styles.h1}>Create your account</Text>
        <TextInput value={email} onChangeText={email => setEmail(email)} placeholder={'Email'} style={styles.input} />
        <TextInput value={password} onChangeText={password => setPassword(password)} placeholder={'Password'} secureTextEntry={true} style={styles.input} />
        <Button onPress={() => onSubmit()} title={'Sign up'} color={colors.theme.primary700} style={styles.input} />
        <View style={{
        paddingTop: 10,
        alignItems: 'center'
      }}>
        </View>
      </View>
      </>;
};

export default withNavigation(SignUp)