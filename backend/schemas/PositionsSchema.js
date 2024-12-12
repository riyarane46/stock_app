const {Schema} = require("mongoose");

const PositionsSechema = new Schema ({
    name: String,
    product: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
});

module.exports = {PositionsSechema};