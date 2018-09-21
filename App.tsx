import React, { Component } from 'react';
import { Text } from 'react-native';
import { GlobalContextProvider } from './src/state/Context';
import {
  Root
} from 'native-base';
import { Font } from 'expo';
import { Router } from './src/components/Routes';

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
          <Root>
            <Router/>
          </Root>
        ) : (
          <Text>Loading</Text>
        )}
      </GlobalContextProvider>
    );
  }
}
