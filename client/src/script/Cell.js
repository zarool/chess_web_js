import Queen from "./pieces/Queen";

export default class Cell {
  constructor(id, color, piece) {
    this.id = id;
    this.color = color;
    this.isOccupied = piece ? true : false;
    this.box = document.createElement("div");
    this.piece = piece;
    this.setElement();
  }

  setImgPath(img) {
    this.imgPath = img;
  }

  setPiece(piece) {
    this.piece = piece;
    const image = new Image();
    image.src = piece.img;
    this.box.appendChild(image);
  }

  removePiece() {
    this.piece = null;
    // this.box.
  }

  setElement() {
    this.box.classList.add("cell");
    this.box.addEventListener("click", () => console.log());
    this.box.style.backgroundColor = this.color;
    this.box.setAttribute("id", this.id);
  }

  getElement() {
    return this.box;
  }
}
