const express = require("express");
const app = express();
app.use(express.static("public"));
const port=3000;

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(port, function() {
  console.log("Running on port 3000.");
});
