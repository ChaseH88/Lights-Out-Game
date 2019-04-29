import React, { Component, Fragment } from "react";

// Components
import Cell from "./Cell";

// Styled Components
import {
  BoardWrapper,
  BoardBody,
  BoardRow 
} from "./styled-components";

class Board extends Component {

  static defaultProps = {
    numCols: 5,
    numRows: 5,
    chanceLightStartsOn: 0.25
  };

  state = {
    hasWon: false,
    board: this.createBoard(),
    countMoves: 0
  }

  createBoard() {
    let board = [];
    let { numRows, numCols, chanceLightStartsOn } = this.props;
    for (let y = 0; y < numRows; y++) {
      let row = [];
      for (let x = 0; x < numCols; x++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

    flipCellsAround(coord) {
      let count = this.state.countMoves;
      let { numCols, numRows } = this.props;
      let board = this.state.board;
      let [y, x] = coord.split("-").map(Number);
      
      function flipCell(y, x) {
        if (x >= 0 && x < numCols && y >= 0 && y < numRows) {
          board[y][x] = !board[y][x];
        }
      }
      
      flipCell(y, x);
      flipCell(y, x - 1);
      flipCell(y, x + 1);
      flipCell(y - 1, x);
      flipCell(y + 1, x);
      
      let hasWon = board.every(row => row.every(cell => !cell));

      this.setState({
        board,
        hasWon,
        countMoves: count + 1
      });
  }

  // Render the Board
  render(){
    // Show message if win!
    if(this.state.hasWon) return(
      <Fragment>
        <h2>Congratulations!!! You Win!!!</h2>
        <button>Play Again!</button>
      </Fragment>
    )
    let tableBoard = [];
    for (let h = 0; h < this.props.numRows; h++) {
      let row = [];
      for (let i = 0; i < this.props.numCols; i++) {
        let coord = `${h}-${i}`;
        row.push(
          <Cell 
            key={coord}
            isLit={this.state.board[h][i]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tableBoard.push(
        <BoardRow key={h}>
          {row}
        </BoardRow>
      );
    }
    return(
      <BoardWrapper>
        <h1>Lights Out!</h1>
        <BoardBody>
          {tableBoard}
        </BoardBody>
        <div>
          <h3>Number of Moves: {this.state.countMoves}</h3>
        </div>
      </BoardWrapper>
    )
  }
}

export default Board;