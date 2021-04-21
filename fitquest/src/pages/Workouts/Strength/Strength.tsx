import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, IonItem, IonLabel, IonButton, IonCard, IonCardContent, IonIcon } from '@ionic/react';
import React from 'react';
import { pin } from 'ionicons/icons';





const Strength: React.FC = () => {





    return (
        <IonPage>


            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    Strength Training
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Strength Exercise List</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/Exerciselist">View</IonButton>
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
                        <IonButton fill="outline" slot="end" routerLink="/Routines">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Check your workout routines
                    </IonCardContent>
                </IonCard>



                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Workout history</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/StrHistory">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Keep track of your exercise history!
                    </IonCardContent>
                </IonCard>



            </IonContent>
        </IonPage>
    )

}

export default Strength;