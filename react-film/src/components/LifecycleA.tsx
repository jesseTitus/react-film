import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

// display order of execution in log
class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jesse",
    };
    console.log("LifecycleA ctor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecyctelA getDerivedStateFromProps");
    return null;
  }

  componentDidMount(): void {
    console.log("lifecycleA componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log("lifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("lifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "New state to show lifecycle update",
    });
  };

  render() {
    console.log("lifecycyle A render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
