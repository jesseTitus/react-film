import React, { Component } from "react";

interface RegCompProps {
  name: string;
}

class RegComp extends Component<RegCompProps> {
  render() {
    console.log("Reg Comp render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp;
