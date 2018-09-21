import React, { Component } from 'react';
import {
    Text, 
    Card, 
    CardItem, 
    Body, 
    Button
} from 'native-base';
import { withGlobalContext } from '../../state/Context';
import { IGlobalState } from '../../state/types';
import { View } from 'react-native';

class Setup extends Component<{ global: IGlobalState, navigation: any }, any> {
    render() {
        const { camera, film, name } = this.props.navigation.getParam('roll', {});

        return (
            <View>
                <Card>
                    <CardItem header>
                        <Text>Details</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{camera}</Text>
                            <Text>{film}</Text>
                            <Text>{name}</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Button onPress={() => { this.props.navigation.goBack() }}>
                                <Text>Go Back</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default withGlobalContext(Setup);