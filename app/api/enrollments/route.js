import Enrollments from "@/models/Enrollments";
import EnrolledUsers from "@/models/EnrolledUsers";
import connectToDB from "@/lib/mongoose";

// GET all enrollments
export async function GET() {
  try {
    await connectToDB();
    const enrollments = await Enrollments.find({}).populate('userId');
    return Response.json(enrollments, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch enrollments" }, { status: 500 });
  }
}

// POST create new enrollment with user check/creation
export async function POST(request) {
  try {
    await connectToDB();
    const allData = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      courseId, 
      price, 
      paidAmount 
    } = allData;
    
    console.log(allData, "All Data in JSON");

    // Validate required fields
    if (!courseId || price === undefined || paidAmount === undefined) {
      return Response.json({ error: "Missing required enrollment fields" }, { status: 400 });
    }

    if (!email && !phone) {
      return Response.json({ error: "Email or phone is required to identify user" }, { status: 400 });
    }

    // Find or create user
    let user;
    if (email || phone) {
      user = await EnrolledUsers.findOne({ 
        $or: [{ email }, { phone }] 
      }).populate('enrollments');

      if (!user) {
        if (!firstName || !lastName) {
          return Response.json({ error: "First name and last name are required for new users" }, { status: 400 });
        }

        user = new EnrolledUsers({
          firstName,
          lastName,
          email,
          phone,
          enrollments: [] // Initialize as empty array
        });
        await user.save();
      } else {
        // Ensure enrollments array exists for existing users
        if (!user.enrollments) {
          user.enrollments = [];
          await user.save();
        } else {
          // Check if user is already enrolled in this course
          const existingEnrollment = await Enrollments.findOne({
            userId: user._id,
            courseId: courseId
          });

          if (existingEnrollment) {
            return Response.json(
              { 
                error: "You are already enrolled in this course",
                existingEnrollment 
              }, 
              { status: 409 }
            );
          }
        }
      }
    }

    // Create new enrollment
    const newEnrollment = new Enrollments({
      userId: user._id,
      courseId,
      price,
      paidAmount,
      experience: allData.experience,
      motivation: allData.motivation,
      paymentMethod: allData.paymentMethod,
      paymentPlan: allData.paymentPlan,
      preferredSchedule: allData.preferredSchedule,
      status: "active" // Add enrollment status
    });

    await newEnrollment.save();

    // Add enrollment to user's enrollments array
    user.enrollments.push(newEnrollment._id);
    await user.save();

    return Response.json({ 
      enrollment: newEnrollment, 
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
      },
      message: "Enrollment created successfully"
    }, { status: 201 });

  } catch (error) {
    console.error("Enrollment creation error:", error);
    return Response.json({ 
      error: "Failed to create enrollment",
      details: error.message 
    }, { status: 500 });
  }
}