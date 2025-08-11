// /app/api/payment/verify/route.js
import crypto from "crypto";
import { createEnrollment } from "../../../../utils/enrollment-actions";
import { savePayment } from "../../../../utils/payment-actions";

function generateReverseHash(key, salt, data) {
  const amount = (data.amount != null) ? parseFloat(data.amount).toFixed(2) : '';

  let hashString = [
    salt,
    data.status || '',
    data.udf10 || '',
    data.udf9 || '',
    data.udf8 || '',
    data.udf7 || '',
    data.udf6 || '',
    data.udf5 || '',
    data.udf4 || '',
    data.udf3 || '',
    data.udf2 || '',
    data.udf1 || '',
    data.email || '',
    data.firstname || '',
    data.productinfo || '',
    amount,
    data.txnid || '',
    key
  ].join('|');

  if (data.additionalCharges) {
    hashString = data.additionalCharges + '|' + hashString;
  }

  return crypto
    .createHash('sha512')
    .update(hashString)
    .digest('hex')
    .toLowerCase();
}

export async function POST(req) {
  const body = await req.formData(); // PayU sends POST data
  const data = Object.fromEntries(body);

  const { txnid, status, hash } = data;

  // Verify hash
    const key = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;



    console.log('PAYU CALLBACK DATA:', data);
    const savedPayment = savePayment(data);

    const calculatedHash = generateReverseHash(key, salt, data);

  if (calculatedHash !== hash) {
    return new Response("Invalid payment signature", { status: 400 });
  }

  if (status === "success") {
    // Create enrollment in DB
    await createEnrollment(data.udf1);

    // Redirect to success page with txnid
    return Response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?txnid=${txnid}`, 302);
  }

  // Failure redirect
  return Response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/payment/failure`, 302);
}


export async function GET() {
  return new Response("This endpoint only accepts POST from PayU", { status: 200 });
}
