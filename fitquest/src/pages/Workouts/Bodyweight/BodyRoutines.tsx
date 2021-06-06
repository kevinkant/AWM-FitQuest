import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/react';
import firebase, { auth, firestore } from '../../../FirebaseConfig';
import React, { useEffect, useState } from 'react';


const BodyRoutines: React.FC = () => {

    let uid = auth.currentUser?.uid;

    //State for the exercise list
    const [exercise, setExercise] = useState<Array<any>>([]);

    //This modal is used to save a workout to the user's database
    const [showModalSets, setShowModalSets] = useState(false);



    //This is used to filter the routines
    const [routine, setRoutine] = useState<string>('Full Body');

    useEffect(() => {

        //Array to store the incoming data 
        const exList: any[] = [];


        firestore.collection("Bodyweight routines")
            .where("Name", '==', `${routine}`)
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


    }, [routine])

    //State variable used to get the exercise name from the clicked element in the list
    const [exName, setExname] = useState<string>();

    //These state variables are used to add reps and weights and use those 2 variables to store them into the sets array with the addSet() method below
    const [reps, setReps] = useState<number>();
    //const [weight, setWeight] = useState<number>();
    const [sets, setSets] = useState<Array<any>>([]);
    const [count, setCount] = useState<number>(1);

    /**
     * This updates the set array state of the workout
     * 
     * newSet is an object which has 1 keys: repetitions. When the user adds a set, it's added to completedSets, with the rest of the newSet spread into
     * completedSets.
     */
    const addSet = () => {
        const newSet = {
            Sets: `Set ${count}`,
            Repetitions: reps,
            //Weight: weight
        }

        const completedSets = [...sets, newSet]

        setSets(completedSets)
        setCount(count + 1)
    };


    /**
    * This function saves a new bodyweight workout to the users personal database
    * 
    * It is added to the database with the selected exercise, an array which contains the repetitions and the date the exercise was performed
    */
    const saveWorkout = () => {
        try {
            return (firebase.firestore().collection("Users").doc(uid).collection("Bodyweight Workout History").add({
                Name: exName,
                Workout: sets,
                Time: firebase.firestore.Timestamp.now()
            }));
        } catch (error) {
            console.error('Error writing new message to database', error);
        }


    }



    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Bodyweight" />
                    </IonButtons>
                    History log
                </IonToolbar>
            </IonHeader>

            <IonItem>
                <IonLabel>Select Routine</IonLabel>
                <IonSelect value={routine} okText="Okay" cancelText="Dismiss" onIonChange={e => setRoutine(e.detail.value)}>


                    <IonSelectOption value="Full Body">Full Body</IonSelectOption>
                    <IonSelectOption value="Upper body routine">Upper body routine</IonSelectOption>
                </IonSelect>
            </IonItem>

            {exercise.map((e => (
                <IonContent>

                    <IonList>
                        {e.Exercises.map(((ex: any, index: any) => (
                            <IonItem key={index} onClick={() => {
                                setExname(ex)
                                setShowModalSets(true)
                            }}>
                                <IonLabel key={index}>
                                    {ex}
                                </IonLabel>

                            </IonItem>
                        )))}
                    </IonList>
                </IonContent>
            )))}

            {/**
             * This modal show a new screen to add completed sets (with amount of repetitions)
             * */}
            <IonModal backdropDismiss={false} cssClass='my-custom-class' isOpen={showModalSets} >

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton fill="solid" color="success" size="small" onClick={() => {
                            saveWorkout()
                            setSets([])
                            setReps(parseInt(""))
                            setCount(1)
                            setShowModalSets(false)
                            //setShowToast(true)
                        }}>Complete Workout</IonButton>

                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton
                            fill="solid"
                            color="danger"
                            onClick={() => {
                                setSets([])
                                setReps(parseInt(""))
                                setShowModalSets(false)
                            }}>Go back</IonButton>
                    </IonButtons>
                </IonToolbar>


                <IonContent>

                    <IonItem>
                        <IonInput
                            type="number"
                            value={reps}
                            placeholder="Repetitions"
                            onIonChange={e => setReps(parseInt(e.detail.value!))}></IonInput>
                    </IonItem>

                    <IonButton
                        onClick={() => {
                            setReps(parseInt(""))
                            addSet()
                        }}>Add Set</IonButton>
                    <IonText>
                        {sets.map((set) => (
                            <p key={set.Sets}>{set.Sets}: {set.Repetitions} reps</p>
                        ))}
                    </IonText>
                </IonContent>


            </IonModal>



        </IonPage>
    )
};

export default BodyRoutines;