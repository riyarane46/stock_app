const {model} = require("mongoose");
const {HoldingsSechema} = require("../schemas/HoldingsSchema");

const HoldingsModel = model("Holding", HoldingsSechema);

module.exports = {HoldingsModel};