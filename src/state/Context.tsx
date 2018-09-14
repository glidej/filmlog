import React, { Component } from 'react';

const INITIAL_STATE = {
  profile: {
    firstName: "Jacob",
    lastName: "Glide"
  },
  rolls: [{
      name: 'Belle Isle',
      camera: 'Canon AE-1',
      film: 'Kodak Portra 400'
    }, {
      name: 'The Zoo',
      camera: 'Voigtländer Bessa R',
      film: 'Fujifilm Pro 400h'
    }
  ],
  selectedRoll: null
}

const GlobalContext = React.createContext({});

export interface IGlobalState {
  dispatch: (action: any) => void;
  profile: {
    firstName: string;
    lastName: string;
  },
  rolls: IRoll[];
  selectedRoll: IRoll | null;
}

export interface IRoll {
  name: string;
  camera: string;
  film: string;
}

interface Action {
  type: string;
  value: any;
}

const rootReducer = (state: IGlobalState, action: Action) => {
  switch(action.type) {
    case "UPDATE_ROLL":
      return { ...state, selectedRoll: action.value };
    default:
      return state;
  }
}

export class GlobalContextProvider extends Component<any, IGlobalState> {

  state = {
    ...INITIAL_STATE,
    dispatch: (action: Action) => {
      this.setState((currentState: any) => {
        const reduced = rootReducer(currentState, action);
        return reduced;
      })
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
  