import React, {createContext,useState, useContext, useEffect} from  'react'
import * as firebase from 'firebase'

export const DataContext = createContext();
export const api = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error,setError] = useState(null)
    const db = firebase.firestore()
  
    return(
        <DataContext.Provider
        value={{
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
                    await db.collection('Trees').get().then((snapshot) => snapshot.docs.forEach( doc => doc.data()))
                }
                catch(e){
                    console.log(e)
                }
            },
            getTreeById: async (userId) => {
                try {
                    await db.collection('Trees').where('userId','==', userId).then((snapshot) => snapshot.docs.forEach( doc => doc.data()))
                }
                catch(e){
                    console.log(e)
                }
            },
            getTreeById: async () => {
                try {
                    await firebase.auth().signOut()
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