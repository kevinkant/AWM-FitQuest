import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import { cfaSignInGoogle, cfaSignOut } from 'capacitor-firebase-auth';



const config = {
    apiKey: "AIzaSyD2bqv3v5wGkX4zmOxUtEOQaA3f09ZhmX4",
    authDomain: "fitquest-af1d0.firebaseapp.com",
    databaseURL: "https://fitquest-af1d0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitquest-af1d0",
    storageBucket: "fitquest-af1d0.appspot.com",
    messagingSenderId: "354090927577",
    appId: "1:354090927577:web:02192734e96b75e236c5c8",
    measurementId: "G-27E42CFCE9"
};

firebase.initializeApp(config);


//Enable offline persistence of the databases
firebase.firestore().enablePersistence()
    .catch((err) => {
        if (err.code === 'failed-precondition') {
        } else if (err.code === 'unimplemented') {
            console.log("Current browser doesn't support offline data")
        }
    });


//Function aliases
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();


/**
 * This function makes use of the capacitor-firebase-auth plugin to handle authentication on the native layer
 * https://github.com/baumblatt/capacitor-firebase-auth
 */
export const signInWithGoogle = () => {
    cfaSignInGoogle().subscribe((user) =>
        //This is the initial docu that is automatically added to the collection when the user signs in with google. If the doc doesn't exists (aka user logs in for the first time)
        //a new docuement with the user's uid as doc ID is created, with 2 initial values(name and email)
        firestore.collection("Users").doc(user?.uid).set({
            //   Name: user.displayName,
            //   Email: user.email
        }, { merge: true }) //Set to merge so doc doesn't get overwritten

        // console.log(`name: ${user.displayName} and email: ${user.email}`)
    );
}

/**
 * This function makes use of the capacitor-firebase-auth plugin to handle authentication on the native layer
 * https://github.com/baumblatt/capacitor-firebase-auth
 */
export const signOut = () => {
    cfaSignOut().subscribe()
    console.log("User logged out")
};

export const signInWithEmail = async (username: string, password: string) => {

    try 
    {
        const login = await auth.signInWithEmailAndPassword(username, password)
        console.log("user is logged in")
        console.log(login)
        return true
    } 
    catch (error) 
    {
        console.log(error)
        return false
    }
}

export const signUpWithEmail = async (username: string, password: string) => {
    
}

export const returnID = () => firebase.auth().currentUser?.uid;


export default firebase;

// export async function loginUser(username: string, password: string) {

// }