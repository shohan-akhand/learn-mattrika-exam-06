const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  jerseyNo: Number,
});

module.exports = mongoose.model("player", playerSchema);
