import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonText } from '@ionic/react';

import './Profile.css';

const Profile: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="profile-welcome">
          <IonText >Welcome user</IonText>
          <IonAvatar >
            <img alt="Profile" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        </div>



      </IonContent>
    </IonPage>
  );
};

export default Profile;
