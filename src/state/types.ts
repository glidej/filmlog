export interface IGlobalState {
  dispatch: (action: Action, callback?: () => void) => void;
  profile: {
    firstName: string;
    lastName: string;
  },
  rolls: {
    [rollId: string]: IRoll;
  }
}

export interface IRoll {
  name: string;
  camera: string;
  film: string;
}

export interface Action {
  type: string;
  value: any;
}