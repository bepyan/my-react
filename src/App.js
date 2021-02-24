import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from 'pages/Home';


function App () {
    return (
        <Router>
            <Switch basename='/my-react'>
            {/* <Switch> */}
                <Route path='/' component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
