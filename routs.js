const express = require("express");
const route = express.Router();
const controller = require("./controller/about_cont");
const api = require("./controller/apidata");
route.get("/", controller.home);
route.post("/api", api.api);

route.get("/about/:name?/:id", controller.about);

module.exports = route;
