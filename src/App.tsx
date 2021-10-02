import React, { useReducer } from 'react'
import axios from 'axios'
import { reducer, setReposByUser } from './state'
import { Context } from './state'
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import LandingPAge from './LandingPage'
import ReposByUserPage from './ReposByUserPage'



function App() {

const initialState = { reposByUser: []}
const [state, dispatch] = useReducer(reducer, initialState);
const apiBaseUrl = ' https://api.github.com/'
const repoUrl = 'https://api.github.com/users/Eddiejjay/repos'




React.useEffect(() => {

  const fetchData= async () => {
    try {
      const { data } = await axios.get(
        `${repoUrl}`

      );
      console.log('data', data)
      dispatch(setReposByUser(data));
    
    } catch (e) {
      console.error(e);
    }
  };
  void fetchData();
 

}, [dispatch])




  return (
    <Context.Provider value = {[state, dispatch]}>
    <Router>
    <Switch>
            <Route path ="/"> 
            <LandingPAge ></LandingPAge>
            <ReposByUserPage></ReposByUserPage>
            </Route>
          </Switch>

    </Router>
    </Context.Provider>

  );
}

export default App;
