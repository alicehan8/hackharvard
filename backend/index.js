// // index.js
// const express = require("express");
// const app = express();
// const port = 3000;
// const cors = require("cors");
// const axios = require("axios"); // For fetching the image
// const fs = require("fs"); // For file system operations
// const path = require("path"); // For path handling

// const parseReceipt = require("./parseReceipt");

// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON body

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// // Updated to handle POST requests
// app.post("/parse", async (req, res) => {
//   console.log("parse in backend");

//   // Extract the file URI from the request body
//   const { fileUri } = req.body;

//   console.log("just got the fileURI:", fileUri);

//   if (!fileUri) {
//     return res.status(400).send("No file URI provided.");
//   }

//   console.log("about to start the try catch block!");

//   try {
//     console.log("currently trying");
//     // Fetch the image from the provided URI
//     const response = await axios.get(fileUri, { responseType: "arraybuffer" });
//     console.log("copped the response");
//     // Specify the path to save the image
//     const imagePath = path.join(__dirname, "uploads", "image.png");

//     // Save the image to the filesystem
//     fs.writeFileSync(imagePath, response.data);
//     console.log("line 39 yurr");
//     // Call your existing parseReceipt function (if it needs the image path)
//     await parseReceipt(imagePath); // Pass the path to parseReceipt if necessary

//     console.log("Image downloaded and saved:", imagePath);

//     // Send a success response
//     res.send("Image uploaded and saved successfully!");
//   } catch (error) {
//     console.error("Error fetching the image:", error);
//     res.status(500).send("Error processing the image.");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
const axios = require("axios"); // For fetching the image
const fs = require("fs"); // For file system operations
const path = require("path"); // For path handling

const parseReceipt = require("./parseReceipt");

app.use(cors());
// app.use(express.json()); // Middleware to parse JSON body
// app.use(express.json({ limit: "10mb" })); // Set a higher limit
app.use(bodyParser.json({ limit: "10mb", extended: true }));
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );
// app.use(bodyParser.text({ limit: "200mb" }));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Updated to handle POST requests
app.post("/parse", async (req, res) => {
  console.log("parse in backend");

  // Extract the file URI from the request body
  const fileUri = req.body.base64;

  // console.log("do we even have a request", req);
  console.log("just got the fileURI:", fileUri);

  // If you want to fetch the image, you can use axios
  if (fileUri) {
    console.log("we have a file URI!");
    try {
      const response = await axios.get(fileUri, {
        responseType: "arraybuffer",
      });

      const imageData = response.data; // lowk just a buffer

      // Now you can process the image data (e.g., save it, parse it, etc.)
      // Example: Save it to disk
      const filePath = path.join(__dirname, "uploads", "receipt.png"); // just replaces the same file in the new uploads folder (we have to make it though)
      console.log("filepath", filePath);
      fs.writeFileSync(filePath, imageData);

      res.send("File received and processed");
    } catch (error) {
      console.error("Error fetching the image:", error);
      return res.status(500).send("Error processing the image");
    }
  } else {
    return res.status(400).json({ error: "No file URI provided" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
