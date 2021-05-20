import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import { pin } from 'ionicons/icons';
import React from 'react';



const Cardio: React.FC = () => {
    return (
        <IonPage>

            {/*Back button config */}
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    High Intensity Interval Training
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Hiit Exercise List</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/HiitList">View</IonButton>
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
                        <IonButton fill="outline" slot="end" routerLink="/HiitRoutines">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Check your HIIT workout routines
                    </IonCardContent>
                </IonCard>



                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>Workout history</IonLabel>
                        <IonButton fill="outline" slot="end" routerLink="/HiitHistory">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Keep track of your exercise history!
                    </IonCardContent>
                </IonCard>

            </IonContent>




        </IonPage>
    )

}

export default Cardio;