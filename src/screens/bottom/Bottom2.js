import React, { Component } from 'react'
import { Container, Header, Left, Body, Title, Right, Content, H1 } from 'native-base'
import BottomMenu from '../../components/BottomMenu'

export default class Bottom2 extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Bottom2</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <H1>Hello Bottom 2 screen</H1>
                </Content>
                <BottomMenu />
            </Container>
        )
    }
}
