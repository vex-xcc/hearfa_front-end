// All History List

import React from "react";
export default class HistoryList extends React.Component {

    deletClick = (e) => {
        e.preventDefault();
        this.props.deletOneSerives(this.props.id);
      }
    render(){
            return(
              <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
      
                  <h1>{this.props.ServiceType} </h1>
                  <p className="type">{this.props.ServiceState}</p>
                </div>
                <div className="movie_desc">
                  <p className="description"> {this.props.ServiceDescription} </p>
               </div>
               <div class="movie_social" onClick={this.deletClick}>
               <ul><i><i class="material-icons">Delete</i></i></ul>
                  </div>
              </div>
              <div className="blur_back bright_back"></div>
            </div>
            );
        }
    
    


}