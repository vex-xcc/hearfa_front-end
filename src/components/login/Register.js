import React, { Component } from "react";
import { AddNewCustomer } from '../api';
import Back from "./Back";
import "./login.css";
import Swal from "sweetalert2"; 
export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FullName: "",
            Username: "",
            password: "",
            Email: "",
            Phone: "",
            UserType: "Customer",
            Worker: false,
        };

        this.change = this.handleChange.bind(this);
        this.submit = this.formSubmit.bind(this);
    }
    WorkerToggle(e) {
        e.preventDefault();
        this.setState({
            Worker: true,
        })
    }
    CustomerToggle(e) {
        e.preventDefault();
        this.setState({
            Worker: false,
            UserType: "Customer",
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>

                <form className="login" onSubmit={e => this.submit(e)}>
                    <button className="toggle" type="button" onClick={e => this.CustomerToggle(e)}>Customer</button>
                    <button className="toggle" type="button" onClick={e => this.WorkerToggle(e)}>Worker</button>
                    <input
                        type="text"
                        placeholder="FullName"
                        name="FullName"
                        onChange={e => this.change(e)}
                        value={this.state.FullName}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="Email"
                        onChange={e => this.change(e)}
                        value={this.state.Email}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={e => this.change(e)}
                        value={this.state.password}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        name="Username"
                        onChange={e => this.change(e)}
                        value={this.state.Username}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="Phone"
                        onChange={e => this.change(e)}
                        value={this.state.Phone}
                    />
                    {this.state.Worker === true ?
                        <div className="dropdown">
                            <select
                                className="dropbtn"
                                name="UserType"
                                type="text"
                                value={this.state.UserType}
                                onChange={e => this.change(e)}>

                                <option className="dropdown-content" value="Electrician">  Electrician</option>
                                <option className="dropdown-content" value="Plumber">  Plumber</option>
                                <option className="dropdown-content" value="Painter"> Painter</option>
                                <option className="dropdown-content" value="Carpenter">Carpenter</option>

                            </select>

                        </div> :
                        <br></br>
                    }
                    <br></br>
                    <Back />


                </form>
                <h2>&nbsp;</h2>


            </div>

        );
    }
}