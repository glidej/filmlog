import { IGlobalState, Action } from './types';

export default function rootReducer(state: IGlobalState, action: Action) {
    switch(action.type) {
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