import WhiteQueen from "../../assets/images/white/white-queen.png";
import BlackQueen from "../../assets/images/black/black-queen.png";

export default class Queen {
  constructor(color) {
    this.img = color === "white" ? WhiteQueen : BlackQueen;
  }

  toString() {
    console.log("Queen");
  }
}
