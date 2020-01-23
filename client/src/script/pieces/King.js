import WhiteKing from "../../assets/images/white/white-king.png";
import BlackKing from "../../assets/images/black/black-king.png";

export default class King {
  constructor(color) {
    this.img = color === "white" ? WhiteKing : BlackKing;
  }

  toString() {
    console.log("King");
  }
}
