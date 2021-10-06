import React, { useReducer } from 'react'
// import axios from 'axios'
import { reducer,  initialState } from './state'
import { Context } from './state'
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Search from './components/Search'
import ReposByUser from './components/ReposByUser'
import Header from './components/Header'




const App =() => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className ="bg-gray-100 flex flex-col h-4/5">
            <Header/>
            <div className ="flex flex-col "> 
                <Context.Provider value = {[state, dispatch]}>
                    <Router>
                        <Search/>
                        <Switch>
                            <Route path ="/:user/repos"> 
                                <ReposByUser></ReposByUser>
                            </Route>

                        </Switch>

                    </Router>
                </Context.Provider>
            </div>
        </div>

    );
}

export default App;
