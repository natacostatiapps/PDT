const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

routes.get("/mercadorias", (req, res) => {
  return res.status(200).json({ message: "Mercadorias" });
});


module.exports = routes;
 