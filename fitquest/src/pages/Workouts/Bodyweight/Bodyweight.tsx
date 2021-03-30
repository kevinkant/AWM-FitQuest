import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import {firestore} from '../../../FirebaseConfig';
import React, {useState} from 'react';



const Bodyweight: React.FC = () => {

    let [exercise, setExercise] = useState<String>();

    // let query = firestore
    //     .collection('Strength exercises')
    //     .orderBy('Name', 'asc')
    //     .limit(10) //testen if it shows up

    // console.log(firestore.collection('Strength exercises').doc().get);
    // console.log(query);

    const filter = "Muscle Group";

    /**
     * Gets all exercises in the database
     * Default sort by name
     * User can adjust the sorting by choosing out of filter list
     * That selection gets passed through as a interpolated string
     */
     const getExercises = () => {
        firestore.collection("Bodyweight exercises")
        .orderBy(`${filter}`, 'asc')
        .limit(10)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                // console.log(doc.data().Name)
                
                //console.log(doc.data()["Muscle Group"])
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    console.log(getExercises())
    
    return (
        <IonPage>

            {/*Back button config */}
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    Bodyweight Training
                </IonToolbar>
            </IonHeader>

            
        </IonPage>
    )

}

export default Bodyweight;