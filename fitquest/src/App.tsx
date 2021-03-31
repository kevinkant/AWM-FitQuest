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
import { barbell, restaurantOutline, homeOutline, personCircleOutline, starOutline, informationOutline } from 'ionicons/icons';
import Login from './pages/Login screen/Login'
import Home from './pages/Tabs/Home';
import Workouts from './pages/Tabs/Workouts';
import Profile from './pages/Tabs/Profile';
import Achievements from './pages/Tabs/Achievements'
import Diet from './pages/Tabs/Diet'
import EditProfile from './pages/Profile/EditProfile'
import Strength from './pages/Workouts/Strength/Strength'
import Bodyweight from './pages/Workouts/Bodyweight/Bodyweight'
import Cardio from './pages/Workouts/Hiit/Hiit'
import ExerciseList from './pages/Workouts/Strength/ExerciseList';
import Routines from './pages/Workouts/Strength/Routines';


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
import BodyExerciseList from './pages/Workouts/Bodyweight/BodyExerciseList';
import BodyRoutines from './pages/Workouts/Bodyweight/BodyRoutines';


const App: React.FC = () => (
  
    <IonApp>
      <IonReactRouter>

        <IonTabs>
          <IonRouterOutlet>

            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/Home">
              <Home />
            </Route>

            <Route exact path="/Workouts">
              <Workouts />
            </Route>

            <Route path="/Profile">
              <Profile />
            </Route>

            <Route path="/Achievements">
              <Achievements />
            </Route>

            <Route path="/Diet">
              <Diet />
            </Route>

            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>


            <Route exact path="/EditProfile">
              <EditProfile />
            </Route>

            <Route exact path="/Strength">
              <Strength />
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

            <Route exact path="/Cardio">
              <Cardio />
            </Route>

          </IonRouterOutlet>



          <IonTabBar slot="bottom">

            <IonTabButton tab="Login" href="/Login">
              <IonIcon icon={informationOutline} />
              <IonLabel>Login test</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Home" href="/Home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Diet" href="/Diet">
              <IonIcon icon={restaurantOutline} />
              <IonLabel>Diet</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Workouts" href="/Workouts">
              <IonIcon icon={barbell} />
              <IonLabel>Workouts</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Achievements" href="/Achievements">
              <IonIcon icon={starOutline} />
              <IonLabel>Achievements</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Profile" href="/Profile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>



          </IonTabBar>

        </IonTabs>

      </IonReactRouter>
    </IonApp>

);

export default App;
