import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonButton, IonInput, IonToast } from '@ionic/react';
import { firestore, auth } from '../../../FirebaseConfig';
import React, { useEffect, useState } from 'react';
import { add } from 'ionicons/icons';




const ExerciseList: React.FC = () => {

    let uid = auth.currentUser?.uid;

    //Modal is used to add a new exercise to the user's database
    const [showModal, setShowModal] = useState(false);
    //Toast to confirm exercise has been added to the database
    const [showToast, setShowToast] = useState(false);

    //State for the exercise list
    const [exercise, setExercise] = useState<Array<any>>([]);

    //State variables/functions to add a new exercise
    const [name, setName] = useState<string>();
    const [muscleGroup, setMuscleGroup] = useState<string>();
    const [material, setMaterial] = useState<string>();


    //TODO use filter to query on muscle group
    const filter = "Muscle Group";



    //Effect hook to load the data only once
    useEffect(() => {

        //Array to store the incoming data 
        const exList: any[] = [];

        firestore.collection("Strength exercises")
            .orderBy(`${filter}`, 'asc')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    //console.log(doc.id, " => ", data);
                    let data = doc.data()

                    //Push the data to the array together with
                    //document id to function as a key for the list, rest of the data is spread
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
        firestore.collection("Users").doc(uid).collection("Personal ExList").add({
            Name: name,
            "Muscle Group": muscleGroup,
            Material: material
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
                    Strength Exercises list
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    {exercise.map((el => (
                        <IonItem key={el.id} href="/Exlog">
                            <IonLabel>{el.Name}</IonLabel>
                            {el["Muscle Group"]}
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
                            setShowToast(true)
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
                        <IonInput value={material} placeholder="Material" onIonChange={e => setMaterial(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonContent>
            </IonModal>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="The exercise has been added."
                duration={500}
            />

        




        </IonPage >
    )
};

export default ExerciseList;

