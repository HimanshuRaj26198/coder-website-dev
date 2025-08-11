import PendingEnrollments from "../../../models/PendingEnrollments";
import Users from "../../../models/Users";
import Enrollments from "../../../models/Enrollments"; // Assuming you have this model
import connectToDB from "../../../lib/mongoose"

export async function POST(req) {
    try {
        await connectToDB();
        const { tempId, enrollmentData } = await req.json();

        const { email, phone, firstName, lastName, courseId } = enrollmentData;
        if (!tempId || !enrollmentData) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        let user;

        if (email || phone) {
            user = await Users.findOne({ $or: [{ email }, { phone }] }).populate("enrollments");

            if (!user) {
                if (!firstName || !lastName) {
                    return Response.json(
                        { error: "First name and last name are required for new users" },
                        { status: 400 }
                    );
                }

                user = new Users({
                    firstName,
                    lastName,
                    email,
                    phone,
                    enrollments: []
                });
                await user.save();
            } else {
                if (!user.enrollments) {
                    user.enrollments = [];
                    await user.save();
                } else {
                    const existingEnrollment = await Enrollments.findOne({
                        userId: user._id,
                        courseId
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

        const newPendingEnrollment = new PendingEnrollments({ tempId: tempId, ...enrollmentData, userId: user._id });
        let savedData =  await newPendingEnrollment.save();

        if(savedData){
            return Response.json({ status: true, message: "Pending Enrollment Saved!" }, { status: 201 });
        }else{
            return Response.json({status:false, message :"Error Saving Pending Enrolment"}, {status: 500})
        }

    } catch (err) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const data = await PendingEnrollments.find();
        return Response.json({ status: true, data }, { status: 200 });
    } catch (err) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
