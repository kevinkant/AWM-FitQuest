import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { auth, signInWithGoogle, returnID } from '../../FirebaseConfig'


const Register: React.FC = () => {

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle >Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Register</IonTitle>
                    </IonToolbar>
                </IonHeader>

            </IonContent>
        </IonPage>

    );

};


export default Register;