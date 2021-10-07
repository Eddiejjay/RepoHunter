
import {State, Action } from './state'

export const setReposByUser = (repos:[]):Action => {
    return {
        type: "SET_REPOS_BY_USER",
        payload: repos
  
    };
};

export const setErrorMessage = (errorMessage:string):Action => {
    return {
        type: "SET_ERROR_MESSAGE",
        payload: errorMessage
  
    };
};

export const toggleEnabled = (enabled:boolean):Action => {
    return {
        type: "TOGGLE_ENABLED",
        payload: enabled
    };
};

export const reducer = ( state: State, action:Action): State => {
    switch (action.type) {
        case "SET_REPOS_BY_USER":
            return {
                ...state,
                reposByUser: action.payload
            }
        case "SET_ERROR_MESSAGE":
            return {
                ...state, 
                errorMessage:action.payload
            }
        case "TOGGLE_ENABLED":
            return {
                ...state, 
                enabled:action.payload
            }

        default:
            return state;
    }
}

