import React, { Component } from 'react';
import { View, Container,  Left, Body, Title, Content, H1, Icon, Button, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from '../../components/Header';

export default class Drawer1 extends Component {
    render() {
        const headerLeft = <Left>
            <Button transparent onPress={this.onDrawerButtonClick}>
                <Icon type='Octicons' name='three-bars' />
            </Button>
        </Left>;
        
        return (
            <Container>
                <Header left={headerLeft} title='Drawer1'/>
                <Content padder>
                    <H1>Hello Drawer 1 screen</H1>
                </Content>
            </Container>
        )
    }

    onDrawerButtonClick = () => {
        Actions.drawerToggle();
    }
}
