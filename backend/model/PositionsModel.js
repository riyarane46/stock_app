const {model} = require("mongoose");
const {PositionsSechema} = require("../schemas/PositionsSchema");

const PositionsModel = model("Position", PositionsSechema);

module.exports = {PositionsModel};