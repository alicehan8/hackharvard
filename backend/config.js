// trying to configure mongo
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

module.exports = {
    mongoURI,
}