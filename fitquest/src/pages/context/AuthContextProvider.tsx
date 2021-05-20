import React, {Component, createContext, useState} from 'react'
import firebase from '../../FirebaseConfig'

export const UserContext = createContext<any>( {user: null})

export const AuthContextProvider: React.FC = (props) => {

    const [auth, setAuth] = useState<any>({
        authenticated: false,
        user: null,
        userInfo: null,
        
    })

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("user is logged in")
          setAuth({
              authenticated: true,
              user: user,
              userInfo: null,
          })
        } else {
          // No user is signed in.
          console.log("no user is logged in")
          setAuth({
            authenticated: false,
            user: null,
            userInfo: null,
        })
        }
      });


    return  (<div></div>)
    
}



export default AuthContextProvider


