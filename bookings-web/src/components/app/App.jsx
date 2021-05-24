import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import PlaceDetail from '../places/PlaceDetail';
import Login from '../users/Login';
import Logout from '../users/Logout';
import SignUp from '../users/SignUp';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path='/'
          exact render={(routerProps) => <Getaways {...routerProps} />}
        />
        <Route
          path='/register'
          exact render={(routerProps) => <SignUp {...routerProps} />}
        />
        <Route
          path='/login'
          exact render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          path='/logout'
          exact render={(routerProps) => <Logout {...routerProps} />}
        />
        <Route
          path='/:id'
          exact render={(routerProps) => <PlaceDetail {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
