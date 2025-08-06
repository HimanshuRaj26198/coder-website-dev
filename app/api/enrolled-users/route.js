import EnrolledUsers from "@/models/EnrolledUsers";
import  connectToDB  from "@/lib/mongoose";

// GET all users
export async function GET() {
  try {
    await connectToDB();
    const users = await EnrolledUsers.find({});
    return Response.json(users, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch users", details: error.message },
      { status: 500 }
    );
  }
}

// POST create new user
export async function POST(request) {
  try {
    await connectToDB();
    
    const { firstName, lastName, email, phone } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await EnrolledUsers.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingUser) {
      return Response.json(
        { error: "User with this email or phone already exists" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = new EnrolledUsers({
      firstName,
      lastName,
      email,
      phone,
      enrollments: []
    });

    await newUser.save();
    
    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Failed to create user", details: error.message },
      { status: 500 }
    );
  }
}