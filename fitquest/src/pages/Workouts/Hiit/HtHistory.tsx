import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonText, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../../FirebaseConfig';
// import './BweHistory.css'


const HtHistory: React.FC = () => {

    let uid = auth.currentUser?.uid;

    const [exLog, setExLog] = useState<Array<any>>([]);

    //Effect hook to load the data from firstore
    useEffect(() => {

        //Array to store the incoming data 
        const historyList: any[] = [];

        firestore.collection(`Users/${uid}/Hiit Workout History`)
            .orderBy("Time", "desc")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    //console.log(doc.id, " => ", data);
                    let data = doc.data()

                    //Push the data to the array together with
                    //document id to function as a key for the list, rest of the data is spread
                    historyList.push({ id: doc.id, ...data })

                });
                setExLog(historyList)

            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }, [uid])

    /**
     * TODO write comments
     */
    let dataLog: any = {}

    for (let el of exLog) {
        const date = el.Time.toDate().toDateString() //Time is saved as a timestamp in firestore doc, hence the conversions

        //This will group the exercises by date
        //First a check if the date key exists, if it doesn't, create the key; if it does, push the array as the value.
        if (dataLog[date]) {
            dataLog[date].push(el)
        } else {
            dataLog[date] = [el]
        }
    }



    /**
     * This array is used
     */
    const workouts = Object.keys(dataLog).map((date) => {
        return {
            date,
            Workouts: dataLog[date]
        };
    });



    return (
        <IonPage>

            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Hiit" />
                    </IonButtons>
                HIIT Exercises History Log
            </IonToolbar>
            </IonHeader>


            <IonContent>

                {workouts.map((exDate => (
                    <IonList key={exDate.date}>
                        <IonListHeader color="medium"><IonText className="list-date" color="dark">{exDate.date} </IonText></IonListHeader>

                        <details>
                            <summary>View your workouts</summary>

                            {exDate.Workouts.map(((exDetails: any) => (
                                <IonItem key={exDetails.id}>

                                    <IonLabel>
                                        <IonText><b><u>{exDetails.Name}</u></b></IonText>

                                        {exDetails.Workout.map((el: any, index: any) => (

                                            <h3 key={index}>{el.Sets}: {el.Repetitions} reps</h3>
                                        ))}


                                    </IonLabel>




                                </IonItem>
                            )))}
                        </details>
                    </IonList>
                )))}
            </IonContent>
        </IonPage>
    )
}

export default HtHistory;