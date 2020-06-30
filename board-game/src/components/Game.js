import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          clickedIdx: null,
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  jumpTo(step, e) {
    // console.log(e);
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares, clickedIdx: i }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      // console.log(move);
      const row = Math.floor(step.clickedIdx / 3 + 1);
      const col = (step.clickedIdx % 3) + 1;
      const desc = move
        ? "Move by at (" + row + "," + col + ")"
        : "Go to game start";
      return (
        <li key={move}>
          {this.state.stepNumber === move ? (
            <button
              style={{ border: "2px solid #000000" }}
              onClick={(e) => this.jumpTo(move, e)}
            >
              {desc}
            </button>
          ) : (
            <button onClick={(e) => this.jumpTo(move, e)}>{desc}</button>
          )}
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
