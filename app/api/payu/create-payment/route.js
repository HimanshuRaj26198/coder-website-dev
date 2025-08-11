import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    // Get data from request body
    const {
      amount,
      email,
      firstName,
      courseId,
      courseName,
      phone
    } = await request.json();
    
    // PayU credentials from environment variables
    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const merchantSalt = process.env.PAYU_MERCHANT_SALT;
    const merchantId = process.env.PAYU_MERCHANT_ID;
    
    if (!merchantKey || !merchantSalt || !merchantId) {
      throw new Error('PayU credentials not configured');
    }
    
    // Generate transaction ID
    const txnid = `codercrafter-${Date.now()}`;
    
    // Product info (simplified)
    const productinfo = courseName;
    
    // Generate hash
    const hashString = `${merchantKey}|${txnid}|${amount}|${productinfo}|${firstName}|${email}|||||||||||${merchantSalt}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');
    
    // PayU payment data
    const paymentData = {
      key: merchantKey,
      txnid,
      amount,
      productinfo,
      firstname: firstName,
      email,
      phone: phone,
      surl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      furl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failure`,
      hash,
      service_provider: 'payu_paisa'
    };

    return NextResponse.json({
      paymentUrl: process.env.PAYU_PAYMENT_URL, // PayU payment endpoint
      paymentData
    });

  } catch (error) {
    console.error('PayU payment error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment' },
      { status: 500 }
    );
  }
}

// Optionally add other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}