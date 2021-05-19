import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { PrimaryButton } from '../components/buttons/buttons';
import * as Location from 'expo-location';



export default function AppCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        Location.requestForegroundPermissionsAsync()
        setHasPermission(status === 'granted');
      })();
    }, []);

    //This is the method to change from front camera to back
    const switchCameraView = () => {
      setType(
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }


    const validateImage = (image) => {
     const postData = {
        api_key: "RkX6DvReSNq1k8Pi48Jrwah2YNHSHP7Mbbk4pmU44AoOVcACmr",
        images: [image.base64],
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
                          "url",
                          "name_authority",
                          "wiki_description",
                          "taxonomy",
                          "synonyms"]
      };

      fetch('https://api.plant.id/v2/identify',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
      .then(response => response.json())
      .then(data => {
        const plantList = data.suggestions
        plantList.forEach((plant)=>{
         const  {probability} = plant 
          if(probability>.76){
           console.log(plant)
         } })
      });
    }

    //This will send a post request to the plantId api and if the photo is a tree of heaven then it will return an object with the photo and a current location
    const scanImage = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync({base64:true});
        Location.requestForegroundPermissionsAsync()
        Location.getCurrentPositionAsync({}).then((location) =>{
          const {latitude,longitude} = location.coords
          console.log("The current location is ",latitude,longitude)
        })
        validateImage(photo);

      }
    }

  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera ref={ref => this.camera = ref} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => scanImage()} title="Scan"/>
          </View>
        </Camera>
      </View>
    );
  }

  const styles = StyleSheet.create({ 
    container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 20,
      },
    
      text: {
        fontSize: 18,
        color: 'white',
      },
   }); 