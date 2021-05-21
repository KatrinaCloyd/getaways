import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import PlaceDetail from '../places/PlaceDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact render={(routerProps) => <Getaways {...routerProps} />}
        />
        <Route
          path='/:id'
          exact render={(routerProps) => <PlaceDetail {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
