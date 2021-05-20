import React, { Component } from 'react'
import {PrimaryButton} from "../components/buttons/buttons"
import { View,Text,StyleSheet } from 'react-native'
import {withNavigation} from 'react-navigation'

class Home extends Component {
    constructor(props){
        super()
    }
    

    render() {
        const styles = StyleSheet.create({
            header:{

            },
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
           <Text h1>Home</Text>
            <PrimaryButton onPress={() => this.props.navigation.navigate("AppCamera")} title={'Scan Tree'}/>
            <PrimaryButton onPress={() => this.props.navigation.navigate("Map")} title={'View Map'}/>
           </View>
        )
    }
}

export default withNavigation(Home)
