import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonToolbar } from '@ionic/react';
//import {auth, firestore} from '../../../FirebaseConfig';
import React from 'react';



const HtRoutines: React.FC = () => {

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Hiit" />
                    </IonButtons>
                    HIIT Routines
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonText>
                    Work in Progress
                </IonText>





            </IonContent>

            {/* Verzamel oefeningen in een kaart(of iets anderes) dan elke oefening, naar zelfde modal van exerciselist */}

        </IonPage>
    )
};

export default HtRoutines;