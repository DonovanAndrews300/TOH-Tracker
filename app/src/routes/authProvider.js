import React, {createContext,useState, useContext, useEffect} from  'react'
import * as firebase from 'firebase'

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => setUser(user))  
    }, [])

    

    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            error,
            setError,
            login: async (email,password) => {
                try {
                    await firebase.auth().signInWithEmailAndPassword(email,password)
                }
                catch(e){
                    setError(e)
                }
            },
            signOut: async () => {
                try {
                    await firebase.auth().signOut()
                }
                catch(e){
                    console.log(e)
                }
            },
            register: async (email,password) => {
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
        </AuthContext.Provider>
    )
}