const mongoose = require("mongoose");

const ISPSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lowest_price: { type: Number, required: true },
    rating: { type: Number, required: true },
    max_speed: { type: Number, required: true },
    description: { type: String, required: true },
    contact_no: { type: Number, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
      },
  { timestamps: true }
);

const ISP= mongoose.model("ISP", ISPSchema);
module.exports = ISP;
