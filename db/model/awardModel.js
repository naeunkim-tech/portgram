const { model }  = require("mongoose");

const awardSchema = require("../schemas/awardSchema");

const AwardModel = model("Award", awardSchema);

module.exports = AwardModel;