import { IonContent, IonBackButton, IonItem, IonInput, IonHeader, IonItemDivider, IonPage, IonToolbar, IonButtons, IonLabel, IonSelect, IonSelectOption, IonDatetime, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import firebase from '../../FirebaseConfig'

export const EditProfile: React.FC = () => {

    const [text, setText] = useState<string>();
    const [gender, setGender] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();


    //Save stats to firestore
    //Test database
    function saveStats() {
        return firebase.firestore().collection('test').add({
            name: text,
            birthday: selectedDate,
            gender: gender,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(function (error) {
            console.error('Error writing new message to database', error);
        });

    };

    return (
        <IonPage>

            {/*Back button config */}
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/profile" />
                    </IonButtons>
                    Edit Your Profile
                </IonToolbar>
            </IonHeader>

            <IonContent>


                {/*Personal information input */}
                <IonItemDivider color="tertiary">Personal information</IonItemDivider>

                <IonItem>
                    <IonInput value={text} placeholder="Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel>Gender</IonLabel>
                    <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
                        <IonSelectOption value="female">Female</IonSelectOption>
                        <IonSelectOption value="male">Male</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonLabel>Birthdate</IonLabel>
                    <IonDatetime displayFormat="MMM DD, YYYY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                </IonItem>

                <IonItemDivider color="tertiary">Fitness health information</IonItemDivider>

                
                <IonItem>
                <IonLabel>Height</IonLabel>
                    <IonInput type="number" value={height} placeholder="Enter height in cm" onIonChange={e => setHeight(parseInt(e.detail.value!, 10))}></IonInput>
                </IonItem>

                <IonItem>
                    
                <IonLabel>Weight</IonLabel>
                    <IonInput type="number" value={weight} placeholder="Enter weight in kg" onIonChange={e => setWeight(parseInt(e.detail.value!, 10))}></IonInput>
                </IonItem>


                <IonButton onClick={saveStats}>Save</IonButton>
            </IonContent>
        </IonPage>
    );

};


export default EditProfile;