import React from "react";
/*
Components : subclasses , reusable code
Props (properties) : pass data from parent to child class
states : each component can have state to remember things

*/
class Square extends React.Component {
  constructor(props) {
    // Super in all reach subclass
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}
export default Square;
