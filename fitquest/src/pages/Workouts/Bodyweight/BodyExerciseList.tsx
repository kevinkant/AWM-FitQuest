import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonFab, IonFabButton, IonIcon, IonInput, IonModal } from '@ionic/react';
import { auth, firestore } from '../../../FirebaseConfig';
import React, { useEffect, useState } from 'react';
import { add } from 'ionicons/icons';



const BodyExerciseList: React.FC = () => {

    let uid = auth.currentUser?.uid;
    

    //Modal is used to add a new exercise to the user's database
    const [showModal, setShowModal] = useState(false);

    //State for the exercise list
    const [exercise, setExercise] = useState<Array<any>>([]);

    //State variables/functions to add a new exercise
    const [newName, setNewName] = useState<string>();
    const [newMuscleGroup, setNewMuscleGroup] = useState<string>();
    const [newDifficulty, setNewDifficulty] = useState<string>();


    //TODO use filter to query on muscle group
    const filter = "Muscle Group";

   
    //Effect hook to load the data only once
    useEffect(() => {

         //Array to store the incoming data 
         const exList: any[]= [];

         firestore.collection("Bodyweight exercises")
            .orderBy(`${filter}`, 'asc')
            .limit(10)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    //console.log(doc.id, " => ", data);
                    let data = doc.data()

                    //Push the data to the array together with
                    //document id to function as a key for the list and rest of the data is spread
                    exList.push({ id: doc.id, ...data })
                });
                setExercise(exList)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    
    }, [])


    /**
     * This function saves a new exercise to the User's personal database
     */
    function addExercise() {
        firestore.collection("Users").doc(uid).collection("Personal Bodyweight ExList").add({
            Name: newName,
            "Muscle Group": newMuscleGroup,
            Difficulty: newDifficulty
        })
        console.log("Exercise added")
    }



    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Bodyweight" />
                    </IonButtons>
                Bodyweight Exercises list
            </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    {exercise.map((el => (
                        <IonItem key ={el.id}>
                            <IonLabel>{el.Name}</IonLabel>
                            {el.Difficulty}
                        </IonItem>
                    )))}
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
                        <IonInput value={newName} placeholder="Exercise Name" onIonChange={e => setNewName(e.detail.value!)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput value={newMuscleGroup} placeholder="Muscle Group" onIonChange={e => setNewMuscleGroup(e.detail.value!)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput value={newDifficulty} placeholder="Difficulty" onIonChange={e => setNewDifficulty(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonContent>
            </IonModal>

        </IonPage>
    )


};

export default BodyExerciseList;