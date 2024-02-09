const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const editor = require("./router/editor.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/editor", editor);

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to the database");
  } catch (err) {
    console.error(err.message);
  }
}

connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
