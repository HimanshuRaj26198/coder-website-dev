//   api/enquiries/route.js
import clientPromise from '@/lib/db';
import connectToDB from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import Leads from '../../../models/Leads';
import Enquiry from '@/models/Enquiry';

export async function POST(request) {
  try {
    await connectToDB();
    
    const enquiryData = await request.json();
    
    // Check if user exists
    const user = await Leads.findOne({
      $or: [
        { email: enquiryData.email },
        { phone: enquiryData.phone }
      ]
    });
    
    let userId;
    if (!user) {
      // Create new user using Mongoose
      const newUser = new Leads({
        firstName: enquiryData.firstName,
        lastName: enquiryData.lastName,
        email: enquiryData.email,
        phone: enquiryData.phone,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      const savedUser = await newUser.save();
      userId = savedUser._id;
    } else {
      userId = user._id;
    }
    
    // Create enquiry using Mongoose model
    const newEnquiry = new Enquiry({
      userId,
      source: enquiryData.source,
      ...enquiryData,
      createdAt: new Date(),
      status: 'pending'
    });
    
    const savedEnquiry = await newEnquiry.save();
    
    // Send email
    await sendEmail({
      subject: "Test Subject",
      to: enquiryData.email,
      source: enquiryData.source,
      text: "Hello There"
    });
    
    return NextResponse.json(
      { 
        message: 'Enquiry created successfully', 
        enquiryId: savedEnquiry._id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error, "Error in creating enquiry!")
    return NextResponse.json(
      { error: 'Failed to create enquiry', details: error.message },
      { status: 500 }
    );
  }
}


// GET /api/enquiries?userId=123
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const source = searchParams.get('source');
    
    let query = {};
    if (userId) query.userId = userId; // No ObjectId conversion needed
    if (source) query.source = source;
    
    const enquiries = await Enquiry.find(query); // No toArray() in Mongoose
    
    return NextResponse.json(enquiries);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch enquiries', details: error.message },
      { status: 500 }
    );
  }
}