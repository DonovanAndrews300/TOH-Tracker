import React, {createContext,useState, useContext, useEffect} from  'react'
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
                    await db.collection('Trees').get().then(snapshot => snapshot.docs.forEach(doc => doc.data()))
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
                    xhr.open("GET", file.uri, true);
                    xhr.send(null);
                });
                    const fileName =file.uri.split('/').pop()
                    const storageRef = storage.ref(`${bucketName}`)
                    const imageRef = storageRef.child(fileName)
                    await imageRef.put(blob)

                    
                    imageRef.getDownloadURL().then((url) =>{
                            if(!imageUrl){
                            setImageUrl([url])
                            return
                            }
                            if(imageUrl){
                            setImageUrl((imageUrl) => imageUrl.concat([url]))
                            
                          
                        } 
                        })
                    
                    
            
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