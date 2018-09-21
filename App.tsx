import React, { Component } from 'react';
import { Text } from 'react-native';
import Introduction from './src/components/Introduction/Introduction';
import Setup from './src/components/Setup/Setup';
import { GlobalContextProvider } from './src/state/Context';
import {
  Container, 
  Content, 
  Header, 
  Body, 
  Title,
  Root
} from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

const Routable = createStackNavigator({
  Introduction,
  Setup
}, {
  navigationOptions: {
    header: null
  },
  initialRouteName: 'Introduction'
});

export default class App extends Component<any, any> {
  state = { fontLoaded: false }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <GlobalContextProvider>
        { this.state.fontLoaded ? (
          <Routable/>
        ) : (
          <Text>Loading</Text>
        )}
      </GlobalContextProvider>
    );
  }
}
