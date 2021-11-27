import mongoose from "mongoose";
const { Schema } = mongoose;

const PolicySchema = new Schema({
  customer: {
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
  },
  provider: {
    type: String,
    required: true,
  },
  policyNumber: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  insuranceType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const Policy = mongoose.model("Policy", PolicySchema);
