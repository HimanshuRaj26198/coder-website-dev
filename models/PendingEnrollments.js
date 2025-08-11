import { Schema, model, models } from "mongoose";
import { type } from "os";

const PendingEnrollmentsSchema = new Schema(
  {
    tempId: { type: String, required: true },
    txnid: {type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    courseId: {type: String, required: true},
    price: {type: Number, required: true},
    paidAmount: {type: String, required: true},
    // Add other dynamic fields as needed
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, strict: false }
);

const PendingEnrollments = models.PendingEnrollments || model("PendingEnrollments", PendingEnrollmentsSchema);

export default PendingEnrollments;