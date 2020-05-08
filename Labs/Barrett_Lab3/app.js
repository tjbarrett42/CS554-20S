// 2020 Timothy Barrett
// CS554 Web Programming II
// I pledge my honor that I have abided by the Stevens honor system.
const express = require("express");
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log( "Your routes will be running on http://localhost:3000");
});
