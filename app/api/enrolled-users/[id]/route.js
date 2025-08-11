import Users from "@/models/Users";
import connectToDB from "@/lib/mongoose";

// GET single user by ID
export async function GET(request, { params }) {
  try {
    await connectToDB();
    const user = await Users.findById(params.id);
    
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch user", details: error.message },
      { status: 500 }
    );
  }
}

// PATCH update user by ID
export async function PATCH(request, { params }) {
  try {
    await connectToDB();
    
    const { firstName, lastName, email, phone } = await request.json();
    const user = await Users.findById(params.id);
    
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // Check for duplicate email or phone
    if (email || phone) {
      const existingUser = await Users.findOne({
        $and: [
          { _id: { $ne: params.id } }, // Exclude current user
          { $or: [] }
        ]
      });
      
      // Dynamically add email/phone to $or condition
      const orConditions = [];
      if (email) orConditions.push({ email });
      if (phone) orConditions.push({ phone });
      existingUser.$and[1].$or = orConditions;

      if (existingUser) {
        return Response.json(
          { error: "Email or phone already in use by another user" },
          { status: 409 }
        );
      }
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    await user.save();
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to update user", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE user by ID
export async function DELETE(request, { params }) {
  try {
    await connectToDB();
    
    const user = await Users.findByIdAndDelete(params.id);
    
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    
    return Response.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: "Failed to delete user", details: error.message },
      { status: 500 }
    );
  }
}