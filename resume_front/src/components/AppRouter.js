import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routs";
import {STORE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />)}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />)}
            <Redirect to={STORE_ROUTE} />
        </Switch>
    );
};

export default AppRouter;