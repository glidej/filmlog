import React, { Component } from 'react';
import { Text, Container, Card, CardItem, Body, Button, ActionSheet } from 'native-base';
import { withGlobalContext, IGlobalState } from '../../state/Context';

class Introduction extends Component<{ global: IGlobalState }, any> {
    showActionSheet = () => {
        const { rolls } = this.props.global;
        const buttons = rolls.map((roll): string => {
            return roll['name'];
        });

        ActionSheet.show({
            options: buttons,
            title: "Select A Roll"
        }, (buttonIndex) => {
            this.props.global.dispatch({type: "UPDATE_ROLL", value: rolls[buttonIndex]});
        });
    }

    render() {
        const { selectedRoll } = this.props.global;

        return (
            <Container>
                <Card>
                    <CardItem header>
                        <Text>Start A New Roll</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button>
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
            </Container>
        );
    }
}

export default withGlobalContext(Introduction);