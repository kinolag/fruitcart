import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Selector from './Selector';
// import OrderCreator from './OrderCreator';
import NotFound from './NotFound';


export default function Main() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Selector} />
                    <Route path='/:badLink' component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}
