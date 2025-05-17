import React, { Component } from "react";

interface ClickCounter2Props {
  count: number;
  incrementCount: () => void;
}

class ClickCounter2 extends Component<ClickCounter2Props> {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default ClickCounter2;
