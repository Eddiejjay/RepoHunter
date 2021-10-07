/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext } from "react";


export type Action =  
{type: "SET_REPOS_BY_USER";
    payload: []}
| {type : "SET_ERROR_MESSAGE";
    payload: string}
| {type : "TOGGLE_ENABLED";
    payload: boolean}

export type State = {
    reposByUser: Array<any>,
    errorMessage:string,
    enabled: boolean
}


export const initialState = { reposByUser: [], errorMessage: '', enabled:false}
export const Context = createContext<[State, React.Dispatch<Action>]>([initialState, () => initialState]);




