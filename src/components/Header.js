import React, { Component } from 'react';
import { Container, Button, Text, Toast, Header as NativeHeader, Body, Title, Left, Right, } from 'native-base';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        const { title, left, right } = this.props;
        return (
            <NativeHeader>
                {left}
                <Body>
                    <Title>{title}</Title>
                </Body>
                {right}
            </NativeHeader>

        )
    }

    
}

Header.propTypes = {
    title: PropTypes.string,
    left : PropTypes.object,
    right : PropTypes.object,
}

Header.defaultProps = {
    left : <Left />,
    right : <Right />,
}
