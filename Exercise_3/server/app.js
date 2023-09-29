require("dotenv").config();

const { writeFile } = require("fs/promises");
const path = require("path");

const express = require("express");
const app = express();

const fileUpload = require("express-fileupload");

// middlewares
app.use(fileUpload());
app.use(express.static("../client/build"));

// Post route
const dataFolderPath = path.join(__dirname, "data");

app.post("/candidate", async (req, res) => {
  const { file: CV } = req.files;
  const { data } = req.body;

  try {
    // create CV file
    CV.mv(path.join(dataFolderPath, CV.name));

    // craete JSON file
    await writeFile(path.join(dataFolderPath, "form.json"), data);

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong please try again!" });
  }
});

// start
const port = process.env.PORT || 8000;
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
