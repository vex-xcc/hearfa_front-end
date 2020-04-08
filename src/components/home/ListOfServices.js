import React, { Component } from 'react'
import WorkerHome from './WorkerHome'
import { getInfo } from "../login/decodeToken";
import {WorkerService,WaitingService} from '../api'
export default class ListOfServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Service: [],
  
        };
    }

    
    componentDidMount(){
        // Mack API call to get all service that match to worker job
        let ID = getInfo().data._id
        WorkerService(ID)
       .then( (repose)=>{
             this.setState({Service:repose.data });
       })
       .catch( (error)=>{
           console.log(' API error: ',error );
       })
   }


UpdateServiceById = (id) => {
    // Make an API Call to delete a service
    WaitingService(id)
       .then((res) => {
           const Service = this.state.Service.filter((Service) => {
               return Service._id !== id; 
           });
           this.setState({ Service});
       })
       .catch((err) => {
       })
}



    render(){
        let Service = <h3> </h3>
        if(this.state.Service.length > 0 ){
            Service = this.state.Service.map((Services , index )=> {
            return(
            <WorkerHome 
            Service={this.state.Service}
            id={Services._id}
            ServiceType={Services.ServiceType}
            ServiceState={Services.ServiceState}
            ServiceDescription={Services.ServiceDescription}
            UpdateServiceById = {this.UpdateServiceById}
            key={index} /> 
            );
        })}
      return(
          <div className="allServices">
              {Service}    
          </div>
          );
    }


}
