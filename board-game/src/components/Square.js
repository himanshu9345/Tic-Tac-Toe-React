import React from "react";
/*
Components : subclasses , reusable code
Props (properties) : pass data from parent to child class
states : each component can have state to remember things

*/
// class Square extends React.Component {
//   constructor(props) {
//     // Super in all reach subclass
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={props.style}>
      {props.value}
    </button>
  );
}
export default Square;
