import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Quests.css';
import { auth, firestore } from '../../FirebaseConfig';

const Quests: React.FC = () => {

  const [achievements, setAchievements] = useState<Array<any>>([]);




  useEffect(() => {

    // let uid = auth.currentUser?.uid;

    //Array to store the incoming data 
    const achList: any[] = [];

    firestore.collection("Achievements")
      .orderBy("XP", "asc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", data);
          let data = doc.data()

          //Push the data to the array together with
          //document id to function as a key for the list, rest of the data is spread
          achList.push({ id: doc.id, ...data })

        });
        setAchievements(achList)

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

  }, [])






  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Quests</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quests</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {achievements.map(e => (
            <IonItem key={e.id}>
              <IonThumbnail slot="start">
                <img alt="achievement" src={e.Img} />
              </IonThumbnail>
              <IonLabel>{e.Name}
                <p>{e.Description}</p>
                <p>{e.XP}XP</p>
              </IonLabel>
            </IonItem>

          ))}



        </IonList>


      </IonContent>





    </IonPage>
  );
};

export default Quests;
