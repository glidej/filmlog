import { createStackNavigator } from 'react-navigation';
import Introduction from './Introduction/Introduction';
import Setup from './Setup/Setup';
import Detail from './Detail/Detail';

export const Router = createStackNavigator({
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      title: 'Introduction'
    }
  },
  Setup: {
    screen: Setup,
    navigationOptions: {
      title: "Setup"
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: "Details"
    }
  }
}, {
  initialRouteName: 'Introduction'
});