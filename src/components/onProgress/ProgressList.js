import React from 'react';
export default class ProgressList extends React.Component {

  closeClick = (e) => {
    e.preventDefault();
    this.props.closeOneSerives(this.props.id);
  }
  
  render() {
    return (
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">

            <h1>{this.props.ServiceType} </h1>
            <p className="type">{this.props.ServiceState}</p>
          </div>
          <div className="movie_desc">
            <p className="description"> {this.props.ServiceDescription} </p>
         </div>
         <div class="movie_social" onClick={this.closeClick}>
         <ul><i><i class="material-icons">Close</i></i></ul>
            </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    );
  }
}