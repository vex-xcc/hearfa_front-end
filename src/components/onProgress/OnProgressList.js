import React from 'react';
import { getRequestService, closeService } from '../api';
import { getInfo } from '../login/decodeToken';
import ProgressList from './ProgressList';
import Swal from "sweetalert2";
export default class OnProgressList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cus_RequestServices:[]
        }
    }
    componentDidMount(){
        // Make API call 
        let mId = getInfo().data._id
        getAllServiceInOnProgress(mId)
        .then( (reponse)=>{
         
            this.setState( {cus_RequestServices:reponse.data} );

        })
        .catch( (error)=>{
        })
    }
 


    closeOneSerives = (id) => {
        // Make an API Call to close a Services
        closeService(id)
     .then( (res)=>{
       const newList = this.state.cus_RequestServices.filter((Service) => {
           return Service._id !== id;
         });
         Swal.fire(`The Service Closed`,"",'success')
         this.setState( {cus_RequestServices:newList} );
     })
      .catch( (err)=>{
      })
   }


    render(){
        let allServices = <h3> No Services! :( </h3>
  // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
            if(this.state.cus_RequestServices.length > 0 ){
              allServices= this.state.cus_RequestServices.map( (Services , index)=> {
                return(
                <ProgressList
                id={Services._id}
                ServiceType={Services.ServiceType}
                ServiceState={Services.ServiceState}
                ServiceDescription={Services.ServiceDescription}
                AllPrice={Services.AllPrice}
                closeOneSerives={this.closeOneSerives}
                key={index} /> 
                );
            })}

        return(
            <div className="allServices">
            {allServices}
            </div>);
        
    }
}