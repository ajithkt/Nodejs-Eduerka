const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

rawdata = fs.readFileSync("./db.json");
jsondata = JSON.parse(rawdata);

app.get("/", (req, res) => {
  res.json(jsondata);
});

app.listen(port, () => {
  console.log("Express listing on port", port);
});
