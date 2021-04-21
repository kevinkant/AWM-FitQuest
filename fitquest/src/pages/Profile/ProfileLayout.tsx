import {  IonAvatar, IonContent, IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { auth } from '../../FirebaseConfig';








 const ProfileLayout: React.FC = () => {

    const [profilePic, setProfilepic] = useState<any>();

     
     useEffect(() => {
        setProfilepic(auth.currentUser?.photoURL)
     }, [])

  

    return (
        <IonContent>

            <IonAvatar  >
                <img alt="Profile" src={`${profilePic}`} />
            </IonAvatar>
            {/* <IonText class="ion-text-center"  >Welcome user</IonText> */}

            <IonButton class="ion-text-center" color="primary" routerLink='/EditProfile' >Edit your profile</IonButton>

        </IonContent>
    );

};


export default ProfileLayout;