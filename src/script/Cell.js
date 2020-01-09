import Image from "../assets/images/white/white-king.svg";

export default class Cell {
  constructor(id, color, isOccupied) {
    this.id = id;
    this.color = color;
    this.imgPath = Image;
    this.isOccupied = isOccupied;
    this.box = document.createElement("div");

    this.setElement();
  }

  setImgPath(img) {
    this.imgPath = img;
  }

  setElement() {
    this.box.classList.add("cell");
    this.box.addEventListener("click", () => console.log(this.id));
    this.box.style.backgroundColor = this.color;
    this.box.setAttribute("id", this.id);

    const img = document.createElement("img");
    img.src = this.imgPath;
    this.box.appendChild(img);
  }

  getElement() {
    return this.box;
  }
}
