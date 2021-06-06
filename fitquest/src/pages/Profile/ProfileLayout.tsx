import { IonAvatar, IonContent, IonButton, IonProgressBar, IonText } from '@ionic/react';
import React from 'react';









const ProfileLayout: React.FC = () => {

    


    return (
        <IonContent>

            <IonAvatar  >
          
            </IonAvatar>
            <IonText class="ion-text-center"  >Welcome user</IonText>

            

            <IonProgressBar value={0.27}></IonProgressBar><br />

            <IonButton class="ion-text-center" color="primary" routerLink='/EditProfile' >Edit your profile</IonButton>

        </IonContent>
    );

};


export default ProfileLayout;