const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./token.routes");
const cors = require("cors");

if (process.env.NODE_ENV == undefined) {
  let result = dotenv.config();
  if (result.error) {
    console.log("Error");
  } else {
    console.log("Variables de entorno configuradas");
  }
}

const app = express();
app.use(cors());

app.use((req, res, next) => {
  console.log("app inicializada");
  next();
});
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("server running on port ", process.env.PORT);
});
