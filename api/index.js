const app = require("express")();

app.get("/", function(req, res) {
  console.log("Hello from client");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever started on port ${port}`));
