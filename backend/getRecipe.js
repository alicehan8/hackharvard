const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { OpenAI } = require('openai');
const Receipt = require('./models/Receipt');

require('dotenv').config();

const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});

async function getAllIngredients() {
  try {
    const receipts = await Receipt.find({});
    console.log(receipts);
    return receipts;
  } catch (error) {
    console.error('error fetching receipts:', error);
    throw error;
  }
}


async function getRecipe() {
  const items = await getAllIngredients();

  const prompt = `You are a chef who is able to quickly and easily put together a recipe with random ingredients. Given the following ingredients and their expiration dates, put together a quick meal that a college student can make in their apartment that will use the ingredients that are going to expire soonest: 
  Here are the ingredients: ${items.items}`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.2,
    });

    console.log(response.choices[0].message.content);

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("Error with OpenAI API: ", error);
    throw error;
  }
}

module.exports = getRecipe;

