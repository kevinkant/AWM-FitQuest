import { IonAvatar, IonContent, IonButton, IonProgressBar } from '@ionic/react';
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

            {/* <label>Level </label>
            <progress id="xp" value="82" max="100"> 32% </progress> */}

            {/* <IonProgressBar value={0.27}></IonProgressBar><br /> */}

            <IonButton class="ion-text-center" color="primary" routerLink='/EditProfile' >Edit your profile</IonButton>

        </IonContent>
    );

};


export default ProfileLayout;