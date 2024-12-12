const {model} = require("mongoose");
const {OrdersSechema} = require("../schemas/OrdersSchema");

const OrdersModel = model("Order", OrdersSechema);

module.exports = {OrdersModel};