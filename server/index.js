const express = require("express");
const path = require("path");
const app = express();
const port = 3011;

app.use(express.json());
app.use(express.static(path.join(__dirname,"../client/dist")));

app.listen(port, (err) => {
if(err){
  console.log(err);
} else {
  console.log("The server is listening on port ", port);
}
});


