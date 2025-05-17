// higher order component
import React from "react";

// a function that accepts an original component and returns a new "improved" component
//  in this example, we encapsulate click count behavior for both the mouse click and hover counter classes
const withCounter = (WrappedComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    // method to incr count property
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // pass down remaining props with spread operator
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
