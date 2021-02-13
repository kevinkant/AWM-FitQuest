import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Diet.css';

const Diet: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Diet</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This is the Diet page" />
      </IonContent>
    </IonPage>
  );
};

export default Diet;
