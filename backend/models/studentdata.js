const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ExModel = mongoose.model("ExModel", exSchema);
module.exports = ExModel;
