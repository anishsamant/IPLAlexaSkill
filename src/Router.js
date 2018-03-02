import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import TotalMatches from './Components/TotalMatches';
import AboutIPL from './Components/AboutIPL';
import SeasonWinner from './Components/SeasonWinner';
import Exit from './Components/Exit';
import Welcome from './Components/Welcome';
import Intents from './Components/Intents';

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="root" hideNavBar>
            <Scene key="main" navigationBarStyle={{ backgroundColor: '#2666AF'}} backButtonTintColor='white' >
                <Scene key="Home" component={Home} title="Alexa IPL Skill" initial />
                <Scene key="intents" component={Intents} title="Intents" />
                <Scene key="Welcome" component={Welcome} title="Welcome message" />
                <Scene key="aboutIPL" component={AboutIPL} title="About IPL" />
                <Scene key="totalMatches" component={TotalMatches} title="Total Matches" />
                <Scene key="SeasonWinner" component={SeasonWinner} title="Season Winner" />
                <Scene key="Exit" component={Exit} title="Exit message" />
            </Scene>

        </Scene>
      </Router>
    );
};

export default RouterComponent;
