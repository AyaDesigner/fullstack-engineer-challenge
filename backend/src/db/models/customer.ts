import mongoose from "mongoose";
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

export const Customer = mongoose.model("Customer", CustomerSchema);
