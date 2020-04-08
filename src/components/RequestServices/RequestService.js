import React from 'react';
import {userInfo} from '../api';
import Swal from "sweetalert2";
export default class RequestService extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggle:false, 
      workerInfo:null
      
    };
  }
  // To display or not the Service Worker info 
   ServicesClicked = (e) => {
    e.preventDefault();
    console.log("Service Worker info..")
        this.setState({ toggle:! this.state.toggle }); 
        console.log("this.props.AllPrice.ServicesEmp" ,this.props.AllPrice)
        this.getWorkerDataByID(this.props.workerId.ServicesEmp)
}

// chaneg the Service state to on progress
progressClick = (e) => {
  e.preventDefault();
  //show popup windows message
  Swal.fire(`The Service Accepted successfully`,"",'success')
  this.props.ProgressService(this.props.id ,console.log( `chaneg the ${this.props.id} Service progress Click `) );
}


getWorkerDataByID = (id) => {
  // Make an API Call to get the worker info 
  userInfo(id)
        .then( (reponse)=>{
            console.log('workerInfo ==> reponse.data ===> ' , reponse.data )
            this.setState( {workerInfo: reponse.data} )
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
}
  render(){
      //map for display the  price and name for the worker and if the customer Accept the state will change
    const Price = this.props.AllPrice.map((Prices)=>{
      return(
        <>
          <button onClick={this.ServicesClicked} >Price: {Prices.ServicePrice}</button>
          {this.state.toggle === true ? 
          <div className="Price">
            <p> Worker Name: {this.state.workerInfo} </p>
            <button onClick={(e)=>this.progressClick(e)}>Accept</button>
           </div> 
            : ''
          }
          </>
      )
    })
// display the RequestService in one card
    return(
                  <div className="movie_card" id="bright">
                  <div className="info_section">
                    <div className="movie_header">
                
                      <h1>{this.props.ServiceType} </h1>
                      <p className="type">{this.props.ServiceState}</p>
                    </div>
                    <div className="movie_desc">
                      <p className="description"> {this.props.ServiceDescription} </p>
                      {Price}
                    </div>
                  </div>
                  <div className="blur_back bright_back"></div>
                </div>
    );
  }
}