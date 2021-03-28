import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import { auth, signInWithGoogle, returnID } from '../../FirebaseConfig'
import firebase from 'firebase';
import { UserContext } from '../providers/UserProvider.jsx'


const Login: React.FC = () => {

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  // const currentUser = firebase.auth().currentUser?.uid

  // console.log(currentUser)
  
  
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
          <IonLabel position="floating">Username</IonLabel>
            <IonInput value={userName}  onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
          <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"  value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>

          <IonButton>Login</IonButton>

          
          <IonButton onClick={signInWithGoogle}>Sign-in with google</IonButton>
          <IonButton>Register</IonButton>

          


      </IonContent>
    </IonPage>
  );
};

export default Login;
