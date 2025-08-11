// app/api/payu/create-payment/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const {
      amount,
      email,
      firstName,
      phone,
      courseId,
      courseName,
      enrollmentId
    } = await request.json();

    // PayU credentials from environment variables
    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const merchantSalt = process.env.PAYU_MERCHANT_SALT;
    const merchantId = process.env.PAYU_MERCHANT_ID;
    
    if (!merchantKey || !merchantSalt || !merchantId) {
      return NextResponse.json(
        { error: 'PayU credentials not configured' },
        { status: 500 }
      );
    }
    
    // Generate transaction ID
    const txnid = `codercrafter-${Date.now()}`;
    
    // Generate hash
    const hashString = `${merchantKey}|${txnid}|${amount}|${courseName}|${firstName}|${email}|||||||||||${merchantSalt}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');
    
    return NextResponse.json({
      paymentUrl: process.env.PAYU_PAYMENT_URL,
      paymentData: {
        key: merchantKey,
        txnid,
        amount,
        productinfo: courseName,
        firstname: firstName,
        email,
        phone,
        surl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
        furl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failure`,
        hash,
        service_provider: 'payu_paisa',
        udf1: enrollmentId
      }
    });
  } catch (error) {
    console.error('PayU payment error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}