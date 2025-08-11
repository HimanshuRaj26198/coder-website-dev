//  api/users/route.js

import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';
import Leads from "@/models/Leads";

export async function POST(request) {
  try {
    const userData = await request.json();
    
    // Check if user exists
    const existingUser = await Leads.findOne({
      $or: [
        { email: userData.email },
        { phone: userData.phone }
      ]
    });
    
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists', userId: existingUser._id },
        { status: 200 }
      );
    }
    
    // Create new user using Mongoose model
    const newUser = new Leads({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    const savedUser = await newUser.save(); // Use save() instead of insertOne
    
    return NextResponse.json(
      { message: 'User created successfully', userId: savedUser._id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await Leads.find({}); // No need for toArray() in Mongoose
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users', details: error.message },
      { status: 500 }
    );
  }
}