import { IonContent, IonBackButton, IonItem, IonInput, IonHeader, IonItemDivider, IonPage, IonToolbar, IonButtons, IonLabel, IonSelect, IonSelectOption, IonDatetime, IonButton, IonAlert, IonRouterLink, IonList } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import firebase, { signOut, auth, firestore } from '../../FirebaseConfig'
import './EditProfile.css'
//import { UserContext } from '../providers/UserProvider'





export const EditProfile: React.FC = () => {

    //const user = useContext(UserContext);

    const [text, setText] = useState<string>();
    const [gender, setGender] = useState<string>();
    //const [goal, setGoal] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();

    const [usrDetails, setUsrDetails] = useState<Array<any>>([]);
    const [a, setA] = useState<string>();


    const [showAlert1, setShowAlert1] = useState(false);

    //Get the uid from the logged-in user
    //TODO implement this with context or redux

    let uid = firebase.auth().currentUser?.uid;


    useEffect(() => {

        //Array to store the incoming data 
        const detailList: any[] = [];

        firestore.collection("Users").doc(uid)
            .onSnapshot((doc) => {
                detailList.push(doc.data())
                setUsrDetails(detailList)
            })

    }, [uid])


    // console.log(usrDetails.map((e: any) =>
    //     console.log(e.Name)))


    // usrDetails.map(
    //     (e: any) => setText(e.Birthday))







    /**
     * Saves the stats into the database
     *
     *  uid is passed as a parameter to act as the document ID
     */
    function saveStats() {
        try {
            return (firebase.firestore().collection("Users").doc(uid).set({
                Name: text,
                Birthday: selectedDate,
                Gender: gender,
                Height: height,
                Weight: weight,
            }, { merge: true }));
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

            <IonContent >


                {/*Personal information input */}
                <IonItemDivider color="medium">Personal information</IonItemDivider>

                <div className="user-info">

                    {usrDetails.map((e: any) => (
                        <IonList>
                            <IonLabel className="profile-label">Name</IonLabel>
                            <IonItem>
                                <IonInput 
                                onFocus={(e) => e.target.placeholder = ""} 
                                onBlur={(event) => event.target.placeholder = e.Name}
                                 value={text} 
                                 placeholder={e.Name} 
                                 onIonChange={e => setText(e.detail.value!)}></IonInput>
                            </IonItem>


                            <IonLabel className="profile-label">Gender</IonLabel>
                            <IonItem>
                               
                                <IonSelect value={gender} placeholder={e.Gender} onIonChange={e => setGender(e.detail.value)}>
                                    <IonSelectOption value="female">Female</IonSelectOption>
                                    <IonSelectOption value="male">Male</IonSelectOption>
                                </IonSelect>
                            </IonItem>


                            <IonLabel className="profile-label">Birthdate</IonLabel>
                            <IonItem>
                                <IonDatetime displayFormat="MMM DD, YYYY" placeholder={e.Birthday} value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                            </IonItem>


                            <IonLabel className="profile-label">Height</IonLabel>
                            <IonItem>
                                <IonInput 
                                onFocus={(e) => e.target.placeholder = ""} 
                                onBlur={(event) => event.target.placeholder = e.Height}
                                type="number" value={height} 
                                placeholder={e.Height} 
                                onIonChange={e => setHeight(parseInt(e.detail.value!, 10))}>
                                </IonInput>
                            </IonItem>

                            <IonLabel className="profile-label">Weight</IonLabel>
                            <IonItem>
                                <IonInput 
                                onFocus={(e) => e.target.placeholder = ""}  
                                onBlur={(event) => event.target.placeholder = e.Weight}
                                type="number" value={weight} 
                                placeholder={e.Weight} onIonChange={e => setWeight(parseInt(e.detail.value!, 10))}>
                                </IonInput>
                            </IonItem>
                        </IonList>

                    ))}




                    {/* <IonItemDivider color="tertiary">Fitness health information</IonItemDivider> */}
                </div>


                {/*Save the stats and return to the user's profile */}
                <IonButton expand="block" onClick={() => saveStats()} routerLink="/Profile">Save</IonButton>


                {/*Sign out of the app and return to the Login screen */}
                <IonButton expand="block" onClick={signOut} routerLink="/Login">Sign out</IonButton>




            </IonContent>
        </IonPage>
    );

};


export default EditProfile;