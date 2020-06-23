import React, { Component } from 'react'
import { Container, Button, Text, Toast, Header, Body, Title, Left, Right, Icon, Content, H1, View } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>

                    </Left>
                    <Body>
                        <Title>Home Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <View style={{alignItems: 'center'}}>
                        <H1>Welcome to Home screen</H1>
                        <Button style={{ marginTop: 20 }} info onPress={this.goToDrawerScreen}>
                            <Text>Go to Drawer Navigation Screen</Text>
                        </Button>
                        <Button style={{ marginTop: 20 }} info onPress={this.goToBottomScreen}>
                            <Text>Go to Bottom Navigation Screen</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        )
    }

    goToDrawerScreen = () => {
        Actions.drawer();
    }

    goToBottomScreen = () => {
        Actions.bottom();
    }
}
