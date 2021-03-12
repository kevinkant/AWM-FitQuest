import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import { signInWithGoogle } from '../../FirebaseConfig'


const Login: React.FC = () => {

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  
  //TODO: Email en password setup

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
            <IonInput value={userName} placeholder="Username" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonInput type="password"  value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>

          <IonButton>Login</IonButton>
          <IonButton onClick={signInWithGoogle}>Sign-in with google</IonButton>
          <IonButton>Register</IonButton>

          


      </IonContent>
    </IonPage>
  );
};

export default Login;
