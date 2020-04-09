import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
            <Route path={'/hearfa_front-end'} exact component={Login} />
            <Route
              path="/register"
              render={() => <Register history={this.props.history} />}
            />
            <AuthComponent>
              <Route path={'/CustomerHeader'} component={CustomerHeader} />
              <Route path={'/WorkerHeader'} component={WorkerHeader} />
            </AuthComponent>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}