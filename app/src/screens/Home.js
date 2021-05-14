import React, { Component } from 'react'
import { View,Text, Button, StyleSheet } from 'react-native'
import {withNavigation} from 'react-navigation'

class Home extends Component {
    constructor(props){
        super()
    }
    

    render() {
        const styles = StyleSheet.create({
            container: {
              height: "100%",
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "green",
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
           <View style={styles.container}>
           <Text h2>Home</Text>
            <Button title={'Scan Tree'}/>
            <Button title={'View Map'}/>
           </View>
        )
    }
}

export default withNavigation(Home)
