/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./header.css";
import { getInfo } from "../login/decodeToken";
import ReceivedServices from "../ReceivedServices/ReceivedServices";
import { Route, BrowserRouter, Link } from "react-router-dom";
import ListOfServices from "../home/ListOfServices";
import profile from "../../images/profile.png";
import share from "../../images/share.png";
import history1 from"../../images/history.png";
import hourglass from"../../images/hourglass.png";
import logout from"../../images/logout.png";
import AllHistory from '../History/AllHistory';
import ContainerOfWaitingService from '../WaitingService/ContainerOfWaitingService'
export default class WorkerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
// logout function 
  logOut = e => {
    e.preventDefault();
    this.props.history.push('/')
    localStorage.clear('currentUser')
  }
//nav bar and link to another component
  render() {
    let info = getInfo().data
    return (
      <BrowserRouter>
        <div>
          <div className="big-div">
            <div id="div1">
              <div id="rock1"></div>
              <div id="rock2"></div>
              <div id="rock3"></div>
              <div id="rock4"></div>
              <div id="rock5"></div>
              <div id="rock6"></div>
              <div id="rock7"></div>
              <div id="rock8"></div>
              <div id="diva1">
                <Link to="/ListOfServices">
                  <img
                    id="img1"
                    src="https://t4.ftcdn.net/jpg/00/97/00/07/240_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg"
                    alt="" />
                </Link>
                <div id="divaa1">
                  <input id="btna1" type="button" value={info.Username} />
                  <input id="btna2" type="button" value={info.FullName} />
                  <input id="btna3" type="button" value={info.Phone} />
                  <img
                    id="img2"
                    src={profile}
                    alt="" />
                </div>
                <div id="divaa2">
                  <Link to="/WorkerHeader/ReceivedServices">
                    <img
                      id="img3"
                      src={share}
                      alt="" />
                  </Link>
                </div>
                <div id="divaa4">
                <Link to="/WorkerHeader/HistoryServices" >
                  <img
                    id="img5"
                    src={history1}
                    alt=""/>
                </Link>
              </div>
              <div id="divaa5">
                <Link to="/WorkerHeader/WaitingService" >
                 <img
                    id="img6"
                    src={hourglass}
                    alt=""/>
                </Link>
              </div>
                <div id="divaa3">
                  <Link onClick={e => this.logOut(e)}>
                    <img
                      id="img4"
                      src={logout}
                      alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        
        </div>
        
        <Switch>
        <Route
          path="/WorkerHeader/ReceivedServices"
         component={ReceivedServices}
        />
        <Route
        exact={true}
          path="/ListOfServices"
          component={ListOfServices}
        />
     <Route  
     path="/WorkerHeader/HistoryServices"
     component={AllHistory} ></Route>

 <Route  
     path="/WorkerHeader/WaitingService"
     component={ContainerOfWaitingService} ></Route>


        </Switch>
      </BrowserRouter>
    );
  }
}
