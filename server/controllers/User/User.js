const mongoose = require("mongoose");

const user = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
    default: "Jane"
  },
  last_name: { type: String, trim: true, required: true, default: "Doe" },
  address: { type: String, trim: true, required: true },
  age: { type: Number, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  state: { type: String, trim: true, required: true },
  isLame: { type: Boolean, required: true }
});

module.exports = mongoose.model("User", user);
