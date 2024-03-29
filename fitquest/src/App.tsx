import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { barbell, homeOutline, personCircleOutline, starOutline, informationOutline } from 'ionicons/icons';

//Pages imports
import Login from './pages/Login screen/Login'
import Home from './pages/Tabs/Home';
import Workouts from './pages/Tabs/Workouts';
import Profile from './pages/Tabs/Profile';
import Quests from './pages/Tabs/Quests'
import EditProfile from './pages/Profile/EditProfile'
import Strength from './pages/Workouts/Strength/Strength'
import Bodyweight from './pages/Workouts/Bodyweight/Bodyweight'
import Hiit from './pages/Workouts/Hiit/Hiit'
import ExerciseList from './pages/Workouts/Strength/ExerciseList';
import StrHistory from './pages/Workouts/Strength/StrHistory';
import BweHistory from './pages/Workouts/Bodyweight/BweHistory';
import Routines from './pages/Workouts/Strength/Routines';
import BodyExerciseList from './pages/Workouts/Bodyweight/BodyExerciseList';
import BodyRoutines from './pages/Workouts/Bodyweight/BodyRoutines';
import Register from './pages/Login screen/Register';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import HtExerciseList from './pages/Workouts/Hiit/HtExerciseList';
import HtRoutines from './pages/Workouts/Hiit/HtRoutines';
import HtHistory from './pages/Workouts/Hiit/HtHistory';




const App: React.FC = () => (
  
    <IonApp>

      {/* {!authenticated ? (
        <IonReactRouter>
          <Login />
        </IonReactRouter>
      ) : the rest} */}
      <IonReactRouter>

        <IonTabs>
          <IonRouterOutlet>

            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/Register">
              <Register />
            </Route>

            <Route exact path="/Home">
              <Home />
            </Route>

            <Route exact path="/Workouts">
              <Workouts />
            </Route>

            <Route path="/Profile">
              <EditProfile />
            </Route>

            <Route path="/Quests">
              <Quests />
            </Route>


            <Route exact path="/">
              <Redirect to="/Login" />
            </Route>


            <Route exact path="/EditProfile">
              <EditProfile />
            </Route>

            <Route exact path="/Strength">
              <Strength />
            </Route>

            <Route exact path="/StrHistory">
              <StrHistory />
            </Route>

            <Route exact path="/BweHistory">
              <BweHistory />
            </Route>

            <Route exact path="/Exerciselist">
              <ExerciseList />
            </Route>

            

            <Route exact path="/Routines">
              <Routines />
            </Route>

            <Route exact path="/Bodyweight">
              <Bodyweight />
            </Route>

            <Route exact path="/Bodyweightexerciselist">
              <BodyExerciseList />
            </Route>

            <Route exact path="/Bodyroutines">
              <BodyRoutines />
            </Route>

            <Route exact path="/Hiit">
              <Hiit />
            </Route>

            <Route exact path="/HiitHistory">
              <HtHistory />
            </Route>

            <Route exact path="/HiitRoutines">
              <HtRoutines />
            </Route>

            <Route exact path="/HiitList">
              <HtExerciseList />
            </Route>

          </IonRouterOutlet>



          <IonTabBar slot="bottom">

            {/* <IonTabButton tab="Login" href="/Login">
              <IonIcon icon={informationOutline} />
              <IonLabel>Login test</IonLabel>
            </IonTabButton> */}

            {/* <IonTabButton tab="Home" href="/Home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton> */}

      

            <IonTabButton tab="Workouts" href="/Workouts">
              <IonIcon icon={barbell} />
              <IonLabel>Workouts</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Quests" href="/Quests">
              <IonIcon icon={starOutline} />
              <IonLabel>Quests</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Profile" href="/EditProfile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>



          </IonTabBar>

        </IonTabs>

      </IonReactRouter>
    </IonApp>

);

export default App;
