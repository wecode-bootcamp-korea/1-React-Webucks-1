import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { pathnames } from 'utils/pathnames';

// 송미 컴포넌트
import ListSongmi from 'pages/songmiOh/List/List';
import LoginSongmi from 'pages/songmiOh/Login/Login';
import DetailSongmi from 'pages/songmiOh/Detail/Detail';

// 하영 컴포넌트
import ListHayoung from 'pages/hayoungGam/List/List';
import LoginHayoung from 'pages/hayoungGam/Login/Login';
import DetailHayoung from 'pages/hayoungGam/Detail/Detail';

// 민기 컴포넌트
import ListMinki from 'pages/minkiChoi/List/List';
import LoginMinki from 'pages/minkiChoi/Login/Login';
import DetailMinki from 'pages/minkiChoi/Detail/Detail';

// 진근 컴포넌트
import ListJingeun from 'pages/jingeunAhn/List/List';
import LoginJingeun from 'pages/jingeunAhn/Login/Login';
import DetailJingeun from 'pages/jingeunAhn/Detail/Detail';

class Routes extends Component {
  render() {
    const { loginUrl, listUrl, detailUrl } = pathnames;
    return (
      <Router>
        <Switch>
          <Route exact path="/login-minki" component={LoginMinki} />
          <Route exact path="/list-minki" component={ListMinki} />
          <Route exact path="/detail-minki" component={DetailMinki} />
          <Route exact path="/login-songmi" component={LoginSongmi} />
          <Route exact path="/list-songmi" component={ListSongmi} />
          <Route exact path="/detail-songmi" component={DetailSongmi} />
          <Route exact path={loginUrl} component={LoginHayoung} />
          <Route exact path={listUrl} component={ListHayoung} />
          <Route exact path={`${detailUrl}/:id`} component={DetailHayoung} />
          <Route exact path="/login-jingeun" component={LoginJingeun} />
          <Route exact path="/list-jingeun" component={ListJingeun} />
          <Route exact path="/detail-jingeun" component={DetailJingeun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
