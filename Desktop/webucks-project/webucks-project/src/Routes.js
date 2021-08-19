import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './pages/List/List';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={List} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
