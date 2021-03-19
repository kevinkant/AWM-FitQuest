import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';



const Cardio: React.FC = () => {
    return (
        <IonPage>

            {/*Back button config */}
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Workouts" />
                    </IonButtons>
                    High Intensity Interval Training
                </IonToolbar>
            </IonHeader>


        </IonPage>
    )

}

export default Cardio;