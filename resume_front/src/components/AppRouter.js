import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routs";
import {STORE_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false;
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />)}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />)}
            <Redirect to={STORE_ROUTE} />
        </Switch>
    );
};

export default AppRouter;