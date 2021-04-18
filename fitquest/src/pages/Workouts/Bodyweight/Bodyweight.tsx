import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonToolbar } from '@ionic/react';
//import { firestore } from '../../../FirebaseConfig';
import React from 'react';
import { pin } from 'ionicons/icons';



const Bodyweight: React.FC = () => {

    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    Bodyweight Training
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Bodyweight Exercise List</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/Bodyweightexerciselist">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This list contains default exercises.
                        You can also add your own exercise
                    </IonCardContent>
                </IonCard>



                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Workout routines</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/Bodyroutines">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Check your workout routines
                    </IonCardContent>
                </IonCard>



                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Workout history</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Keep track of your exercise history!
                    </IonCardContent>
                </IonCard>



            </IonContent>
        </IonPage>
    )

}

export default Bodyweight;