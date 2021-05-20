//Paste this script in index.tsx to write a lot of data at once


import firebase from '../src/FirebaseConfig';




let arr = [
    {
        "Experience points": 100,
        "Name": "7 days",
        "Description": "Workout for 7 total days",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/7days.png?alt=media&token=a9a9687a-9241-4e71-a9d0-13a654d73977" 
    },
    {
        "Experience points": 100,
        "Name": "14 days",
        "Description": "Workout for 14 total days",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/14days.png?alt=media&token=aa486898-4f6b-4660-8dcd-3e55d85e2f2d"
    },
    {
        "Experience points": 100,
        "Name": "30 days",
        "Description": "Workout for 30 total days",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/30days.png?alt=media&token=3e23e89a-22dd-420d-9464-bba8b2e6806c"
    },
    {
        "Experience points": 200,
        "Name": "All-around",
        "Description": "Perform Strength, Bodyweight and HIIT exercises",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/AllAround.png?alt=media&token=42b031c2-e097-4043-a537-aefc4024fc03"
    },
    {
        "Experience points": 500,
        "Name": "1 Plate Squat",
        "Description": "Perform a squat of 60kg",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/Squat1.png?alt=media&token=ead609e2-5ce5-4be6-b61a-8e94c91a1951"
    },
    {
        "Experience points": 1000,
        "Name": "2 Plate Squat",
        "Description": "Perform a squat of 100kg",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/Squat2.png?alt=media&token=0fe40179-f88b-447d-b9e2-29366686d871"
    },
    {
        "Experience points": 1500,
        "Name": "3 Plate Squat",
        "Description": "Perform a squat of 140kg",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/Squat3.png?alt=media&token=a35728f1-af89-4eb5-903a-480d90e058fa"
    },
    {
        "Experience points": 500,
        "Name": "1 Plate Deadlift",
        "Description": "Perform a Deadlift of 60kg",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/Deadlift1.png?alt=media&token=2ea93a72-53c2-4112-a190-b37c8bfda113"
    },
    
    {
        "Experience points": 1000,
        "Name": "2 Plate Deadlift",
        "Description": "Perform a Deadlift of 100kg",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/Deadlift2.png?alt=media&token=a9d9ec8a-81fe-4b64-9324-d2587f81ee21"
    },
    {
        "Experience points": 1500,
        "Name": "3 Plate Deadlift",
        "Description": "Perform a Deadlift of 140kg",
        "Img": "https://firebasestorage.googleapis.com/v0/b/fitquest-af1d0.appspot.com/o/Deadlift3.png?alt=media&token=ea488502-daed-4ed4-a981-b9de489b746c"
    },
    
    

];

arr.forEach(async function (obj) {
    try {
        const docRef = await firebase.firestore().collection("Hiit").add({
            Name: obj.Name,
            Difficulty: obj.Difficulty,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});