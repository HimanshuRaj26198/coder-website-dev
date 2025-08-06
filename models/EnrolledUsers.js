import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    enrollments: {type: [String]}
  },
  { timestamps: true }
);

// Check if model already exists to avoid redefining it
const EnrolledUsers = models.User || model("Users", UserSchema);

export default EnrolledUsers;