import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }; // use to create fallback UI if error
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong (this is a fallback UI if there is an error)
        </h1>
      );
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
