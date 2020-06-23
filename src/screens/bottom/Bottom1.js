import React, { Component } from 'react'
import { Container, Header, Left, Body, Title, Right, Content, H1 } from 'native-base'
import BottomMenu from '../../components/BottomMenu'

export default class Bottom1 extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Bottom1</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <H1>Hello Bottom 1 screen</H1>
                </Content>
                <BottomMenu />
            </Container>
        )
    }
}
