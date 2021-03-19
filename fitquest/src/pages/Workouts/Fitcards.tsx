import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { } from 'ionicons/icons';
import React from 'react';


const Fitcards: React.FC = () => {
    return (

        <IonContent>

            <IonCard href="/Strength">
                <img alt="Strength training" src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltac27430d208cd09a/5de0ba409320eb62564f29c5/RL-Cover-Weights.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=592&height=380"></img>
                <IonCardHeader>
                    <IonCardTitle>Strength Training</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Use weights to increase your strength and muscle size
                </IonCardContent>
            </IonCard>

            <IonCard href="/Bodyweight">
                <img alt="Body" src="https://upl.stack.com/wp-content/uploads/2018/05/12193027/The-20-Minute-No-Excuses-Navy-SEAL-Bodyweight-Workout-stack.jpg"></img>
                <IonCardHeader>
                    <IonCardTitle>Bodyweight Training</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Use your own bodyweight to increase your strength and muscle size. No weights needed!
                </IonCardContent>
            </IonCard>

            <IonCard href="/Cardio">
                <img alt="People doing cardio" src="https://lmimirror3pvr.azureedge.net/static/media/12419/3ba321af-9388-46d2-91d5-7b86a67b8c45/hiit_960x540-v2.jpg"></img>
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
