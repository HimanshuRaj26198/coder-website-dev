import Enrollments from "../../../../models/Enrollments";
import Users from "../../../../models/Users";
import connectToDB from "../../../../lib/mongoose";

// GET single enrollment
export async function GET(request, { params }) {
  try {
    await connectToDB();
    const enrollment = await Enrollments.findById(params.id).populate('userId');
    
    if (!enrollment) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }
    
    return Response.json(enrollment, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch enrollment" }, { status: 500 });
  }
}

// PATCH update enrollment
export async function PATCH(request, { params }) {
  try {
    await connectToDB();
    
    const { courseId, price, paidAmount } = await request.json();
    const enrollment = await Enrollments.findById(params.id);
    
    if (!enrollment) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }

    // Update fields if provided
    if (courseId) enrollment.courseId = courseId;
    if (price) enrollment.price = price;
    if (paidAmount) enrollment.paidAmount = paidAmount;

    await enrollment.save();
    return Response.json(enrollment, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to update enrollment" }, { status: 500 });
  }
}

// DELETE enrollment
export async function DELETE(request, { params }) {
  try {
    await connectToDB();
    
    const enrollment = await Enrollments.findById(params.id);
    if (!enrollment) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }

    // Remove enrollment reference from user
    const user = await Users.findById(enrollment.userId);
    if (user) {
      user.enrollments = user.enrollments.filter(
        id => id.toString() !== enrollment._id.toString()
      );
      await user.save();
    }

    await Enrollments.findByIdAndDelete(params.id);
    return Response.json({ message: "Enrollment deleted successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to delete enrollment" }, { status: 500 });
  }
}