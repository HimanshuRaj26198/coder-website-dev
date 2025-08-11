import PendingEnrollments from "../../../../models/PendingEnrollments";
import connectToDB from "../../../../lib/mongoose"

export async function GET(request, { params }) {

    const { id } = await params;
    try {
        await connectToDB();
        const data = await PendingEnrollments.findOne({ txnid: id });
        return new Response(JSON.stringify({ status: true, data }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ status: false, error: err.message }), { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();

    try {
        await PendingEnrollments.findOneAndUpdate({ tempId: id }, body);
        return new Response(JSON.stringify({ status: true, message: "Enrollment Completed Successfully" }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ status: false, error: err.message }), { status: 500 });
    }
}
