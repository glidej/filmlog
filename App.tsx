import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Name } from './src/Context'
import Foo from './src/Foo';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    
    this.state = {
      profile: {
        firstName: "Jacob",
        lastName: "Glide",
      }
    }
  }
  render() {
    return (
      <Name.Provider value={this.state.profile}>
        <View style={styles.container}>
          <Foo/>
        </View>
      </Name.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
