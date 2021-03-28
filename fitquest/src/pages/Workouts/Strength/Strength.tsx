import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import {firestore} from '../../../FirebaseConfig';
import React, { useState } from 'react';

// const data =  firebase.firestore().collection("Strength exercises").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });




const Strength: React.FC = () => {

    const [exercise, setExercise] = useState<String>();

    // let query = firestore
    //     .collection('Strength exercises')
    //     .orderBy('Name', 'asc')
    //     .limit(10) //testen if it shows up

    console.log(firestore.collection('Strength exercises').doc().get)

    return (
        <IonPage>

            {/*Back button config */}
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    Strength Training
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel></IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>


        </IonPage>
    )

}

export default Strength;