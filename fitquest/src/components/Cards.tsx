import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';


export const WorkoutCards: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CardExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonCard>
            
          <IonCardHeader>
          <IonCardTitle>Strength Training</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
        </IonCard>

        <IonCard>
            
          <IonCardHeader>
          <IonCardTitle >Bodyweight Training</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
        </IonCard>

        <IonCard>
            
          <IonCardHeader>
          <IonCardTitle>High Intensity Interval Training</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
        </IonCard>

       

        
      </IonContent>
    </IonPage>
  );
};
