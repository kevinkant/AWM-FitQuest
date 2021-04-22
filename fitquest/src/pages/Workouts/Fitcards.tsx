import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { } from 'ionicons/icons';
import React from 'react';
import strength from "../../images/strength.jpg"
import bwe from "../../images/bwe.jpg"
import hiit from "../../images/hiit.jpg"




const Fitcards: React.FC = () => {
    return (

        <IonContent>

            <IonCard routerLink="/Strength">
                <img alt="Strength training" src={strength}></img>
                <IonCardHeader>
                    <IonCardTitle>Strength Training</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Use weights to increase your strength and muscle size
                </IonCardContent>
            </IonCard>

            <IonCard routerLink="/Bodyweight">
                <img alt="Body" src={bwe}></img>
                <IonCardHeader>
                    <IonCardTitle>Bodyweight Training</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Use your own bodyweight to increase your strength and muscle size. No weights needed!
                </IonCardContent>
            </IonCard>

            <IonCard routerLink="/Cardio">
                <img alt="People doing cardio" src={hiit}></img>
                <IonCardHeader>
                    <IonCardTitle>HIIT Training</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Use High Intensity Interval Training to improve your cardiovascular health. Be prepared!
                </IonCardContent>
            </IonCard>



        </IonContent>

    );
};

export default Fitcards;
