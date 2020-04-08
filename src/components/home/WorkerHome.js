import React from "react";
import { getInfo } from "../login/decodeToken";
import { AddPriceToTheService, WaitingService } from "../api";
import './card.css';
import './formstyle.scss'

export default class WorkerHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      ServicesEmp: getInfo().data._id,
      ServicePrice: 0,

    };
    this.change = this.handleChange.bind(this);
    this.submit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  AddPriceToTheSelectedService = (newPrice) => {
    // Make an axios Call to Add Price To The Selected Service 
    AddPriceToTheService(newPrice, this.props.id)
      .then((res) => {
      })
      .catch((err) => {
      })
  }


  UpdateClick = (e) => {
    e.preventDefault();
    this.props.UpdateServiceById(this.props.id)
  }

  handleSubmit = e => {
    const addNewPrice = {
      ServicePrice: this.state.ServicePrice,
      ServicesEmp: this.state.ServicesEmp
    };
    e.preventDefault();
    this.AddPriceToTheSelectedService(addNewPrice);
    this.props.UpdateServiceById(this.props.id);
    this.setState.ServicePrice = 0
  };
  togglehandler(e) {
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {

    return (
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">

            <h1>{this.props.ServiceType}</h1>
            <p className="type">{this.props.ServiceState}</p>
          </div>
          <div className="movie_desc">
            <p className="description"> {this.props.ServiceDescription} </p>
    
          </div>
          <div className="movie_social">        <dive className="inputContainer">
            <p ><span className="input" onClick={e => this.togglehandler(e)}>click to add price</span> </p>
            </dive>
            <ul>
            </ul>
            {this.state.toggle === true ?
              <dive className="inputContainer">

                <p>
                  <form onSubmit ={e=>this.submit(e)}>
                  <span className="input">
                    <input type="number" placeholder="Add Price to the service" />
                    <span></span>
                  </span>
                  <span className="input">
                    <button type="submit">submit</button>
                    <span></span>
                  </span>
                  </form>
                </p>
              </dive>
              : ''
            }
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    );
  }
}


