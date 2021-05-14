import Onboarding from 'react-native-onboarding-swiper';
import {Button, Image, Pressable} from 'react-native'
import React from 'react';


const Done = ({...props}) => (
  <Button
    title={'Done'}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    {...props}

  />
);

const Next = ({...props}) => (
  <Pressable onPress={() => react}>
    <Button
    title={'Next'}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    {...props}
  />
</Pressable>
  
);

export default function Introduction({navigation})  {
  return (
    <Onboarding
    NextButtonComponent={Next}
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
  ]}
/>

  );
}

