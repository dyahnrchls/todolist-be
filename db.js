const mongoose = require("mongoose");
require('dotenv').config();

const dbURI =
  process.env.DB_URI ||
  "mongodb://localhost/todos";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected successfully");
});
