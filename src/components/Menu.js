import React, { Component } from 'react';
import { Button, Icon, Text, Badge, } from 'native-base';

export default class Menu extends Component {

    render() {
        return (
            <Button vertical onPress={() => (this.props.clickMenu())}>
                <Icon type="FontAwesome5" name={this.props.icon} />
                <Text>{this.props.title}</Text>
            </Button>
        )
    }
}