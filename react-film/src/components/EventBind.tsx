import React, { Component } from "react";

interface EventBindProps {}

interface EventBindState {
  message: string;
}

class EventBind extends Component<EventBindProps, EventBindState> {
  constructor(props: EventBindProps) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
