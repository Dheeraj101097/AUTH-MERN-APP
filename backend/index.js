const express = require("express");
const app = express();
require("dotenv").config();
require("./models/db"); //after making db.js require here
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/authRouter.js");
const ExModel = require("./models/studentdata.js");
const mongoose = require("mongoose");
//
const PORT = process.env.PORT || 8080;

//
app.set("view engine", "ejs");

//
app.get("/", (req, res) => {
  res.send("/ route page");
});

//

app.use(bodyParser.json());
app.use(cors());

// routes getting from authrouter

app.use("/auth", authRouter);
//

app.get("/getdata", async (req, res) => {
  try {
    const data = await ExModel.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
app.listen(PORT, (req, res) => {
  console.log(`listening ${PORT}`);
});
