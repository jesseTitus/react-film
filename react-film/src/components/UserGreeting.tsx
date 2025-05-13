import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <div>Welcome broski</div>
        <div>Welcome guest</div>
      </div>
    );
  }
}

export default UserGreeting;
