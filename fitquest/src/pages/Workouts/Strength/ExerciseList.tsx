import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonButton, IonInput, IonToast } from '@ionic/react';
import firebase, { firestore, auth } from '../../../FirebaseConfig';
import React, { useEffect, useState } from 'react';
import { add } from 'ionicons/icons';




const ExerciseList: React.FC = (props) => {

    let uid = auth.currentUser?.uid;
    let date = new Date();



    //This modal is used to add a new exercise to the user's database
    const [showModalAdd, setShowModalAdd] = useState(false);

    //This modal is used to save a workout to the user's database
    const [showModalSets, setShowModalSets] = useState(false);

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



    //Effect hook to load the data from firstore
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
    };


    //State variable used to get the exercise name from the clicked element in the list
    const [exName, setExname] = useState<string>();

    //These state variables are used to add reps and weights and use those 2 variables to store them into the sets array with the addSet() method below
    const [reps, setReps] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [sets, setSets] = useState<Array<any>>([]);

    /**
     * This updates the set array state of the workout
     * 
     * newSet is an object which has 2 keys: repetitions and Weight. When the user adds a set, it's added to completedSets, with the rest of the newSet spread into
     * completedSets.
     */
    const addSet = () => {
        const newSet = {

            Repetitions: reps,
            Weight: weight
        };

        const completedSets = [...sets, newSet]

        setSets(completedSets)
    };


    /**
    * This function saves a new workout to the users personal database
    * 
    * It is added to the database with the selected exercise, an array which contains the repetitions and weight and the date the exercise was performed
    */
    const saveWorkout = () => {
        try {
            return (firebase.firestore().collection("Users").doc(uid).collection("Strength Workout History").add({
                Name: exName,
                Workout: sets,
                Time: date.toDateString()
            }));
        } catch (error) {
            console.error('Error writing new message to database', error);
        };
    };



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
                        <IonItem key={el.id} onClick={() => {
                            setExname(el.Name)
                            setShowModalSets(true)
                        }}>
                            <IonLabel>{el.Name}</IonLabel>
                            {el["Muscle Group"]}
                        </IonItem>
                    )))}
                </IonList>
            </IonContent>


            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={() => setShowModalAdd(true)}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>

            <IonModal isOpen={showModalAdd} >

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton fill="solid" color="success" size="small" onClick={() => {
                            addExercise()
                            setShowModalAdd(false)
                            setShowToast(true)
                        }}>Add exercise</IonButton>

                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton fill="solid" color="danger" onClick={() => setShowModalAdd(false)}>Go back</IonButton>
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

            {/**
             * This modal show a new screen to add completed sets (with repetitions and weight) 
             * */}
            <IonModal isOpen={showModalSets} >

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton fill="solid" color="success" size="small" onClick={() => {
                            saveWorkout()
                            setShowModalSets(false)
                            //setShowToast(true)
                        }}>Complete Workout</IonButton>

                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton fill="solid" color="danger" onClick={() => setShowModalSets(false)}>Go back</IonButton>
                    </IonButtons>
                </IonToolbar>


                <IonContent>
                    <IonItem>
                        <IonInput value={reps} placeholder="Repetitions" onIonChange={e => setReps(parseInt(e.detail.value!))}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput value={weight} placeholder="Weight (kg)" onIonChange={e => setWeight(parseInt(e.detail.value!))}></IonInput>
                    </IonItem>
                </IonContent>

                <IonButton onClick={() => { addSet() }}>Add Set</IonButton>
            </IonModal>

            {/**
              * This toast confirms that the exercise has been added
              */}
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

