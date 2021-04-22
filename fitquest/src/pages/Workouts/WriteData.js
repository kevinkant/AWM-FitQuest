//Paste this script in index.tsx to write a lot of data at once


import firebase from '../src/FirebaseConfig';




let arr = [{
        "Name": "Legs",
        "Exercises": [
            "Squat",
            "Romanian Deadlifts",
            "Leg Press",
            "Lying Leg Curls"
        ],
        
    },
    

];

arr.forEach(async function (obj) {
    try {
        const docRef = await firebase.firestore().collection("Strength routines").add({
            Name: obj.Name,
            Exercises: obj.Exercises,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});