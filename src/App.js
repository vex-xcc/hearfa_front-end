import React from 'react';
import apiURL from './APIconfig';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CustomerHome from '../src/components/home/CustomerHome'
// Components
import "./components/login/login.css";
import Login from './components/login/Login'
import CustomerHeader from './components/Header/CustomerHeader'
import WorkerHeader from './components/Header/WorkerHeader';
import AuthComponent from './components/login/AuthenticatedComponent';
import Register from './components/login/Register'

export default class App extends React.Component {
  render() {

    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} exact component={Login} />
            <Route
              path="/register"
              render={() => <Register history={this.props.history} />}
            />
            <AuthComponent>
              <Route path={'/CustomerHeader'} component={CustomerHeader} />
              <Route path={'/WorkerHeader'} component={WorkerHeader} />
              <Route path={'/home'} component={CustomerHome} />
            </AuthComponent>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}