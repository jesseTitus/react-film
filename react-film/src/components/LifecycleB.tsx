import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jesse",
    };
    console.log("LifecycleB ctor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecyctelB getDerivedStateFromProps");
    return null;
  }

  componentDidMount(): void {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log("lifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log("lifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("lifecycleB componentDidUpdate");
  }

  render() {
    console.log("lifecycyle B render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
