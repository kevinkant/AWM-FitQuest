import {  IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import firebase, { auth } from '../../FirebaseConfig'
import { useEffect } from 'react';



const Home: React.FC = () => {

  let name = auth.currentUser?.displayName

  


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>FitQuest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">FitQuest</IonTitle>
          </IonToolbar>
        </IonHeader>

        

        <IonText >Welcome {name}</IonText>

      </IonContent>
    </IonPage>
  );
};

export default Home;
