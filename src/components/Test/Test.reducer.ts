// Reducer de estados
import { Action, ActionType } from "../../models";

// declare the Test state
export interface State {
  count: number;
  previousValues: number;
}
// declare the initial state
export const initialState: State = {
  count: 0,
  previousValues: 0,
};

// declare the reducer
export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    // increment the count
    case ActionType.INCREMENTCOUNT:
      return {
        ...state,
        previousValue: state.count,
        count: state.count + action.payload,
      };
      // decrement the count
    case ActionType.DECREMENTCOUNT:
      return {
        ...state,
        previousValue: state.count,
        count: state.count - action.payload,
      };
      // return the default state
    default:
      return state;
  }
};
