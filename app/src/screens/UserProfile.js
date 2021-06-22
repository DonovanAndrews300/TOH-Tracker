import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {StyleSheet, View, Image,TextInput, Button,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MenuButton } from '../components/buttons/buttons';
import {useAuth} from '../routes/authProvider'
import {api} from '../routes/dataProdiver'
import { colors } from '../styles';

export default function UserProfile(props) {
    const [profilePicture,setProfilePicture] = useState(null)
    const [treeImages, setTreeImages] = useState(null)
    const [displayName, setDisplayName] = useState(null)
    const [updatingUserName, setUpdatingUserName] = useState(false)
    const [username, setUsername] = useState(null)
    const {user} = useAuth()
    const {getTreesById, saveImage} = api()
    const imagePickerPermissions = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          } 
        }
      }
      
      
      useEffect(() => {
        (async () => {  
                getTreesById(user.uid).then((snapshot) => {
                let images = []
                snapshot.docs.forEach(doc => doc.data().treeImages && images.push(doc.data().treeImages))
                const flatImages = images.flat()
                const treeImageList = flatImages.map((image, index ) => {return {"url":image, "key":index.toString()}})
                setTreeImages(treeImageList)
 
            })
            if(user.displayName){
                setDisplayName(user.displayName)
            }
            if(user.photoURL){
                setProfilePicture(user.photoURL)
            }
        })();
      }, []);  
 
      const renderItem = (item) => <Image source={{uri:item.item.url}} style={styles.images}/>
    
      useEffect(() => {}, [user])
    ; 

       

    const updateProfilePicture = async () => {
        imagePickerPermissions()
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

          if (!result.cancelled) {
            saveImage({uri:result.uri}).then((res) => user.updateProfile({photoURL:res}))
            //after the image is saved update the profile image with the download url in the promise
            
        Alert.alert("Success", "Profile Image changed")
            setProfilePicture(result.uri);
          }
    }

    const onChangeUserName = () => {
        user.updateProfile({displayName:username})
        setDisplayName(username)
        Alert.alert("Success", "Username changed")
        setUpdatingUserName(false)
        setUsername(null)

    }
 
 

  return ( 
    <View style={styles.container}>
        <MenuButton props={props}/> 
            <View style={{alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => updateProfilePicture()} >
                <View style={styles.profileImage}>
                      <Image source={{uri:profilePicture}} style={styles.image} />
                </View> 
                </TouchableOpacity>
               
            </View>
             <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                    {!user.displayName ? "Unknown":displayName}
                   </Text>
                    <TouchableOpacity onPress={() => setUpdatingUserName(true)}>
                    {updatingUserName ?   
                    <View>
                        <TextInput
                        onChangeText={(text) => setUsername(text)}                
                        style={styles.input}
                        placeholder="input new username"
                        />
                        <Button title='Submit' onPress={() => onChangeUserName()}/> 
                    </View>
                                    :
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Update Username</Text>   
                    }
                     
                    </TouchableOpacity>

                </View>
        
            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text  style={[styles.text, styles.subText]}>Trees Tracked Gallery</Text>
                     <View style={styles.galleryContainer}>
        <FlatList
        data={treeImages}
        renderItem={renderItem}
        horizontal={true}
      /> 
        </View>  
                </View>
            </View> 
       
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.theme.primary700
    },
    text:{
        
        color:"#525752"
    },
    image: {
        flex: 1,
        width:"100%",
        height:0,
      
    },
    images: {
        flex: 1,
        margin:3,
        width:175,
        height:175
    },
    subText:{
        fontSize:12,
        color:"#AEB5bc",
        textTransform: "uppercase",
        fontWeight:"500"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:colors.theme.white
      },
    galleryContainer:{
        height:"100%",
        justifyContent:'center',
        alignSelf: 'center',
    },
    titleBar:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        marginTop:30,
        width: 200,
        height:200,
        backgroundColor:colors.theme.white,
        borderRadius:100,
        overflow:"hidden",
        
    },
    infoContainer:{
        alignSelf:"center",
        alignItems: 'center',
        marginTop:10
    },
    statsContainer:{ 
        paddingTop:180,
        flexDirection:"row",
        
    },
    statsBox:{
        alignItems: 'center',
        flex:1
    }
})
