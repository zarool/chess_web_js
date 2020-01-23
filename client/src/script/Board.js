import Cell from "./Cell";
import King from "./pieces/King";
import Rook from "./pieces/Rook";
import Pawn from "./pieces/Pawn";
import Queen from "./pieces/Queen";
import Bishop from "./pieces/Bishop";
import Knight from "./pieces/Knight";

export default class Board {
  constructor(id, rows, cols) {
    this.cells = [];
    this.rows = rows;
    this.cols = cols;
    this.chessBoard = document.getElementById(id);
    this.updateBoardHeight();
    this.initialize();
    this.setPieces();

    window.addEventListener("resize", this.updateBoardHeight);
  }

  setPieces() {
    ///black
    this.cells[56].setPiece(new Rook("black"));
    this.cells[57].setPiece(new Knight("black"));
    this.cells[58].setPiece(new Bishop("black"));
    this.cells[59].setPiece(new King("black"));
    this.cells[60].setPiece(new Queen("black"));
    this.cells[61].setPiece(new Bishop("black"));
    this.cells[62].setPiece(new Knight("black"));
    this.cells[63].setPiece(new Rook("black"));

    for (let i = 48; i < 56; i++) {
      this.cells[i].setPiece(new Pawn("black"));
    }

    ///white
    this.cells[0].setPiece(new Rook("white"));
    this.cells[1].setPiece(new Knight("white"));
    this.cells[2].setPiece(new Bishop("white"));
    this.cells[3].setPiece(new King("white"));
    this.cells[4].setPiece(new Queen("white"));
    this.cells[5].setPiece(new Bishop("white"));
    this.cells[6].setPiece(new Knight("white"));
    this.cells[7].setPiece(new Rook("white"));

    for (let i = 8; i < 16; i++) {
      this.cells[i].setPiece(new Pawn("white"));
    }
  }

  initialize() {
    for (let i = 0; i < this.cols * this.rows; i++) {
      const cellColor = parseInt(i / 8 + i) % 2 == 0 ? "#251300" : "#fdf3c7";
      this.cells[i] = new Cell(i, cellColor);
    }
  }
  render() {
    this.chessBoard.innerHTML = null;

    for (let i = 0; i < this.cells.length; i++) {
      this.chessBoard.appendChild(this.cells[i].getElement());
    }
  }

  updateBoardHeight() {
    this.chessBoardWidth = this.chessBoard.clientWidth;
    this.chessBoard.style.height = `${this.chessBoardWidth}px`;
  }
}
