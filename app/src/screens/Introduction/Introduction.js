import * as React from 'react'
import {StyleSheet, View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
 
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/asset1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/asset2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/asset3.jpg'),
    backgroundColor: '#22bcb5',
  }
];


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingVertical:60 ,
    alignItems: 'center',
    
    justifyContent: 'end',
    backgroundColor: '#fff',
  },
  image: {
        height:50
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
  },
});



export default class Introduction extends React.Component {
    state = { showRealApp:false }

    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
      _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
      }

    render() {
     

        return (
            <View>
             <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>
            </View>
            
        )
    }
}

