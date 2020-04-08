import React from 'react';
export default class ReceivedService extends React.Component {

//display the ReceivedServices in card
    render() {
        return (
            <div>

                <li className="event">
                    <div className="member-infos">
                        <h1 onClick={this.ServiceClicked}>
                            {this.props.ServiceState}
                        </h1>
                        <div className={`Description-${this.state.Fltir}`}>
                        <span > {this.props.ServiceType} </span>
                        <h2> {this.props.ServiceDescription} </h2>
                        </div>
                    </div>
                </li>
  }
            </div>
        );
    }

}