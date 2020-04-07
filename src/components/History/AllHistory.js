// All History

import React from "react";
import HistoryList from "./HistoryList"
import { getAllClosedService , deleteOneService } from "../api";
import { getInfo } from '../login/decodeToken';
import Swal from "sweetalert2";
export default class AllHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          History: [],
        };
    }

    // Function to set data in History state
    componentDidMount(){

        /// get the id of current user 
        let ID = getInfo().data._id

        // Mack API call to get all the service of close state
        getAllClosedService(ID)
        .then( (reponse)=>{
            console.log('getAllClosedService  == >' , reponse.data )
            this.setState({History: reponse.data})
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }

    render(){ 
      let AllHistory 
          if(this.state.History.length > 0 ){
            AllHistory= this.state.History.map( (Services , index)=> {
              return(
              <HistoryList
              id={Services._id}
              ServiceType={Services.ServiceType}
              ServiceState={Services.ServiceState}
              ServiceDescription={Services.ServiceDescription}
              deletOneSerives={this.delete}
              key={index} /> 
              );
          })}

      return(
          <div className="allServices">
          {AllHistory}
          </div>);
      
  }


}
