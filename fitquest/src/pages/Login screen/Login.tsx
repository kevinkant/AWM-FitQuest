import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import {signInWithGoogle, signInWithEmail } from '../../FirebaseConfig'




const Login: React.FC = () => {

  const [userName, setUserName] = useState<any>();
  const [password, setPassword] = useState<any>();

 
const login = async () => {
  await signInWithEmail(userName, password)
}
  
  
  //TODO: Email en password setup

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle >Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
            <IonInput value={userName}  onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
          <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"  value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>

          <IonButton onClick={login}>Login</IonButton>

          
          <IonButton onClick={signInWithGoogle}>Sign-in with google</IonButton>
          
          <IonButton routerLink="/Register">Register</IonButton>

          


      </IonContent>
    </IonPage>
  );
};

export default Login;
