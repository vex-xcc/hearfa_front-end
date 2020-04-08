//ALL Received Tickets 
import React from 'react';
import ReceivedService from './ReceivedService'
import { getReceivedServices } from '../api';
// import '../SendTicket/SendTickets.css';
import { getInfo } from '../login/decodeToken'

export default class ReceivedServices extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Emp_ReceivedServices: [],
        };
    }
    componentDidMount() {
        // Take the id of curretn user
        let mId = getInfo().data._id

        // Make API call 
        getReceivedServices(mId)
            .then((reponse) => {
                console.log('reponse.data', reponse.data)
                this.setServices(reponse.data)
            })
            .catch((error) => {
                console.log(' API error: ', error);
            })
    }
    setServices = (Emp_ReceivedServices) => {
        this.setState({ Emp_ReceivedServices });
    }


    render() {
        // variable to show when there no Services in the array 
        let allServices = <h3> No Services! :( </h3>
 // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Emp_ReceivedServices.length > 0) {
            allServices = this.state.Emp_ReceivedServices.map((Services, index) => {
                return (
                    <ReceivedService
                        id={Services._id}
                        ServiceType={Services.ServiceType}
                        Servicestate={Services.ServiceState}
                        ServiceDescription={Services.ServiceDescription}
                        key={index} />
                );
            })
        }

        return (
            <div className="content">
                <h2>Received Service</h2>
                <ul className="TimeLineReceivedServices">
                    {allServices}
                </ul>
            </div>);
    }

} 