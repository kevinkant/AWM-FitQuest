import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonFab, IonFabButton, IonIcon, IonInput, IonModal } from '@ionic/react';
import {auth, firestore} from '../../../FirebaseConfig';
import React, { useState } from 'react';
import { add } from 'ionicons/icons';


const BodyExerciseList: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    //const [exercise, setExercise] = useState<String>();
    const [name, setName] = useState<string>();
    const [muscleGroup, setMuscleGroup] = useState<string>();
    const [difficulty, setDifficulty] = useState<string>();

    let uid = auth.currentUser?.uid;

    const filter = "Muscle Group";

    /**
     * @description Gets all exercises in the database
     * 
     * Default sort by name
     * 
     * User can adjust the sorting by choosing out of filter list
     * 
     * That selection gets passed through as a interpolated string
     */
    const getExercises = () => {
        firestore.collection("Bodyweight exercises")
            .orderBy(`${filter}`, 'asc')
            .limit(10)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    //console.log(doc.id, " => ", doc.data());
                    // console.log(doc.data().Name)

                    //console.log(doc.data()["Muscle Group"])
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    };

    console.log(getExercises())

    /**
     * This function saves a new exercise to the User's personal database
     */
    function addExercise() {
        firestore.collection("Users").doc(uid).collection("Personal Bodyweight ExList").add({
            Name: name,
            "Muscle Group": muscleGroup,
            Difficulty: difficulty
        })
        console.log("Exercise added")
    }



    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Strength" />
                    </IonButtons>
                    Bodyweight Exercises list
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>de</IonLabel>
                    </IonItem>

                </IonList>
            </IonContent>


            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={() => setShowModal(true)}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>

            <IonModal isOpen={showModal} >

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton fill="solid" color="success" size="small" onClick={() => {
                            addExercise()
                            setShowModal(false)
                            //TODO  functie om de lijst te refreshen
                        }}>Add exercise</IonButton>

                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton fill="solid" color="danger" onClick={() => setShowModal(false)}>Go back</IonButton>
                    </IonButtons>
                </IonToolbar>


                <IonContent>
                    <IonItem>
                        <IonInput value={name} placeholder="Exercise Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput value={muscleGroup} placeholder="Muscle Group" onIonChange={e => setMuscleGroup(e.detail.value!)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput value={difficulty} placeholder="Difficulty" onIonChange={e => setDifficulty(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonContent>
            </IonModal>

        </IonPage>
    )

    
};

export default BodyExerciseList;