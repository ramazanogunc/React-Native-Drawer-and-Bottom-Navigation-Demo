import React, { Component } from 'react';
import { Button, Icon, Right, Container, Header, Left, Body, Title, Content, H1 } from 'native-base';

export default class Drawer2 extends Component {
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
                        <Title>Drawer2</Title>
                    </Body>
                    <Right />
                </Header>
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
