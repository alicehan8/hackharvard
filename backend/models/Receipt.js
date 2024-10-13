const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({
    "items": [
        {
          name: { type: String, required: true },
          expiration_date: { type: String, required: false },
        },
    ],
})

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;