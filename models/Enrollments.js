import { Schema, model, models } from "mongoose";
import { string } from "zod";

const EnrollmentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    courseId: {type: String, required: true},
    price: {type: Number, required: true},
    paidAmount: {type: String, required: true},
    // Add other dynamic fields as needed
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, strict: false }
);

const Enrollments = models.Enrollments || model("Enrollments", EnrollmentSchema);

export default Enrollments;