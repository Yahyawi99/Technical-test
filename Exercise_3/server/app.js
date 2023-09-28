require("dotenv").config();

const express = require("express");
const app = express();

const { writeFile } = require("fs/promises");

// middlewares
app.use(express.json());

// routes
app.post("/candidate", async (req, res) => {
  //   console.log(req);
  //   console.log(req.file);
  //   try {
  //     await writeFile("data.json", JSON.stringify(req.body));
  //     return res.status(200);
  //   } catch (error) {
  //     console.log(error);
  //     return;
  //   }
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

// // Configure Multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Define the directory where you want to save the files
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname); // Use the original file name
//   },
// });

// const upload = multer({ storage });
