import React, {createContext,useState, useContext, useEffect} from  'react'
import * as firebase from 'firebase'


export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [authLoading,setAuthLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error,setError] = useState(null)
    useEffect(() => {
    setAuthLoading(true)
      firebase.auth().onAuthStateChanged(user => {
          setUser(user)
          setAuthLoading(false)
        })  
    
    }, [])

    

    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            error,
            setError,
            authLoading,
            login: async (email,password) => {
                try {
                    await firebase.auth().signInWithEmailAndPassword(email,password)
                }
                catch(e){
                    console.log(e)
                    setError(e)
                }
            },
            signOut: async () => {
                try {
                    await firebase.auth().signOut()
                }
                catch(e){
                    console.log(e)
                    setError(e)
                }
            },
            register: async (email,password) => {
                try {
                    await firebase.auth().createUserWithEmailAndPassword(email,password)
                }
                catch(e){
                    console.log(e)
                    setError(e)
                }
            },
            updateUserProfile: async (userProfile) => {
                try {
                    await firebase.auth().updateProfile(userProfile).then(() => console.log("Update Successfull"))
                }
                catch(e){
                    console.log(e)
                    setError(e)
                }
            },
            resetPassword: async (email) => {
                try {
                    return await firebase.auth().sendPasswordResetEmail(email)
                }
                catch(e){
                    console.log(e)
                    setError(e)
                }
            },
        }}

        >
            {children}
        </AuthContext.Provider>
    )
}