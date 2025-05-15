import React, { PureComponent } from "react";

interface PureCompProps {
  name: string;
}

class PureComp extends PureComponent<PureCompProps> {
  render() {
    console.log("Pure Comp render");
    return <div>PureComponent {this.props.name}</div>;
  }
}

export default PureComp;
