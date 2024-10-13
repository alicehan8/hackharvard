// index.js
// const express = require('express');
// const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const { Configuration, OpenAI } = require('openai');
// const router = express.Router();

// const app = express();
// // const port = 3000;

require('dotenv').config();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,  // Use your OpenAI API key here
// });

const openai = new OpenAI({
    api_key: process.env.OPENAI_API_KEY,
});

async function getData(items, purchaseDate) {
    const prompt = `Provide expiration dates for the following items purchased on ${purchaseDate}. 
Format the output as a JSON array of objects, where each object contains the shortened item name as "name" and its expiration date as "expiration date".
Items:
${items.join(", ")}`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
            temperature: 0.2,
        });

        console.log(response.choices[0].message.content);

        return JSON.parse(response.choices[0].message.content);
    } catch (error) {
        console.error("Error with OpenAI API: ", error);
        throw error;
    }
}


function parseReceipt(image) {

    const form = new FormData();
    form.append('extractTime', 'false');
    form.append('extractLineItems', 'true');
    form.append('refresh', 'false');
    form.append('incognito', 'false');

    // Use the Multer-generated filename, but append the correct extension
    const fileExtension = image.mimetype.split('/')[1];
    const fileName = `${image.filename}.${fileExtension}`;

    form.append('file', fs.createReadStream(image.path), {
        filename: fileName,
        contentType: image.mimetype
    });

    const options = {
        method: 'POST',
        url: 'https://api.taggun.io/api/receipt/v1/verbose/file',
        headers: {
            ...form.getHeaders(), // Include form-data headers (important!)
            accept: 'application/json',
            apikey: process.env.TAGGUN_API_KEY // Your Taggun API key from .env file
        },
        data: form // Attach the form data
    };

    // fetch('https://api.taggun.io/api/receipt/v1/simple/file', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    return axios(options)
        .then(response => {

            const receiptData = response.data.entities;
            const productTexts = receiptData.productLineItems.map(item => item.text);
            const today = new Date();
            const productInfo = getData(productTexts, today);
            console.log("products", productInfo);
            // now we need to parse this data, get the expiration dates, and send this info to the database 
        })
        .catch(err => {
            console.error('Error from API:', err.response ? err.response.data : err.message);
        });
}

module.exports = parseReceipt;
