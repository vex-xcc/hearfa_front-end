import React from "react";
import "./header.css";
import { getInfo } from "../login/decodeToken";
import RequestServices from "../RequestServices/RequestServices";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import CustomerHome from "../home/CustomerHome";
import OnProgressList from "../onProgress/OnProgressList";
import AllHistory from "../History/AllHistory";
import profile from "../../images/profile.png";
import man from "../../images/man.png";
import share from "../../images/share.png";
import history1 from "../../images/history.png";
import logout from "../../images/logout.png";
export default class CustomerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = (e) => {
    e.preventDefault();
    this.props.history.push("/hearfa_front-end");
    localStorage.clear("currentUser");
  };
  render() {
    let info = getInfo().data;
    return (
      <BrowserRouter>
        <div>
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
              <Link to="/CustomerHeader">
                <img
                  id="img1"
                  src="https://t4.ftcdn.net/jpg/00/97/00/07/240_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg"
                  alt=""
                />
              </Link>
              <div id="divaa1">
                <input id="btna1" type="button" value={info.Username} />
                <input id="btna2" type="button" value={info.FullName} />
                <input id="btna3" type="button" value={info.Phone} />
                <img id="img2" src={profile} alt="" />
              </div>
              <div id="divaa2">
                <Link to="/CustomerHeader/RequestServices">
                  <img id="img3" src={share} alt="" />
                </Link>
              </div>
              <div id="divaa4">
                <Link to="/CustomerHeader/ServicesOnProgressList">
                  <img id="img5" src={man} alt="" />
                </Link>
              </div>
              <div id="divaa5">
                <Link to="/CustomerHeader/HistoryServices">
                  <img id="img6" src={history1} alt="" />
                </Link>
              </div>
              <div id="divaa3">
                <Link onClick={(e) => this.logOut(e)}>
                  <img id="img4" src={logout} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route
            exact={true}
            path="/CustomerHeader"
            component={CustomerHome}
          ></Route>
          <Route
            path="/CustomerHeader/RequestServices"
            component={RequestServices}
          ></Route>
          <Route
            path="/CustomerHeader/ServicesOnProgressList"
            component={OnProgressList}
          ></Route>
          <Route
            path="/CustomerHeader/HistoryServices"
            component={AllHistory}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
