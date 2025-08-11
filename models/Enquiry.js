import { Schema, model, models } from "mongoose";

const EnquirySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Leads", required: true },
    source: { type: String, required: true },
    status: { type: String, default: "pending" },
    // Add other dynamic fields as needed
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, strict: false }
);
// comment 1
const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema);

export default Enquiry;