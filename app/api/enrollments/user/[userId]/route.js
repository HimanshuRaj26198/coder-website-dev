import Enrollments from "../../../../../models/Enrollments";
import Users from "../../../../../models/Users";
import  connectToDB  from "../../../../../lib/mongoose";

// GET all enrollments for a specific user
export async function GET(request, { params }) {
  try {
    await connectToDB();
    
    // Check if user exists
    const user = await Users.findById(params.userId);
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const enrollments = await Enrollments.find({ userId: params.userId });
    return Response.json(enrollments, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch user enrollments" }, { status: 500 });
  }
}