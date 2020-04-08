import React, { Component } from 'react'
import './CustomerHome.scss'
import ServiceForm from '../NewService/ServiceForm';
import { Route, BrowserRouter, Link,Switch } from "react-router-dom";
export default class CustomerHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      type:"",
    };
  }
  togglehandler(){
    this.setState({
      toggle: !this.state.toggle
    })
  }
  typehandler(type){
    this.setState({
      type: type
    })
    this.togglehandler()
  }

  render() {
    return (

      <>
       {this.state.toggle === false?
      <div>
        <div className="all">
          <div className="lefter" 
          onClick= {()=>this.typehandler("Electrician") }>
            <div className="text">Electrician</div>
          </div>
          <div className="left"
          onClick= {()=>this.typehandler("Plumber") }>
            <div className="text">Plumber</div>
          </div>
          <div className="center">
            <div className="explainer"><span>Services</span></div>
            <div className="text">Services</div>
          </div>
          <div className="right"
          onClick= {()=>this.typehandler("Painter") }>
            <div className="text">Painter</div>
          </div>
          <div className="righter"
          onClick= {()=>this.typehandler("Carpenter") }>
            <div className="text">Carpenter</div>
          </div>
        </div>
      </div>    
      : <ServiceForm tog={e=>this.togglehandler(e)}  type={this.state.type } />
      }
      </>
    )
  }
}
