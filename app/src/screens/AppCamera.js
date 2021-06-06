import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Camera } from 'expo-camera';
import {api} from '../routes/dataProdiver'
import {useAuth} from '../routes/authProvider'
import { PrimaryButton } from '../components/buttons/buttons';
import * as Location from 'expo-location';



export default function AppCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [images, setImages] = useState(null);
    const {validatedImages, setValidatedImages} = useState(null);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(null);
    const [camera, setCamera] = useState(null);
  
    const {createTree} = api()
    const {user} = useAuth()

    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        await Location.requestForegroundPermissionsAsync()
        setHasPermission(status === 'granted');
        Alert.alert("You ae now ready to identify!", "To accurately identify, take three photos of the plant")
      })();
    }, []);

    //This is the method to change from front camera to back probably not needed
    const switchCameraView = () => {
      setType(
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }


    const validateImage = (images) => {
     const postData = {
        api_key: "RkX6DvReSNq1k8Pi48Jrwah2YNHSHP7Mbbk4pmU44AoOVcACmr",
        images:images,
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
                          "url",
                          "name_authority",
                          "wiki_description",
                          "taxonomy",
                          "synonyms"]
      };

     return fetch('https://api.plant.id/v2/identify',  {
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
         const  {probability,scientific_name} = plant
          if(probability>.40){
            Alert.alert("Success", "You have successfully tracked a Tree of Heaven!")
            //this should return true 
         }
         if(probability<.40){
          Alert.alert("Identification unsuccessful", "This is either not a tree of heaven or the scan was unsuccessful and you need to try again")
          //this should return false
       }
        })
      });
    }

    const getLocation = () => {
    return   Location.getCurrentPositionAsync({})
          .then((currentLocation) => {
            const {latitude,longitude} = currentLocation.coords
            const coordinates = {latitude,longitude}
            setLocation(coordinates)
          })
          .catch((error) => console.log(error))
    }

    //This will send a post request to the plantId api and if the photo is a tree of heaven then it will return an object with the photo and a current location
    const scanImage = async () => {
      if (camera) {
        setLoading(true)
        let photo = await camera.takePictureAsync({base64:true});
        if(!images){
          setImages([photo.base64])
          setLoading(false)
        }
        if(images){
          if(images.length===2){
           //if this function returns true then get location, create object and pop camera screen if false then set images array back to null 
          await validateImage(images).then(() => setLoading(false))
          {
            //what needs to happen here is is the images are valid then they need to be converted from base64 into something else.
          }
          await getLocation()
            const tree = { 
              location:location,
              userID:user.uid
            }
            createTree(tree)
            setImages(null)
        }
        else{
          setImages(images => [...images, photo.base64])
          setLoading(false)
        }  
        } 
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
        <Camera ref={ref => setCamera(ref)} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
              <PrimaryButton loading={loading} onPress={() =>scanImage()} title="Scan"/>
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