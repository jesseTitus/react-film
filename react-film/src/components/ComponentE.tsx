import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <div>Component E context {this.context}</div>
        <ComponentF />
      </>
    );
  }
}

export default ComponentE;
