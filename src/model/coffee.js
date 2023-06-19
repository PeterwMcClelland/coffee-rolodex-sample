const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    espresso_gs: {
        type: String,
        require: true
    },
    output: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    tds: {
        type: String,
        require: true
    },
    percent: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: false,
      },
});

module.exports = mongoose.model("coffee", coffeeSchema);