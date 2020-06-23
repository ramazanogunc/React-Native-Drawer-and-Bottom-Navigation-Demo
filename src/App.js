import React from 'react';
import { Router, Scene, Drawer as FluxDrawer, Modal } from 'react-native-router-flux';
import Home from './screens/Home';
import DrawerMenu from './components/DrawerMenu';
import Drawer1 from './screens/drawer/Drawer1';
import Drawer2 from './screens/drawer/Drawer2';
import Bottom1 from './screens/bottom/Bottom1';
import Bottom2 from './screens/bottom/Bottom2';

const App = () => (
   <Router>
      <Scene key="root">
         <Scene key="home" component={Home} initial={true} hideNavBar />
         <Scene key="bottom" hideNavBar >
            <Scene key="bottom1" component={Bottom1} initial={true}  hideNavBar />
            <Scene key="bottom2" component={Bottom2} hideNavBar />
         </Scene>
         <Scene key="drawer" hideNavBar >
            <FluxDrawer drawerWidth={250} contentComponent={DrawerMenu}>
               <Scene key="DrawerMenu" >
                  <Scene key="drawer1" initial={true} component={Drawer1} hideNavBar />
                  <Scene key="drawer2" component={Drawer2} hideNavBar />
               </Scene>
            </FluxDrawer>
         </Scene>
      </Scene>
   </Router>
)
export default App;