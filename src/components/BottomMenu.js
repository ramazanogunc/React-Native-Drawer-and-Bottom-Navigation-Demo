import React, { Component } from 'react';
import { Footer, FooterTab } from 'native-base';
import Menu from './Menu';
import { Actions } from 'react-native-router-flux';


class BottomMenu extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Menu icon="home" title="Bottom1" clickMenu={() => (Actions.bottom1())} />
          <Menu icon="menu" title="Bottom2" clickMenu={() => (Actions.bottom2())} />

        </FooterTab>
      </Footer>
    );
  }
}


export default BottomMenu;