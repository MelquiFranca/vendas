import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Produtos from './pages/Produtos';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/produtos" component={Produtos} />
            </Switch>
        </BrowserRouter>
    )
}