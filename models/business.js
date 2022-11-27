const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: { type: String, required: true },
  turn: { type: String, required: true },
  social: { type: String, required: true },
  addressFiscal: { type: String, required: true },
  owner: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  secondPhone: { type: String, required: true },
  attends: { type: String, required: true },
  attendsSecond: { type: String, required: true },
});

module.exports = mongoose.model("Business", businessSchema);
