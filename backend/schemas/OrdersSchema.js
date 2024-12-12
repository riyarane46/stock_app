const {Schema} = require("mongoose");

const OrdersSechema = new Schema ({
    name: String,
    qty: Number,
    price: Number,
    mode: String
});

module.exports = {OrdersSechema};