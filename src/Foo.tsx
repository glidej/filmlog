import { Name } from './Context';
import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Foo extends Component<any, any> {
    render() {
        return (
            <Name.Consumer>
                {props => (
                    <Text>Hello {props.firstName} {props.lastName}</Text>
                )}
            </Name.Consumer>
        )
    }
}