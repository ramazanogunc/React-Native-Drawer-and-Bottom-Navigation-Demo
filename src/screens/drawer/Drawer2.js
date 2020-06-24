import React, { Component } from 'react';
import { Button, Icon, Right, Container,  Left, Body, Title, Content, H1 } from 'native-base';
import Header from '../../components/Header';
import { Actions } from 'react-native-router-flux';

export default class Drawer2 extends Component {
    render() {
        const headerLeft = <Left>
            <Button transparent onPress={this.onDrawerButtonClick}>
                <Icon type='Octicons' name='three-bars' />
            </Button>
        </Left>;

        return (
            <Container>
                <Header left={headerLeft} title='Drawer2'/>
                <Content padder>
                    <H1>Hello Drawer 2 screen</H1>
                </Content>
            </Container>
        )
    }

    onDrawerButtonClick = () => {
        Actions.drawerToggle();
    }
}
