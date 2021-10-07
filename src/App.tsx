import React, { useReducer } from 'react'
// import axios from 'axios'
import { reducer,  initialState } from './state'
import { Context } from './state'
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Search from './components/Search'
import Repos from './components/Repos'
import Header from './components/Header'
import Error from './components/Error'
import Toggle from './components/Toggle'



const App =() => {

    const [state, dispatch] = useReducer(reducer, initialState);
    

    return (
        <div className ="bg-gray-100 flex flex-col h-4/5">
            <Header/>
            <div className ="flex flex-col "> 
                <Context.Provider value = {[state, dispatch]}>
                    <Router>
                        <Search/>
                        {state.errorMessage !== '' && <Error/>}
                        <Toggle/>
                        <Switch>
                            <Route path ="/:user/repos"> 
                                <Repos></Repos>
                            </Route>
                        </Switch>
                    </Router>
                </Context.Provider>
            </div>
        </div>

    );
}

export default App;
