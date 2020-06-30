import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i, style) {
    return (
      <Square
        key={i}
        style={style}
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
        const tileNumber = 3 * i + j;

        if (
          this.props.colorTiles != null &&
          this.props.colorTiles.includes(tileNumber)
        ) {
          eachSquareRow.push(
            this.renderSquare(tileNumber, { border: "2px solid #0000FF" })
          );
        } else {
          eachSquareRow.push(this.renderSquare(tileNumber, null));
        }
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
