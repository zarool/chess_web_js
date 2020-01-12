import Cell from "./Cell";
export default class Board {
  constructor(id, rows, cols) {
    this.cells = [];
    this.rows = rows;
    this.cols = cols;
    this.chessBoard = document.getElementById(id);
    this.updateBoardHeight();
    this.initialize();

    window.addEventListener("resize", this.updateBoardHeight);
  }

  setPieces() {
    //funkcja do ustawienia wszystkich pionków :)))))))
  }

  initialize() {
    for (let i = 0; i < this.cols * this.rows; i++) {
      const cellColor = parseInt(i / 8 + i) % 2 == 0 ? "#251300" : "#fdf3c7";
      this.cells[i] = new Cell(i, cellColor, false);
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
