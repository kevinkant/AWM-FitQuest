import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonFab, IonFabButton, IonIcon, IonInput, IonModal, IonToast, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { add } from 'ionicons/icons';
import axios from 'axios'

// import './BodyWeightList.css'



const HtExerciseList: React.FC = () => {





    //This modal is used to add a new exercise to the user's database
    const [showModalAdd, setShowModalAdd] = useState(false);

    //This modal is used to save a workout to the user's database
    const [showModalSets, setShowModalSets] = useState(false);

    //Toast to confirm exercise has been added to the database
    const [showToast, setShowToast] = useState(false);

    //State for the exercise list
    const [exercise, setExercise] = useState<Array<any>>([]);

    

  


    //Effect hook to load the data from the firestore collection
    useEffect(() => {

        let exList: any[] = [];

        let url = "http://localhost:8080/exercise/HiitExercises";

        let username = "fitnessAppExerciseService"
        let pswd = "fitnessAppExerciseServicePWD"

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
        })
       

    }, [])

    


    //State variables/functions to add a new exercise
    const [name, setNewName] = useState<string>();
    const [difficulty, setNewDifficulty] = useState<string>();

    /**
     * This function saves a new exercise to the User's personal database
     */
    function addExercise() {

        //POST request

        let postUrl = "http://localhost:8080/exercise/addHiitExercise";

        let username = "fitnessAppExerciseService"
        let pswd = "fitnessAppExerciseServicePWD"


        axios.post(postUrl,
            {
                name,
                difficulty,
            },
            {
                params: {},
                headers: {},
                withCredentials: true,
                auth: {
                    username: username,
                    password: pswd
                },

            })
            .then(res => (console.log(res)))
     
    }

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



             {/**
              * * Print array to list
             */}
            <IonContent>
                <IonList>
                    {exercise.map((el => (
                        <IonItem key={el.id} onClick={() => {
                            setExname(el.name)
                            setShowModalSets(true)
                        }}>
                            <IonLabel>{el.name}</IonLabel>
                            {el.difficulty}
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
                            //TODO  functie om de lijst te refreshen
                        }}>Add exercise</IonButton>

                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton 
                        fill="solid" 
                        color="danger" 
                        onClick={() => setShowModalAdd(false)}>Go back</IonButton>
                    </IonButtons>
                </IonToolbar>


                <IonContent>
                    <IonItem>
                        <IonInput 
                        value={name} 
                        placeholder="Exercise Name" 
                        onIonChange={e => setNewName(e.detail.value!)}></IonInput>
                    </IonItem>


                    <IonItem>
                        <IonInput 
                        value={difficulty} 
                        placeholder="Difficulty" 
                        onIonChange={e => setNewDifficulty(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonContent>
            </IonModal>

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
                        setShowModalSets(false)}}>Go back</IonButton>
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


            {/**
              * This toast confirms that the exercise has been added
              */}
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="The exercise has been added."
                duration={500}
            />

        </IonPage>
    )


};

export default HtExerciseList;