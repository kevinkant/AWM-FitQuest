import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Workouts.css';
import Fitcards from '../Workouts/Fitcards'

const Workouts: React.FC = () => {


  


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Workouts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Workouts</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Fitcards />
        
        
      
        
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
