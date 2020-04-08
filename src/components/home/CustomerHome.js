import React, { Component } from 'react'
import './CustomerHome.scss'
import ServiceForm from '../NewService/ServiceForm';
export default class CustomerHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      type:"",
    };
  }

  render() {
    console.log(this.state.type)
    return (

      <>
       {this.state.toggle === false?
      <div>
        <div className="all">
          <div className="lefter" 
          onClick= {}>
            <div className="text">Electrician</div>
          </div>
          <div className="left"
          onClick= {}>
            <div className="text">Plumber</div>
          </div>
          <div className="center">
            <div className="explainer"><span>Services</span></div>
            <div className="text">Services</div>
          </div>
          <div className="right"
          onClick= {}>
            <div className="text">Painter</div>
          </div>
          <div className="righter"
          onClick= {}>
            <div className="text">Carpenter</div>
          </div>
        </div>
      </div>    
      : <ServiceForm />
      }
      </>
    )
  }
}
