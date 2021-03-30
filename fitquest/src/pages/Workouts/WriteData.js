//Paste this script in index.tsx to write a lot of data at once


import firebase from '../src/FirebaseConfig';




let arr = [
     {"Name":"Wall Push-up","Muscle Group":"Chest","Difficulty":"Beginner"},
     {"Name":"Incline Push-up","Muscle Group":"Chest","Difficulty":"Beginner"},
     {"Name":"Kneeling Push-up","Muscle Group":"Chest","Difficulty":"Beginner"},
     {"Name":"Close Grip Push-up","Muscle Group":"Triceps","Difficulty":"Novice"},
     {"Name":"Decline Push-up","Muscle Group":"Chest","Difficulty":"Novice"},
     {"Name":"Dips","Muscle Group":"Triceps","Difficulty":"Novice"},
     {"Name":"Pull-up","Muscle Group":"Upper body","Difficulty":"Intermediate"},
     {"Name":"Plyo Push-up","Muscle Group":"Chest","Difficulty":"Hard"},
     {"Name":"L-Sit","Muscle Group":"Core","Difficulty":"Expert"},
     {"Name":"Pistol Squat","Muscle Group":"Legs","Difficulty":"Expert"},
     {"Name":"Handstand Push-up","Muscle Group":"Chest","Difficulty":"Expert"},

  ];

  arr.forEach(async function (obj) {
    try {
          const docRef = await firebase.firestore().collection("Bodyweight exercises").add({
              Name: obj.Name,
              'Muscle Group': obj['Muscle Group'],
              Difficulty: obj.Difficulty
          });
          console.log("Document written with ID: ", docRef.id);
      } catch (error) {
          console.error("Error adding document: ", error);
      }
  });