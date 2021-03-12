import { IonAvatar, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        <IonText>Hello world</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
