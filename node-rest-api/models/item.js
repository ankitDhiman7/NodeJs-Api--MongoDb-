const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const itemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  }
);

//itemSchema.plugin(mongooseSequence(mongoose), { inc_field: 'itemid' });
const itemModel = mongoose.model("item", itemSchema);

module.exports = itemModel;
