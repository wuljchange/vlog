import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Base from '../base/base';
import Home from '../vlog/home';

export default class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Base>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                    </Switch>
                </Base>
            </BrowserRouter>
        )
    }
}

