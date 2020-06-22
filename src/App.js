import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './screens/Home';
import Screen2 from './screens/Screen2';


const App = () => (
  <Router>
     <Scene key = "root">
        <Scene key = "home" component = {Home} title = "Home" initial = {true} hideNavBar />
        <Scene key = "screen2" component = {Screen2} title = "Screen2" hideNavBar />
     </Scene>
  </Router>
)
export default App;