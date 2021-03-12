import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Workouts.css';
import { WorkoutCards } from "../Workouts/Cards"
import firebase from '../../FirebaseConfig'

const Workouts: React.FC = () => {


  


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Workouts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Workouts</IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <IonButton>Add new workout</IonButton>
        
        <WorkoutCards />
        
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
