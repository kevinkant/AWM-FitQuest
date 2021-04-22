import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonBackButton, IonButtons } from '@ionic/react';
import React, { useState } from 'react';
import './Register.css';
import fqReg from "../../images/fqRegister.png"
import { useForm, Controller } from "react-hook-form";
//import { auth, signInWithGoogle, returnID } from '../../FirebaseConfig'


const Register: React.FC = () => {

    const [userName, setUserName] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [passwordCheck, setPasswordCheck] = useState<any>();


    let emailRegex = RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

    const check = () => {if (password !== passwordCheck) {
        return false
    }}

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


            <IonContent className="ion-padding"   fullscreen>

               
                
                <IonItem className="user-details">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput value={userName} onIonChange={e => setUserName(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem className="user-details">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem className="user-details">
                    <IonLabel position="floating">Confirm Password</IonLabel>
                    <IonInput type="password" value={passwordCheck} onIonChange={e => setPasswordCheck(e.detail.value!)}></IonInput>
                </IonItem>

                {check() ? <p>PASSWORDS DO NOT MATCH</p> : <p>PASSWORDS  MATCH!</p> }

                <IonButton expand="block" shape="round">Create your account!</IonButton>

            </IonContent>
        </IonPage>

    );

};


export default Register;