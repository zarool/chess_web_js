import WhiteKnight from "../../assets/images/white/white-knight.png";
import BlackKnight from "../../assets/images/black/black-knight.png";

export default class Knight {
  constructor(color) {
    this.img = color === "white" ? WhiteKnight : BlackKnight;
  }

  toString() {
    console.log("Knight");
  }
}
