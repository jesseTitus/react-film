import React, { Component } from "react";

class User2 extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}

export default User2;
