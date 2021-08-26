const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(req, res){
  res.sendFile(path.join(express.static(__dirname, "public")));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})