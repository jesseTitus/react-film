import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

import React, { Component } from "react";

class ParentComp extends Component<{}, { name: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: "Jesse",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Jesse",
      });
    }, 2000);
  }
  render() {
    console.log("******************Parent Comp render");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
