import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
const Routes: React.FC = () => (
    <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
    </Switch>
)

export default Routes
