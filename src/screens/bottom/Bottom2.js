import React, { Component } from 'react'
import { Container,  Left, Body, Title, Right, Content, H1 } from 'native-base'
import BottomMenu from '../../components/BottomMenu'
import Header from '../../components/Header';

export default class Bottom1 extends Component {
    render() {
        return (
            <Container>
                <Header title='Bottom1' />
                <Content padder>
                    <H1>Hello Bottom 2 screen</H1>
                </Content>
                <BottomMenu />
            </Container>
        )
    }
}
