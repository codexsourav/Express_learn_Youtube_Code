const express = require("express");
const route = require("./routs");
const app = express();
app.use(express.json());
app.use(route);

const port = 4000;

app.listen(port, () => {
  console.log("Sour Server rin On " + port);
});
