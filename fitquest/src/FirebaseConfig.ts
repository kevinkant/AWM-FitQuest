import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

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

// firebase.auth();

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => firebase.auth().signOut();
export const returnID = () => firebase.auth().currentUser;
  

export default firebase;

// export async function loginUser(username: string, password: string) {

// }