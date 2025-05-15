import React, { Component } from 'react'

class Input extends Component<{}, {}> {
    private inputRef: React.RefObject<HTMLInputElement | null>;

    constructor(props: {}) {
      super(props)
      this.inputRef = React.createRef<HTMLInputElement>()
    }
    focusInput() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}

export default Input