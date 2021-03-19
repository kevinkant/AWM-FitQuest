import {  IonAvatar, IonContent, IonButton } from '@ionic/react';
import React from 'react';





 const ProfileLayout: React.FC = () => {

    return (
        <IonContent>

            <IonAvatar >
                <img alt="Profile" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            {/* <IonText class="ion-text-center"  >Welcome user</IonText> */}

            <IonButton class="ion-text-center" color="primary" href='/EditProfile' >Edit your profile</IonButton>

        </IonContent>
    );

};


export default ProfileLayout;