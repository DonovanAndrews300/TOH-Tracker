import React, { Component } from 'react'
import {colors} from '../styles/index'
import { Button, TextInput, View, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

class Login extends React.Component {
    constructor(){
        super()
        this.state={
            username:"Joe",
            password:"Tiff"
        }
    }
  render() {
    const styles = StyleSheet.create({
        container: {
          height: "100%",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.theme.white,
        },
        input: {
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
          marginBottom: 10,
        },
      })
    return (
      <>
          <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
           onPress={() => this.props.navigation.navigate('Home')}
          title={'Login'}
          style={styles.input}
          />

       
      </View>
      </>
    )
  }
}

export default withNavigation(Login)