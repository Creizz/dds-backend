const express = require("express");

// crear servidor
const app = express();

// controlar ruta
app.get("/", (req, res) => {
  res.send("Backend inicial DDS-EXPRESS!");
});

// levantar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`sitio escuchando en el puerto ${port}`);
  });