const router = require("express").Router();
const fetch = require("node-fetch");

router.use("/token", (req, res) => {
  console.log("generando token");
  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", process.env.ClIENT_ID);
  urlencoded.append("client_secret", process.env.ClIENT_SECRET);

  var requestOptions = {
    method: "POST",
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then((response) => response.text())
    .then((result) => res.send(JSON.parse(result)))
    .catch((error) => console.log("error", error));
});

router.use((req, res) => {
  console.log("ruta no encontrada");
  return res.send("Rout not found");
});

module.exports = { router };
