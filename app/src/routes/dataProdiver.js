import React, {createContext,useState, useContext} from  'react'
import * as ImageManipulator from 'expo-image-manipulator';
import * as firebase from 'firebase'

export const DataContext = createContext();
export const api = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const bucketName = 'images'
    const [imageUrl, setImageUrl] = useState(null)
    const db = firebase.firestore()
    const storage = firebase.storage()
  
    return(
        <DataContext.Provider
        value={{

            imageUrl,
            setImageUrl,
            createTree: async (tree) => {
                try {
                    await db.collection("Trees").add(tree)
                }
                catch(e){
                    console.log(e)
                    setError(e)
                }
            },
            getTrees: async () => {
                try {
                return await db.collection('Trees').get()
                }
                catch(e){
                    console.log(e)
                }
            },
            getTreesById: async (userId) => {
                try {
                     return db.collection('Trees').where('userID','==', userId).get()     
                          }
                catch(e){
                    console.log(e)
                }
            },
            saveImage: async (file) => {
                try {
                    
                    const compressedImage = await ImageManipulator.manipulateAsync(
                    file.uri,
                    [],
                    { compress: .5, format: ImageManipulator.SaveFormat.JPEG }
                    );
                    const blob = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                    resolve(xhr.response);
                    };
                    xhr.onerror = function (e) {
                    console.log(e);
                    reject(new TypeError("Network request failed"));
                    };
                    xhr.responseType = "blob";
                    xhr.open("GET", compressedImage.uri, true);
                    xhr.send(null);
                }); 
                    const fileName =compressedImage.uri.split('/').pop()
                    const storageRef = storage.ref(`${bucketName}`)
                    const imageRef = storageRef.child(fileName)
                    await imageRef.put(blob)

                    //return this promise and then set the downloadURL outside of the function
                    //This may also solve my issue with the image urls in the camera component 
                    //because the idea behind react is that th component should try to manage its own state
                    return imageRef.getDownloadURL()
                }
                catch(e){
                    console.log(e)
                }
            },

            getUserById: async (email,password) => {
                try {
                    await firebase.auth().createUserWithEmailAndPassword(email,password)
                }
                catch(e){
                    console.log(e)
                }
            },
        }}

        >
            {children}
        </DataContext.Provider>
    )
}