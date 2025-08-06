import User from "@/models/User";
import Enquiry from "@/models/Enquiry";

// PUT /api/users/[id]
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const userData = await request.json();
    // comment
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...userData, updatedAt: new Date() },
      { new: true } // Returns the updated document
    );
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'User updated successfully', user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id]
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Delete user and their enquiries
    await User.findByIdAndDelete(id);
    await Enquiry.deleteMany({ userId: id }); // No need for ObjectId conversion
    
    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete user', details: error.message },
      { status: 500 }
    );
  }
}