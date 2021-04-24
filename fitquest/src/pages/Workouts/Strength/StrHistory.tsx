import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonText, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../../FirebaseConfig';



const StrHistory: React.FC = () => {

    let uid = auth.currentUser?.uid;

    const [exLog, setExLog] = useState<Array<any>>([]);

    //Effect hook to load the data from firstore
    useEffect(() => {

        //Array to store the incoming data 
        const historyList: any[] = [];

        firestore.collection(`Users/${uid}/Strength Workout History`)
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
    let test: any = {}

    for (let el of exLog) {
        const date = el.Time.toDate().toDateString() //Time is saved as a timestamp in firestore doc, hence the conversions

        //This will group the exercises by date
        //First a check if the date key exists, if it doesn't, create the key; if it does, push the array as the value.
        if (test[date]) {
            test[date].push(el)
        } else {
            test[date] = [el]
        }
    }

    /**
     * This array is used
     */
    const workouts = Object.keys(test).map((date) => {
        return {
            date,
            Workouts: test[date]
        };
    });

    return (
        <IonPage>


            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Strength" />
                    </IonButtons>
                    History log
                </IonToolbar>
            </IonHeader>

            {/**
             * Print exercises to list
             */}


            {/* TODO Custom accordion? https://gist.github.com/aaronksaunders/f72c3ec11145af1ed23f4ee4d3c4dd43 */}
            <IonContent>

                {workouts.map((exDate => (
                    <IonList key={exDate.date}>
                        <IonListHeader color="medium"><IonText color="dark">{exDate.date}</IonText> </IonListHeader>

                        {exDate.Workouts.map(((exDetails: any) => (
                            <IonItem key={exDetails.id}>


                                <IonLabel>
                                    <IonText>
                                        <b>
                                            <u>
                                                {exDetails.Name}
                                            </u>
                                        </b>
                                    </IonText>

                                    {exDetails.Workout.map((el: any, index: any) => (

                                        <h3 key={index} >{el.Sets}: {el.Repetitions} reps @ {el.Weight} kg </h3>
                                    ))}


                                </IonLabel>


                                {/* <IonButton fill="outline" slot="end" >Edit</IonButton> */}

                            </IonItem>
                        )))}
                    </IonList>
                )))}
            </IonContent>
        </IonPage>
    )
}

export default StrHistory