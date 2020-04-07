import React from "react";
import './ServiceForm.css';
import { getInfo } from "../login/decodeToken";
import { AddNewService } from "../api";
import icon from '../../images/done.png'
import Swal from "sweetalert2";
export default class ServiceForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ServiceDescription: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.formAdd = this.formAdd.bind(this);
    }
// Function to set data in ServiceDescription state
    addService = info => {

        /// get the id of current user 
        let id = getInfo().data._id;

        // An API request to add a Service to the customer by the id
        AddNewService(info, id)
            .then(response => {
                Swal.fire(`The Service of customer ${getInfo().data.Username} has been added successfully.`);
            })
            .catch(error => {
                console.log("API ERROR: ", error);
            });
    };

    handleChange = e => { this.setState({ [e.target.name]: e.target.value }); }
 

    formAdd = e => {
        // set the object of new service data 
        const newService = {
            ServiceDescription: this.state.ServiceDescription,
            ServiceType: this.props.type
        }
        this.props.tog(e)
        e.preventDefault();
        this.addService(newService);
    };

    render() {
        return (
            <div className="modal">
                <div className="side">
                    <div className="skew">
                        <h3> {`${this.props.type}`} </h3>
                        <img src={icon} />
                    </div>
                </div>

                <div className="header">
                    <h1>Enter Service Details</h1>
                </div>
                <div className="form">
                    <form onSubmit={e=>this.formAdd(e)}>
                        <fieldset className="name">
                            <label htmlFor="name">Description</label>
                            <input 
                            id="name" 
                            type="text"
                            name="ServiceDescription"
                            required
                            onChange={e=>this.handleChange(e)} 
                            value={this.state.ServiceDescription}/>

                        </fieldset>
                        <button type="submit">Confirm</button>
                    </form>
                </div>
            </div>
        );
    }
}
