import { IonContent, IonBackButton, IonItem, IonInput, IonHeader, IonItemDivider, IonPage, IonToolbar, IonButtons, IonLabel, IonSelect, IonSelectOption, IonDatetime, IonButton } from '@ionic/react';
import React, { useContext, useState } from 'react';
import firebase, { firestore, signOut, auth } from '../../FirebaseConfig'
import { UserContext } from '../providers/UserProvider.jsx'




export const EditProfile: React.FC = () => {

    const user = useContext(UserContext);

    // const { uid } = user

    const [text, setText] = useState<string>();
    const [gender, setGender] = useState<string>();
    const [goal, setGoal] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();

    

    //console.log(firebase.auth().currentUser?.uid)
    console.log('---------------------------------')
    console.log(user)



    //Save stats to firestore
    //Test database
    async function saveStats() {
        try {
            return firebase.firestore().collection("Users").doc().set({
                Name: text,
                Birthday: selectedDate,
                Gender: gender,
                Height: height,
                Weight: weight,
            });
        } catch (error) {
            console.error('Error writing new message to database', error);
        }

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


                <IonButton onClick={saveStats} href="/Profile">Save</IonButton>


                {/*Sign out of the app and return to the Login screen*/}
                <IonButton onClick={signOut} href="/Login">Save</IonButton>
            </IonContent>
        </IonPage>
    );

};


export default EditProfile;