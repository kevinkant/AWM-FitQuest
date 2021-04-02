import React from 'react';


import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Diet.css';
import DietTracking from '../Diet/DietTracking';

const Diet: React.FC = () => {

  
  

  
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Diet</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Diet</IonTitle>
          </IonToolbar>
        </IonHeader>

        <DietTracking />

        
      </IonContent>

      
    </IonPage>
  );
};

export default Diet;
