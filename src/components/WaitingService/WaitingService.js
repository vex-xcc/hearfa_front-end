import React, { Component } from 'react'

export default class WaitingService extends Component {
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
        <div className="movie_social">    
          <ul>
          </ul>
        </div>
      </div>
      <div className="blur_back bright_back"></div>
    </div>
    )
  }
}


