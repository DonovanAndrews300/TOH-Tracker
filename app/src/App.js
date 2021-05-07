import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Introduction from './screens/Introduction/Introduction'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Introduction/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 5,
    backgroundColor: '#33FF93',
    alignItems:'auto',
    justifyContent: 'center',
  },
});
