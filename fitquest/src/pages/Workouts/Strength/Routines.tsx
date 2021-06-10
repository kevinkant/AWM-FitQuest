import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import firebase, { firestore, auth } from '../../../FirebaseConfig';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { deleteDatabase } from 'workbox-core/_private';


const Routines: React.FC = () => {

    let uid = auth.currentUser?.uid;

    //State for the exercise list
    const [exercise, setExercise] = useState<Array<any>>([]);

    //This modal is used to save a workout to the user's database
    const [showModalSets, setShowModalSets] = useState(false);



    //This is used to filter the routines
    const [routine, setRoutine] = useState<string>('Legs');


    //Effect hook to load the data from firstore
    useEffect(() => {

        let exList: any[] = [];

        let url = "http://localhost:8081/routine/StrengthRoutines/";

        let username = "fitnessAppRoutineService"
        let pswd = "fitnessAppRoutineServicePWD"

        axios.get(url, {
            params: {},
            headers: {},
            withCredentials: true,
            auth: {
                username: username,
                password: pswd
            }
        })
        .then(res => {
            exList = res.data
            setExercise(exList)
            console.log(
                exList.map(e => console.log(e.exercises.map((el: any) => (
                    console.log(el.name)
                )
                )))
            )
        })
       



    }, [])

    //State variable used to get the exercise name from the clicked element in the list
    const [exName, setExname] = useState<string>();

    //These state variables are used to add reps and weights and use those 2 variables to store them into the sets array with the addSet() method below
    const [reps, setReps] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [sets, setSets] = useState<Array<any>>([]);

    const [count, setCount] = useState<number>(1);

    /**
     * This updates the set array state of the workout
     * 
     * newSet is an object which has 2 keys: repetitions and Weight. When the user adds a set, it's added to completedSets, with the rest of the newSet spread into
     * completedSets.
     */
    const addSet = () => {
        const newSet = {
            Sets: `Set ${count}`,
            Repetitions: reps,
            Weight: weight
        };

        const completedSets = [...sets, newSet]

        setSets(completedSets)
        setCount(count + 1)
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
                Time: firebase.firestore.Timestamp.now()
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
                    Strength routines
                </IonToolbar>
            </IonHeader>





            {/* <IonItem>
                <IonLabel color="secondary">Select Routine</IonLabel>
                <IonSelect value={routine} okText="Okay" cancelText="Dismiss" onIonChange={e => setRoutine(e.detail.value)}>


                    <IonSelectOption value="Push">Push</IonSelectOption>
                    <IonSelectOption value="Pull">Pull</IonSelectOption>
                    <IonSelectOption value="Legs">Legs</IonSelectOption>
                </IonSelect>
            </IonItem> */}





            {exercise.map((e => (
                <IonContent>
                    {e.name}

                    <IonList>
                        {e.exercises.map(((ex: any, index: any) => (
                            <IonItem key={index} onClick={() => {
                                setExname(ex)
                                setShowModalSets(true)
                            }}>
                                
                                 <IonLabel key={ex.id}>
                                 {ex.name}
                             </IonLabel>

                            </IonItem>
                        )))}
                    </IonList>


                </IonContent>
            )))}

            {/**
             * This modal shows a new screen to add completed sets (with repetitions and weight) 
             * */}
            <IonModal isOpen={showModalSets} >

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton fill="solid" color="success" size="small" onClick={() => {
                            saveWorkout()
                            setSets([])
                            setReps(parseInt(""))
                            setWeight(parseInt(""))
                            setCount(1)
                            setShowModalSets(false)
                            //setShowToast(true)
                        }}>Complete Workout</IonButton>

                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton fill="solid" color="danger" onClick={() => {
                            //Empty Sets array and clear reps
                            setSets([])
                            setReps(parseInt(""))
                            setWeight(parseInt(""))
                            setCount(1)
                            setShowModalSets(false)
                        }}>Go back</IonButton>
                    </IonButtons>
                </IonToolbar>


                <IonContent>
                    <IonItem>
                        <IonInput
                            value={reps}
                            required={true}
                            type="number"
                            placeholder="Repetitions"
                            onIonChange={e => setReps(parseInt(e.detail.value!))}>
                        </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput
                            value={weight}
                            required={true}
                            type="number"
                            placeholder="Weight (kg)"
                            onIonChange={e => setWeight(parseInt(e.detail.value!))}>
                        </IonInput>
                    </IonItem>
                    <IonButton onClick={() => {
                        setReps(parseInt(""))
                        setWeight(parseInt(""))
                        addSet()
                    }}>Add Set</IonButton>
                    <IonText>
                        {sets.map((set) => (
                            <p key={set.Sets}>{set.Sets}: {set.Repetitions} reps - {set.Weight} kg</p>
                        ))}
                    </IonText>

                </IonContent>
            </IonModal>

        </IonPage >
    )
};

export default Routines;