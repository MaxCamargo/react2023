import {  useReducer } from "react";
import { reducer, initialState } from './Test.reducer'
import { ActionType } from "../../models";

export function Test() {
  //usando el reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   <>
      <button onClick={()=> dispatch({type: ActionType.INCREMENTCOUNT, payload: 1})}>Increment</button>
      <p>{state.count}</p>
      <button onClick={()=> dispatch({type: ActionType.DECREMENTCOUNT, payload: 1})}>Decrement</button>
   </>
  );
}

