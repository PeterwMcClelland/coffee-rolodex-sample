const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    espresso_gs: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    tds: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
      },
      roast: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model("coffee", coffeeSchema);