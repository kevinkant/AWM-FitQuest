import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonText, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import firebase, { signOut, auth } from '../../../FirebaseConfig'


const ExLog: React.FC = () => {

    let uid = auth.currentUser?.uid;

    const [reps, setReps] = useState<number>();
    const [weight, setWeight] = useState<number>();

    const [sets, setSets] = useState<Array<any>>([]);

    const addSet = () => {
        const newSet = {
            Repetitions: reps,
            Weight: weight
        }

        const newSets = [...sets, newSet]

        setSets(newSets)
    };

    const saveWorkout = () => {
        try {
            return (firebase.firestore().collection("Users").doc(uid).collection("Workout History").add({
                Weight: weight,
            }));
        } catch (error) {
            console.error('Error writing new message to database', error);
        }


    }

    return (

        <IonContent>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Exerciselist" />
                    </IonButtons>
                    Exercise log
                </IonToolbar>
            </IonHeader>

            <IonItem>
                <IonLabel position="floating">Repetitions</IonLabel>
                <IonInput type="number" value={reps} onIonChange={e => setReps(parseInt(e.detail.value!))}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Weight</IonLabel>
                <IonInput type="number" value={weight} onIonChange={e => setWeight(parseInt(e.detail.value!))}></IonInput>
            </IonItem>

            <IonButton onClick={() => {
                addSet()
            }}>Add set</IonButton>

            <IonItemDivider color="secondary">
                Sets completed
            </IonItemDivider>

            {}

            <IonButton >Complete workout</IonButton>




        </IonContent>
    )
}

export default ExLog;