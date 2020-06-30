import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(this.state.squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  // }

  render() {
    let gameBoard = [];
    for (let i = 0; i < 3; i++) {
      let eachSquareRow = [];
      for (let j = 0; j < 3; j++) {
        eachSquareRow.push(this.renderSquare(3 * i + j));
      }
      gameBoard.push(
        <div key={"row" + i} className="board-row">
          {eachSquareRow}
        </div>
      );
    }
    return <div>{gameBoard}</div>;
  }
}

export default Board;
