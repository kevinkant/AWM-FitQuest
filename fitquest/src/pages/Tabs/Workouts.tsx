import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Workouts.css';
import { WorkoutCards } from "../../components/Cards"

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

          <WorkoutCards />

      </IonContent>

    </IonPage>
  );
};

export default Workouts;
