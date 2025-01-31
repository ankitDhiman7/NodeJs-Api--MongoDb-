const express = require("express");
const connectDB = require("./db");
const itemRoute = require("./routes/item");
const loginRoute = require("./routes/login");
require("dotenv").config();

const app = express();

connectDB();

const PORT = process.env.DEV_PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", loginRoute);
app.use("/item", itemRoute);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
