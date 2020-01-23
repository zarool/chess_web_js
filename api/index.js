const app = require("express")();

let game;

app.get("/", function(req, res) {
  console.log("Hello from client");
});

app.get("/create_game");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever started on port ${port}`));
