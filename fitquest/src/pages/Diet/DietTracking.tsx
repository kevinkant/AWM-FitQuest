import { IonContent, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react'
import firebase, {firestore} from '../../FirebaseConfig'



const DietTracking: React.FC = () => {

    let uid = firebase.auth().currentUser?.uid;

    
    let date = new Date();
    const [food, setFood] = useState<string>();
    const [calories, setCalories] = useState<Number>();
    

    /**
     * This function saves a new exercise to the User's personal database
     */
     function addDietTrack() {
        firestore.collection("Users").doc(uid).collection("Diet Tracking").add({
            Food: food ,
            Calories: calories,
            Timestamp: date.toDateString()
        })
        
    }


    return (
        <IonContent>

            <IonSegment scrollable={true} onIonChange={e => console.log('Segment selected', e.detail.value)}>

                <IonSegmentButton  value="tracking">
                    <IonLabel>Tracking</IonLabel>
                </IonSegmentButton>

                <IonSegmentButton value="history">
                    <IonLabel>History</IonLabel>
                </IonSegmentButton>

            </IonSegment>

        </IonContent>
    )
}

export default DietTracking;