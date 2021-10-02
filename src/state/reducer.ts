
import {State, Action } from './state'

export const setReposByUser = (repos:[]):Action => {
    return {
      type: "SET_REPOS_BY_USER",
      payload: repos
  
    };
  };


export const reducer = ( state: State, action:Action): State => {
    switch (action.type) {
      case "SET_REPOS_BY_USER":
        return {
          reposByUser:action.payload
        };
        default:
          return state;
    }
  }