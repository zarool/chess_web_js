import WhitePawn from "../../assets/images/white/white-pawn.png";
import BlackPawn from "../../assets/images/black/black-pawn.png";

export default class Pawn {
  constructor(color) {
    this.img = color === "white" ? WhitePawn : BlackPawn;
  }

  toString() {
    console.log("Pawn");
  }
}
