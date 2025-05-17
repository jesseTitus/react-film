import React, { Component } from "react";

interface HoverCounter2Props {
  count: number;
  incrementCount: () => void;
}

class HoverCounter2 extends Component<HoverCounter2Props> {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
  }
}

export default HoverCounter2;
