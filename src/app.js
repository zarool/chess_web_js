import "./assets/style/main.scss";
import Board from "./script/Board";

const COLS = 8,
  ROWS = 8;

document.addEventListener("DOMContentLoaded", function() {
  const board = new Board("chessBoard", ROWS, COLS);
  board.render();
});

function setPawns() {}
