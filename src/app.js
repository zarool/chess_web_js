import "./assets/style/main.scss";

let pawns = [];
pawns[0] = "bishop.svg";

for (let i = 0; i < 64; i++) {
  let g = document
    .getElementById("mainChessBoard")
    .appendChild(document.createElement("div"));
  g.style.backgroundColor =
    parseInt(i / 8 + i) % 2 == 0 ? "#251300" : "#fdf3c7";
  g.className = "grid";
  g.setAttribute("id", i);
}
