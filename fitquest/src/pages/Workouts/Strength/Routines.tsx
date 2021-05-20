import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonText, IonToolbar } from '@ionic/react';
import { pin } from 'ionicons/icons';
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
                    Strength routines
                </IonToolbar>
            </IonHeader>

            {/* Verzamel oefeningen in een kaart(of iets anderes) dan elke oefening, naar zelfde modal van exerciselist */}

            <IonContent>
                <IonText>
                    Work in Progress
                </IonText>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Push routine</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/Exerciselist">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        The Push routine focusses on exercises where you "push the weight away from your body" like the Bench press, Overhead Press, and more.
                        This routine contains 5 default exercises
                    </IonCardContent>
                </IonCard>


            </IonContent>

        </IonPage>
    )
};

export default Routines;