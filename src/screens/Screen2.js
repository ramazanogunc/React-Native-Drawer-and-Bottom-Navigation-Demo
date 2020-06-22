import React, { Component } from 'react';
import { Container, Body, Left, Right, Content, H1, Button, Header, Icon, Title, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Screen2 extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon type='Octicons' name='three-bars' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Scrren2 Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder >
                    <H1>Welcome to Screen2</H1>
                    <Button style={{ marginTop: 20 }} onPress={() => Actions.home()}>
                        <Text>Go back Home</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
