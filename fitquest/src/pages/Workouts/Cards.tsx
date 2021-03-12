import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
// import workoutInfo from './WorkoutInfo'

// function createCardInfo(workoutInfo: string) {
//   return 
// }


export const WorkoutCards: React.FC = () => {
  return (

    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Choose a workout form!</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>

      <IonCard>
        <IonCardHeader>
        <IonCardTitle>Strength Training</IonCardTitle>
          <IonCardSubtitle>Improve your strength by using (heavy) weights</IonCardSubtitle>
          
        </IonCardHeader>

        <IonCardContent>
          
          </IonCardContent>
      </IonCard>

      <IonCard>
          
        <IonCardHeader>
        <IonCardTitle >Bodyweight Training</IonCardTitle>
          <IonCardSubtitle>Improve your strength by using your own bodyweight</IonCardSubtitle>
          
        </IonCardHeader>

        <IonCardContent>
         
          </IonCardContent>
      </IonCard>

      <IonCard>
          
        <IonCardHeader>
        <IonCardTitle>High Intensity Interval Training</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          
        </IonCardHeader>

        <IonCardContent>
         A different form of cardio where you
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
); 

    
};


 