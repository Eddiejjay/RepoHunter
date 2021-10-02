
import React, { createContext } from "react";

export type Action =  
{type: "SET_REPOS_BY_USER";
payload: []}

export type State = {
  reposByUser: Array<any>
}


const initialState = { reposByUser: []}
export const Context = createContext<[State, React.Dispatch<Action>]>([initialState, () => initialState]);




