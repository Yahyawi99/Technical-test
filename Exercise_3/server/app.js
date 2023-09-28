require("dotenv").config();

const express = require("express");
const app = express();

const { writeFile } = require("fs/promises");

// middlewares
app.use(express.json());

// routes
app.post("/candidate", async (req, res) => {
  try {
    await writeFile("data.json", JSON.stringify(req.body));
    return res.status(200);
  } catch (error) {
    console.log(error);
    return;
  }
});

// start
const port = process.env.PORT || 5000;
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Listening on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
