import React, { Component } from "react";
import { getJwt } from "./helper";
import { getInfo } from "./decodeToken";
import { withRouter } from "react-router-dom";

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Worker: undefined,
      Customer: undefined
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    let jwt1 = getInfo().data.Worker;
    // this function is responsible to check if the
    // token is equal to employee or adamant after
    // decrypting that token
    if (!jwt) {
      this.setState({
        Customer: null,
        Worker: null
      });
      return;
    } else if (jwt1 === true) {
      this.setState({
        Worker: jwt
      });
    } else if (jwt1 === false) {
      this.setState({
        Customer: jwt
      });
    }
  }
  render() {
    return (
      <div>
        {/* check if the state the Worker doesn't equal undefined 
      then the permission we'll go to the second child   */}
        {this.state.Worker !== undefined
          ? this.props.children[1]
          : this.props.children[0]}
      </div>
    );
  }
}

export default withRouter(AuthenticatedComponent);
