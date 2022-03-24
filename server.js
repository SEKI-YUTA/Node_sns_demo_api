const express = require("express");
const fs = require("fs");
let fileData;
fs.readFile("./apiData.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    fileData = data;
  }
});
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is sns demo API");
});

app.get("/timeline", (req, res) => {
  let data = JSON.parse(fileData);
  res.json(data["timeline"]);
});
app.get("/suggest", (req, res) => {
  let data = JSON.parse(fileData);
  res.json(data["suggest"]);
});
app.get("/notification", (req, res) => {
  let data = JSON.parse(fileData);
  res.json(data["notification"]);
});
app.get("/directmail", (req, res) => {
  let data = JSON.parse(fileData);
  res.json(data["directmail"]);
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}port`);
});
