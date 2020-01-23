import WhiteRook from "../../assets/images/white/white-rook.png";
import BlackRook from "../../assets/images/black/black-rook.png";

export default class Rook {
  constructor(color) {
    this.img = color === "white" ? WhiteRook : BlackRook;
  }

  toString() {
    console.log("Rook");
  }
}
