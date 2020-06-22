import React, { Component } from 'react'
import { Container, Button, Text, Toast, Header, Body, Title, Left, Right, Icon, Content, H1 } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Home extends Component {
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
                        <Title>Home Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder >
                    <H1>Welcome to Home screen</H1>
                    <Button style={{ marginTop: 20 }} onPress={() => Actions.screen2()}>
                        <Text>Go to Screen2</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    buttonClick = () => {
        Toast.show({
            text: 'Wrong password!'
        });
    }
}
