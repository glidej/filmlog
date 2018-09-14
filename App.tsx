import React, { Component } from 'react';
import { Text } from 'react-native';
import Introduction from './src/components/Introduction/Introduction';
import { GlobalContextProvider } from './src/state/Context';
import {
  Container, 
  Content, 
  Header, 
  Body, 
  Title,
  Root
} from 'native-base';
import { Font } from 'expo';

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
            <Container>
                <Header>
                  <Body>
                    <Title>FilmLog</Title>
                  </Body>
                </Header>
                <Content padder>
                  <Introduction/>
                </Content>
            </Container>
            </Root>
        ) : (
          <Text>Loading</Text>
        )}
       
      </GlobalContextProvider>
    );
  }
}
