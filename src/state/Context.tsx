import React, { Component } from 'react';
import rootReducer from './reducer';
import { IGlobalState, Action } from './types';

const GlobalContext = React.createContext({});

const INITIAL_STATE = {
  profile: {
    firstName: "Jacob",
    lastName: "Glide"
  },
  rolls: {
    "uid_1": {
      name: 'Belle Isle',
      camera: 'Canon AE-1',
      film: 'Kodak Portra 400'
    }, 
    "uid_2": {
      name: 'The Zoo',
      camera: 'Voigtländer Bessa R',
      film: 'Fujifilm Pro 400h'
    }
  }
}
export class GlobalContextProvider extends Component<any, IGlobalState> {
  state = {
    ...INITIAL_STATE,
    dispatch: (action: Action, callback?: () => void) => {
      this.setState((currentState: any) => {
        return rootReducer(currentState, action);
      }, callback)
    }
  };

  render () {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export const withGlobalContext = (ChildComponent: any) => (props: any) => (
    <GlobalContext.Consumer>
      {
        context => <ChildComponent {...props} global={context}  />
      }
    </GlobalContext.Consumer>
  );
  