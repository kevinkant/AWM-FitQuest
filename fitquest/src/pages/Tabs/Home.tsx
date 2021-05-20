import {  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
 import { auth } from '../../FirebaseConfig'
import React, { useEffect, useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
// import { useEffect } from 'react';



const Home: React.FC = () => {

  

  
  const [userName, setUserName] = useState<any>();

  useEffect(() => {

    let name = auth.currentUser?.displayName
     setUserName(name);

  }, [])

  


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

        Welcome {userName}

        

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
