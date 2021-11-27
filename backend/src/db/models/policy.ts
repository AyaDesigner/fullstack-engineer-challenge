import mongoose from "mongoose";
const { Schema } = mongoose;

const PolicySchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
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
    type: Schema.Types.ObjectId,
    ref: "InsuranceType",
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "InsuranceStatus",
    required: true,
  },
});

export const Policy = mongoose.model("Policy", PolicySchema);
