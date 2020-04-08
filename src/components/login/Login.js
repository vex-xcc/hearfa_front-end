import React, { Component } from "react";
import axios from "axios";
import apiURL from '../../APIconfig';
import { getInfo } from "./decodeToken";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./login.css";
import Register from './Register'
import Swal from "sweetalert2"; 
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
        localStorage.setItem("currentUser", res.data.token);
        let jwt1 = getInfo().data.Worker;
        if (jwt1 === true) {       
          history.push("/WorkerHeader");
          Swal.fire(`welcome ${getInfo().data.Username}`,"",'success');
          
        } else if (jwt1 === false) {
          history.push("/CustomerHeader");
          Swal.fire(`welcome ${getInfo().data.Username}`,"",'success');

        } else if (jwt1 === undefined) {
          history.push("/");
          Swal.fire(` ${jwt1}`,"",'error');
        }
        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);
        Swal.fire(` Invalid Username or Password`,"",'error');

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
