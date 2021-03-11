import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from 'components/home';
import Header from 'components/Header';
import useInput from 'components/useInput';
import useAxios from 'components/useAxios';


const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={home}/>
                <Route path='/useInput' component={useInput}/>
                <Route exact path='/useAxios' component={useAxios}/>
            </Switch>
        </Router>
    );
}

export default App;
