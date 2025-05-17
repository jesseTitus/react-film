import React, { Component } from "react";
import type { ReactNode } from "react";

// support for both render props and children props
interface Counter2Props {
  render?: (count: number, incrementCount: () => void) => ReactNode;
  children?: (count: number, incrementCount: () => void) => ReactNode;
}

interface Counter2State {
  count: number;
}

// encapsulate common functionality for click and hover components
class Counter2 extends Component<Counter2Props, Counter2State> {
  constructor(props: Counter2Props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { render, children } = this.props;
    const renderFunction = render || children;

    if (!renderFunction) {
      throw new Error("Counter2 requires either a render prop or children");
    }

    return <div>{renderFunction(this.state.count, this.incrementCount)}</div>;
  }
}

export default Counter2;
