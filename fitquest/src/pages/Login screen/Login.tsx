import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import { signInWithGoogle, signInWithEmail } from '../../FirebaseConfig'
import fqLogin from "../../images/fqLogin.png"




const Login: React.FC = () => {

  const [userName, setUserName] = useState<any>();
  const [password, setPassword] = useState<any>();


  const login = async () => {
    await signInWithEmail(userName, password)
  }


  //TODO: Email en password setup

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("please use correct stuff")

  }

  const userDetailsHandler = () => {
    

  }

  return (
    <IonPage >

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle >Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-margin-custom" fullscreen>

        <img className="img-fqlogin" width="360px" height="200px" src={fqLogin} alt="Logo of FitQuest" />

        <form onSubmit={submitHandler}>
          <IonItem className="user-details">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={userName} onIonChange={e => setUserName(e.detail.value)}></IonInput>
          </IonItem>

          <IonItem className="user-details">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton  shape="round" expand="block" onClick={login}>Login</IonButton>
        </form>



        


        <IonButton shape="round" expand="block" color="danger" onClick={signInWithGoogle}>Sign-in with google</IonButton>

        <IonButton shape="round" expand="block" color="" routerLink="/Register">Register</IonButton>






      </IonContent>
    </IonPage>
  );
};

export default Login;
