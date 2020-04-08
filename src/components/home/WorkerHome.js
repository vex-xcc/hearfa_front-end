import React from "react";
import { getInfo } from "../login/decodeToken";
import { AddPriceToTheService,WaitingService } from "../api";
import './card.css'; 

export default class WorkerHome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toggle: false,    
                ServicesEmp:getInfo().data._id,
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
    AddPriceToTheService(newPrice,this.props.id)
       .then((res) => {
           console.log("you're Price has been added successfully")
       })
       .catch((err) => {
        console.log("API ERROR: ", err);
       })
}

UpdateClick = (e) => {
  e.preventDefault();
  console.log(`the ${this.props.id}Service  delet Click `)
  this.props.UpdateServiceById(this.props.id)
}

handleSubmit = e => {
    const addNewPrice = {
      ServicePrice:this.state.ServicePrice,
      ServicesEmp: this.state.ServicesEmp };
    e.preventDefault();
    this.UpdateClick(e)
    this.AddPriceToTheSelectedService(addNewPrice);
};
togglehandler(e){
        e.preventDefault();
        this.setState({
            toggle: !this.state.toggle
        })
    }

   render(){
       console.log(this.state.ServicePrice)
       console.log(this.state.ServicesEmp)
        return(          
          <div className="movie_card" id="bright">
            <div className="info_section">
              <div className="movie_header">
          
                <h1>{this.props.ServiceType}</h1>
                <p className="type">{this.props.ServiceState}</p>
              </div>
              <div className="movie_desc">
                <p className="description"> {this.props.ServiceDescription} </p>
                <p className="buttonLable" onClick={e => this.togglehandler(e)}>click to add price </p>
              </div>
                <ul>
                </ul>
                {this.state.toggle === true ? 
                <div >
                <form onSubmit={e => this.submit(e)} className = "priceForm">
                <input 
                 name="ServicePrice"
                 value={this.state.ServicePrice}
                 type="number"
                 onChange={e => this.change(e)}/> 
                 <button type="submit">Add</button>
                </form>
                </div>
                : ''
                  }
              </div>
            <div className="blur_back bright_back"></div>
          </div>
        );
}}
