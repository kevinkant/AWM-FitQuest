import React, { useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

export const Diet: React.FC = () => {
  return (<IonPage>
  <IonToolbar>
    <IonTitle>Title Only</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>Back Button</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonTitle size="small">Small Title above a Default Title</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>Default Title</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="secondary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Default Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="solid">
        <IonIcon slot="start" icon={personCircle} />
        Contact
      </IonButton>
    </IonButtons>
    <IonTitle>Solid Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton fill="solid" color="secondary">
        Help
        <IonIcon slot="end" icon={helpCircle} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="outline">
        <IonIcon slot="start" icon={star} />
        Star
      </IonButton>
    </IonButtons>
    <IonTitle>Outline Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton color="danger" fill="outline">
        Edit
        <IonIcon slot="end" icon={create} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>Account</IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">Edit</IonButton>
    </IonButtons>
    <IonTitle>Text Only Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton autoHide={false} />
    </IonButtons>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Left side menu toggle</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => { } }>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Right side menu toggle</IonTitle>
    <IonButtons slot="end">
      <IonMenuButton autoHide={false} />
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => { } }>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonSearchbar placeholder="Search Favorites" />
  </IonToolbar>

  <IonToolbar>
    <IonSegment value="all">
      <IonSegmentButton value="all">
          All
      </IonSegmentButton>
      <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
    </IonSegment>
  </IonToolbar>

  <IonToolbar color="secondary">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Secondary Toolbar</IonTitle>
  </IonToolbar>

  <IonToolbar color="dark">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Dark Toolbar</IonTitle>
  </IonToolbar>
</IonPage>);
}



export default Diet;


// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import './Diet.css';

// const Diet: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar color="primary">
//           <IonTitle>Diet</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Diet</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Diet;
