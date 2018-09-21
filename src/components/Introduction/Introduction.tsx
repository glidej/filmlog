import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Text, 
    Card, 
    CardItem, 
    Body, 
    Button, 
    ActionSheet
} from 'native-base';
import { withGlobalContext, IGlobalState, IRoll, GlobalContextProvider } from '../../state/Context';
import Layout from '../Layout';

class Introduction extends Component<{ global: IGlobalState, navigation: any }, any> {
    showActionSheet = () => {
        const { rolls } = this.props.global;
        const buttons = Object.keys(rolls).map((rollId: string): string => {
            return rolls[rollId]['name'];
        });

        ActionSheet.show({
            options: buttons,
            title: "Select A Roll"
        }, (buttonIndex) => {
            const rollId = Object.keys(rolls)[buttonIndex];
            this.props.global.dispatch({type: "UPDATE_SELECTED_ROLL", value: rolls[rollId]});
        });
    }

    render() {
        const { selectedRoll } = this.props.global;
        const { navigate } = this.props.navigation;

        return (
            <Layout>
                <Card>
                    <CardItem header>
                        <Text>Start A New Roll</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button onPress={() => navigate('Setup')}>
                                <Text>Begin</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>Resume a Roll</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button onPress={this.showActionSheet}>
                                <Text>Resume</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem footer>
                        <Text>Selected Roll</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            {selectedRoll ? (
                                <Text>{`${selectedRoll.name} -- ${selectedRoll.camera} -- ${selectedRoll.film}`}</Text>
                            ): (
                                <Text>No Roll Selected</Text>
                            )}
                        </Body>
                    </CardItem>
                </Card>
            </Layout>
        );
    }
}

export default withGlobalContext(Introduction);