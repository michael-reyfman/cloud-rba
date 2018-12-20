const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
    {
      age: Number,
      gender: String,
      red_blood_cells: Number,
      white_blood_cells: Number,
      color: Number,
      trombs: Number,
      hemoglobin: Number,
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
