import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './modules/shared/reducers';
import { Route, Router } from 'react-router-dom';

import { history } from './modules/shared/helpers/history';

import App from './modules/containers/App';
import Home from './modules/containers/Home';
import Callback from './modules/components/Callback';
import Auth from './modules/shared/helpers/auth';

const store = createStore(allReducers);
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
    </Provider>
  );
}