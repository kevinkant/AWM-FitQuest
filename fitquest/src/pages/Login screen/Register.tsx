import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonBackButton, IonButtons } from '@ionic/react';
import React,  { useState } from 'react';
//import { auth, signInWithGoogle, returnID } from '../../FirebaseConfig'


const Register: React.FC = () => {

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Login" />
                    </IonButtons>
                    Register
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