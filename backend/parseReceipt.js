// index.js
// const express = require('express');
// const multer = require('multer');
// const axios = require('axios');
// const FormData = require('form-data');
// const router = express.Router();

// const app = express();
// // const port = 3000;

// require('dotenv').config();

// Set up Multer for file uploads
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// app.get('/parse', (req, res) => {
//     res.send('trying parse');
//     console.log("hello>?");
// });

// Define a route for uploading receipts
// router.post('/api/upload-receipt', upload.single('receipt'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   try {
//     console.log("trying post");
//     // Prepare form data for Taggun
//     const formData = new FormData();
//     formData.append('file', req.file.buffer, { filename: req.file.originalname });

//     // Send the file to Taggun
//     const response = await axios.post('https://api.taggun.io/v1/extract', formData, {
//       headers: {
//         ...formData.getHeaders(),
//         'Authorization': `Bearer ${process.env.TAGGUN_API_KEY}`, // Replace with your actual API key
//       },
//     });
//     console.log("got response");
//     // Extract data from Taggun's response
//     const receiptData = response.data;

//     // Send the extracted data back to the client
//     res.json(receiptData);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error processing receipt with Taggun.');
//   }
// });

// Start the server
// app.listen(`${process.env.port}`, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// module.exports = router;

function parseReceipt() {
    // Your parsing logic here
    console.log("Parsing receipt...");
    
}

module.exports = parseReceipt;
