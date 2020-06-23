import React, { Component } from 'react'
import { Text,  Container, List,  ListItem } from 'native-base';
import {  Actions } from 'react-native-router-flux';
const routes = [
    {
        key: "drawer1",
        name: "Screen1"
    },
    {
        key: "drawer2",
        name: "Screen2"
    }
];

export default class DrawerMenu extends Component {
    render() {
        return (
            <Container>
                <List
                    dataArray={routes}
                    renderRow={data => {
                        return (
                            <ListItem
                                button onPress={() => { Actions[data.key].call(); }}
                            >
                                <Text>{data.name}</Text>
                            </ListItem>
                        );
                    }}
                />
            </Container>
        )
    }
}
