import React, { Component } from "react";
import axios from "axios";
import apiURL from '../../APIconfig';
import { getInfo } from "./decodeToken";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./login.css";
import Register from './Register'
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      password: ""
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    const { history } = this.props

    axios
      .post(`${apiURL}/customer/login`, {
        Username: this.state.Username,
        password: this.state.password
      })
      .then(res => {
        console.warn("res", res);
        localStorage.setItem("currentUser", res.data.token);
        let jwt1 = getInfo().data.Worker;
        if (jwt1 === true) {
          console.log("this.props.history:", this.props);       
          this.props.history.push("/WorkerHeader");
          
        } else if (jwt1 === false) {
          console.log("B:", jwt1);
          this.props.history.push("/CustomerHeader");

        } else if (jwt1 === undefined) {
          console.log("b: ", jwt1);
          this.props.history.push("/");
        }
        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);

      });
  }

  render() {

    return (
      <BrowserRouter>
      <div>
    
        <form className="login" onSubmit={e => this.submit(e)} >     
        <input
              type="text"
              name="Username"
              onChange={e => this.change(e)}
              value={this.state.Username}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={e => this.change(e)}
              value={this.state.password}
            />
          <button
            type="submit" >Login</button>
            <br></br>
            <button><Link to="/register">Register </Link> </button>
            
        
             
             
        </form>
        <h2>&nbsp;</h2>

      </div>
      <Route
          path="/register"
          render={() => <Register  history={this.props.history}  />}
        />
      </BrowserRouter>
    );
  }
}

export default Login;
