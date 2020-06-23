import React, { Component } from 'react';
import { View, Container, Header, Left, Body, Title, Content, H1, Icon, Button, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Drawer1 extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.onDrawerButtonClick}>
                        <Icon name='bars' type='FontAwesome'/>
                        </Button>
                        
                    </Left>
                    <Body>
                        <Title>Drawer1</Title>
                    </Body>
                    <Right />
                </Header>
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
