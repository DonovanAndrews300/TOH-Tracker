import React from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';
import {colors, typography } from '../styles/index'

import {MenuButton} from "../components/buttons/buttons"
export default function UserResources(props) {
  

  return (
    <View style={styles.container}>
    <MenuButton props={props}/>
      <Text style={styles.header}>Resources</Text>
         <View style={styles.section}>
            <Text style={styles.header2}>Spotted Lanternfly Management</Text>
            <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://extension.psu.edu/spotted-lanternfly-management-resources')}>
            -Management Info(Please refer to this guide if you are unsure about any control methods)
          </Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=wh8xXkecij0')}>
            -Tree Banding
          </Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=0YdS_JYxP2g')}>
            -Circle Trap
          </Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=oieJTq0WvVg')}>
            -Bark Spraying
          </Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nTfLhwaC9rY')}>
            -Soil Drenching
          </Text>
         </View>
        

         <View style={styles.section}>
         <Text style={styles.header2}>Recommended Insecticides</Text>
         <Text style={styles.header2}>(Please use as advised!!! )</Text>
            <Text style={styles.text}>Soil Drenches:</Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.amazon.com/Ortho-Miracle-Gro-Concentrate-Insecticide-Fertilizer/dp/B008RH9144/ref=sr_1_6?dchild=1&keywords=Ortho+Tree+and+Shrub+control&qid=1624336586&sr=8-6')}>
            -Ortho Tree and Shrub Insect Control
          </Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.amazon.com/Advanced-701910-Protect-Granules-10-Pound/dp/B002HJ644S/ref=sr_1_1_sspa?dchild=1&keywords=bayer+tree+and+shrub+insect+control&qid=1624337862&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWjFZMUlPVFJWRk5XJmVuY3J5cHRlZElkPUEwMzk1NjM1MlZNTVg0Qkg4STRMNiZlbmNyeXB0ZWRBZElkPUEwNTQ5NjUzR1M3UVZLRkRKMzdUJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==')}>
            -Bayer Tree and Shrub Insect Control 
          </Text>
          <Text style={styles.text}> Tree Bark/Contact Sprays:</Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.amazon.com/Ortho-Home-Defense-Insect-Killer/dp/B01JIRKIRK/ref=sr_1_1_sspa?crid=3T7NJL37SJBAH&dchild=1&keywords=ortho+home+defense&qid=1624337929&s=lawn-garden&sprefix=ortho%2Clawngarden%2C191&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR1kySlc3S1FQN1ZMJmVuY3J5cHRlZElkPUEwODA4NDA5MUM3SUNORk5XVEpYQiZlbmNyeXB0ZWRBZElkPUEwNDgxODI4VzFIRVRXMEpJUE1FJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==')}>
            -Ortho Home Defense Insect Killer
          </Text>
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.amazon.com/Advanced-700280B-Complete-Insect-32-Ounce/dp/B000BPD9M0/ref=sr_1_2?dchild=1&keywords=Bayer+Complete+Insect+Killer&qid=1624337031&s=lawn-garden&sr=1-2')}>
            - Bayer Complete Insect Killer
          </Text>
           </View>
          
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      height: '100%',
      backgroundColor:colors.theme.primary700
  },
  section: {
    alignItems: 'center',
    margin:50

  },
  header:{
  marginTop:30,
  marginBottom:30,
  fontSize:30
  },
  header2:{
  marginTop:5,
  marginBottom:5,
  fontSize:20
  },
  h3:{

  },
  h1:{

  },

  text:{
      color:"black"
  },

})
