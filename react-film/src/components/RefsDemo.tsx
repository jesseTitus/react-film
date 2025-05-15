import React, { Component } from "react";

class RefsDemo extends Component<{}, {}> {
  private inputRef: React.RefObject<HTMLInputElement | null>;
  private cbRef: HTMLInputElement | null;
  private setCbRef: (element: HTMLInputElement) => void;

  constructor(props: {}) {
    super(props);

    // ref method 1
    this.inputRef = React.createRef<HTMLInputElement | null>();
    // ref alternate method
    this.cbRef = null; // create property
    this.setCbRef = (element: HTMLInputElement) => {
      //create method that asigns prop with a DOM element asssigned as parameter
      this.cbRef = element;
    };
  }
  componentDidMount(): void {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current?.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}> Click</button>
      </div>
    );
  }
}

export default RefsDemo;
