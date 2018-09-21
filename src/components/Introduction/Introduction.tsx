import React, { Component } from 'react';
import {
    Text, 
    Card, 
    CardItem, 
    Body, 
    Button, 
    ActionSheet,
    Content
} from 'native-base';
import { withGlobalContext } from '../../state/Context';
import { IGlobalState, IRoll } from '../../state/types';

class Introduction extends Component<{ global: IGlobalState, navigation: any }, { buttons: string[], keys: string[]}> {
    state: { buttons: string[]; keys: string[] };

    constructor(props: any) {
        super(props);

        this.state = {
            buttons: [],
            keys: []
        }
    }

    static getDerivedStateFromProps(props: any) {
        const { rolls } = props.global;
        const rollKeys = Object.keys(rolls);
        let keys: string[] = [];

        let buttons: string[] = rollKeys.map((rollId: string): string => {
            keys.push(rollId);
            return rolls[rollId]['name'];
        });

        return {
            buttons,
            keys
        }
    }

    showActionSheet = () => {
        ActionSheet.show({
            options: this.state.buttons,
            title: "Select A Roll"
        }, this.handleSelection);
    }

    handleSelection = (buttonIndex: number) => {
        const { navigate } = this.props.navigation;
        const rollId = this.state.keys[buttonIndex];
        const roll = this.props.global.rolls[rollId];

        navigate('Detail', { roll });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Content padder>
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
            </Content>
        );
    }
}

export default withGlobalContext(Introduction);