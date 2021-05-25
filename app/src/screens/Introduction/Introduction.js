import Onboarding from 'react-native-onboarding-swiper';
import {Button, Image, Pressable, Text} from 'react-native'
import React from 'react';


const Done = ({...props}) => (
  <Pressable
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    {...props}

  >
  <Text style={{
    color:"white",
    marginRight:20,
    fontSize:15
  }}>Login</Text> 
   </Pressable>
);



export default function Introduction({navigation})  {
  return (
    <Onboarding
    DoneButtonComponent={Done}
    onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: 'green',
      image: <Image source={require('../../assets/asset1.jpg')} />,
      title: 'Tree of Heaven Tracker',
      subtitle: '__ Tracked Trees!'
    },{
      backgroundColor: 'green',
      image: <Image source={require('../../assets/asset2.jpg')} />,
      title: 'Stop the spread now!',
      subtitle: 'Stop the invasion of the spotted lanternfly by tracking the locations of their host trees.',
    }
    ,{
      backgroundColor: 'green',
      image: <Image source={require('../../assets/asset3.jpg')} />,
      title: 'Our Mission',
      subtitle: 'The tree of heaven is vital for the lanternfly to reproduce in large numbers. By tracking them we can use the information to fight against them using know control methods',
    }
  ]}
/>

  );
}

