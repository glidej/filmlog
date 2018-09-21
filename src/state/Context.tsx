import React, { Component } from 'react';

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
  },
  selectedRoll: null
}

const GlobalContext = React.createContext({});

export interface IGlobalState {
  dispatch: (action: Action) => void;
  profile: {
    firstName: string;
    lastName: string;
  },
  rolls: {
    [rollId: string]: IRoll;
  }
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
    case "UPDATE_SELECTED_ROLL":
      return { ...state, selectedRoll: action.value };
    case "ADD_NEW_ROLL":
      // TODO prevent duplicates?
      const { uuid, camera, film, name } = action.value;

      return {
        ...state,
        rolls: {
          ...state.rolls,
          [uuid]: {
            camera,
            film,
            name,
          }
        }
      };
    default:
      return state;
  }
}

export class GlobalContextProvider extends Component<any, IGlobalState> {

  state = {
    ...INITIAL_STATE,
    dispatch: (action: Action) => {
      this.setState((currentState: any) => {
        return rootReducer(currentState, action);
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
  