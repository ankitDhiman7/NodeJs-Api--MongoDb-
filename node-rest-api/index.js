const express = require("express");
const connectDB = require("./db");
const itemRoute = require("./routes/item");

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/item", itemRoute);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
