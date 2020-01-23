import WhiteBishop from "../../assets/images/white/white-bishop.png";
import BlackBishop from "../../assets/images/black/black-bishop.png";

export default class Bishop {
  constructor(color) {
    this.img = color === "white" ? WhiteBishop : BlackBishop;
  }

  toString() {
    console.log("Bishop");
  }
}
