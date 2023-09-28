require("dotenv").config();
const express = require("express");
const app = express();

// middlewares
app.use(express.json());

// routes
app.post("/candidate", (req, res) => {
  console.log(req.body);
  res.send();
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
