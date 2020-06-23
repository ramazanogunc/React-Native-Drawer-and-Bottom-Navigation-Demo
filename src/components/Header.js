import React, { Component } from 'react';
import { Container, Button, Text, Toast, Header, Body, Title, Left, Right, Icon, Content, H1 } from 'native-base';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon type='Octicons' name='three-bars' />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right />
            </Header>

        )
    }

    
}

Header.propTypes = {
    title: PropTypes.string,
}
