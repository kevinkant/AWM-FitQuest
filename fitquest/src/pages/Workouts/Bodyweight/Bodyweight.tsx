import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';



const Bodyweight: React.FC = () => {
    return (
        <IonPage>

            {/*Back button config */}
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    Bodyweight Training
                </IonToolbar>
            </IonHeader>

            
        </IonPage>
    )

}

export default Bodyweight;