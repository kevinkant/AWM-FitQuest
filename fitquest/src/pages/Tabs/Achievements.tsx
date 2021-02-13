import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Achievements.css';

const Achievements: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Achievements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Achievements</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This is the Achievements page" />
      </IonContent>
    </IonPage>
  );
};

export default Achievements;
