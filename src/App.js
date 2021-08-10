import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginScreen from './components/LoginScreen';
import Logout from './components/Logout';

const App = () => {
    return(
        <>
        <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
        </>
    )
};
export default App;

