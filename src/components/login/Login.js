import React, { Component } from "react";
import axios from "axios";
import apiURL from '../../APIconfig';
import { getInfo } from "./decodeToken";
import "./login.css";
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
          history.push("/WorkerHeader");
        } else if (jwt1 === false) {
           history.push("/CustomerHeader");
        } else if (jwt1 === undefined) {
          history.push("/");
        }
        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {

    return (
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

        </form>
        <h2>&nbsp;</h2>

      </div>

    );
  }
}

export default Login;
