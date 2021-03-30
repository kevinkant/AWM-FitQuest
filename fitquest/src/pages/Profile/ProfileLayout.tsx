import {  IonAvatar, IonContent, IonButton } from '@ionic/react';
import React from 'react';

// import firebase from '../../FirebaseConfig';




// let arr = [
//      {"Name":"Wall Push-up","Muscle Group":"Chest","Difficulty":"Beginner"},
//      {"Name":"Incline Push-up","Muscle Group":"Chest","Difficulty":"Beginner"},
//      {"Name":"Kneeling Push-up","Muscle Group":"Chest","Difficulty":"Beginner"},
//      {"Name":"Close Grip Push-up","Muscle Group":"Triceps","Difficulty":"Novice"},
//      {"Name":"Decline Push-up","Muscle Group":"Chest","Difficulty":"Novice"},
//      {"Name":"Dips","Muscle Group":"Triceps","Difficulty":"Novice"},
//      {"Name":"Pull-up","Muscle Group":"Upper body","Difficulty":"Intermediate"},
//      {"Name":"Plyo Push-up","Muscle Group":"Chest","Difficulty":"Hard"},
//      {"Name":"L-Sit","Muscle Group":"Core","Difficulty":"Expert"},
//      {"Name":"Pistol Squat","Muscle Group":"Legs","Difficulty":"Expert"},
//      {"Name":"Handstand Push-up","Muscle Group":"Chest","Difficulty":"Expert"},

//   ];

//   arr.forEach(async function (obj) {
//     try {
//           const docRef = await firebase.firestore().collection("Bodyweight exercises").add({
//               Name: obj.Name,
//               'Muscle Group': obj['Muscle Group'],
//               Difficulty: obj.Difficulty
//           });
//           console.log("Document written with ID: ", docRef.id);
//       } catch (error) {
//           console.error("Error adding document: ", error);
//       }
//   });



 const ProfileLayout: React.FC = () => {

    return (
        <IonContent>

            <IonAvatar >
                <img alt="Profile" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            {/* <IonText class="ion-text-center"  >Welcome user</IonText> */}

            <IonButton class="ion-text-center" color="primary" href='/EditProfile' >Edit your profile</IonButton>

        </IonContent>
    );

};


export default ProfileLayout;