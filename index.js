const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://todolist-fe-three.vercel.app",
];

app.use(cors({ origin: allowedOrigins }));

app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
