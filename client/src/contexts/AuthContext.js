import React, { useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'
 //c
const AuthContext = React.createContext()
 
export function useAuth(){
   return useContext(AuthContext)
}
 
export function AuthProvider({children}) {
   const [currentUser, setCurrentUser] = useState()
 
   function signup(email,password){
        
       return auth.createUserWithEmailAndPassword(email,password)
   }
 
   function login(email,password){
    return auth.signInWithEmailAndPassword(email,password)
}

function logout(){
    return auth.signOut()
}
function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
}


   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged (user =>{
           setCurrentUser(user)
       })
       return unsubscribe
   }, [])
    const value = {
       currentUser,
       login,
       signup,
       logout, 
       resetPassword
   }
 
   return (
  <AuthContext.Provider value ={value}>
   {children}
  </AuthContext.Provider>
 )
}
