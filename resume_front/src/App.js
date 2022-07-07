import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResumeStore from './pages/ResumeStore';
import Auth from './pages/Auth';
import Registr from './pages/Registr';
import Activate from '../src/components/Activate';
import Google from '../src/components/Google';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/store' component={ResumeStore} />
                    <Route exact path='/authorisation' component={Auth} />
                    <Route exact path='/registration' component={Registr} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
