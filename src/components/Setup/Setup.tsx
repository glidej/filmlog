import React, { Component } from 'react';
import {
    Text, 
    Card, 
    CardItem, 
    Body, 
    Button
} from 'native-base';
import { withGlobalContext } from '../../state/Context';
import { IGlobalState, IRoll } from '../../state/types';
import { default as uuid } from 'uuid/v4';
import { View } from 'react-native';

class Setup extends Component<{ global: IGlobalState, navigation: any }, IRoll> {
    uuid: string;
    state: IRoll;

    constructor(props: any) {
        super(props);

        this.uuid = uuid();
        this.state = {
            camera: 'Canon',
            film: 'Portra',
            name: 'My New Roll'
        };
    }

    addRoll = () => {
        const { dispatch } = this.props.global;
        const { navigate } = this.props.navigation;

        dispatch({
            type: 'ADD_NEW_ROLL', 
            value: { 
                ...this.state, 
                uuid: this.uuid
            }
        }, () => {
            navigate('Detail', { roll: this.state} );
        });
    }

    render() {
        return (
            <View>
                <Card>
                    <CardItem header>
                        <Text>Select Camera</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{this.state.camera}</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>Select Film</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{this.state.film}</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>Name</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{this.state.name}</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Button onPress={this.addRoll}>
                                <Text>Start</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default withGlobalContext(Setup);