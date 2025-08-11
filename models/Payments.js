import { Schema, model, models } from "mongoose";
import { type } from "os";
import { string } from "zod";

const PaymentsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    txnid: {type: String, required: true},
    amount: {type: String, required: true},
    mode: {type: String, required: true},
    status: {type: String, required: true},
    cardCategory : {type: String},
    net_amount_debit: {type: String},
    addedon: {type: Date},
    productinfo: {type: String},
    firstname: {type: String},
    email: {type: String},
    phone: {type: String},
    // Add other dynamic fields as needed
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, strict: false }
);

const Payments = models.Payments || model("Payments", PaymentsSchema);

export default Payments;