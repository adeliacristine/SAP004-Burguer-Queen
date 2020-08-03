import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Inicial from '../pages/Index'
import Hall from '../pages/Hall'


const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Inicial} />
                <Route path='/hall' component={Hall} />
            </Switch>
        </BrowserRouter>
)

export default Routes;