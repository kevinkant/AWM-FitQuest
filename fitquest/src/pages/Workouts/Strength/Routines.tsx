import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar } from '@ionic/react';
//import {firestore} from '../../../FirebaseConfig';
import React from 'react';


const Routines: React.FC = () => {

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Strength" />
                    </IonButtons>
                    History log
                </IonToolbar>
            </IonHeader>

            {/* Verzamel oefeningen in een kaart(of iets anderes) dan elke oefening, naar zelfde modal van exerciselist */}

        </IonPage>
    )
};

export default Routines;