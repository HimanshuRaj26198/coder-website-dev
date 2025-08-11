import { NextResponse } from 'next/server';
import crypto from 'crypto';

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

function getBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!envUrl || envUrl === 'null' || envUrl === 'undefined') {
    return 'http://localhost:3000';
  }
  return envUrl;
}

export async function POST(req) {
  try {
    const body = await req.formData();
    const data = {};
    body.forEach((v, k) => (data[k] = String(v)));

    const key = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;



    console.log('PAYU CALLBACK DATA:', data);

    const calcHash = generateReverseHash(key, salt, data);
    console.log('CALC REVERSE HASH:', calcHash);
    console.log('RECEIVED HASH:', data.hash);

    if ((data.hash || '').toLowerCase() !== calcHash) {
      console.error('PayU hash mismatch');
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/success`, 302);
    }

    const tempId = data.udf1 || data.txnid;
    const successUrl = new URL('/payment/success', process.env.NEXT_PUBLIC_BASE_URL);
    successUrl.searchParams.set('tempId', tempId);
    console.log(successUrl, "Success URL Created")
    console.log("Creating URL with path:", '/payment/success', "and base:", process.env.NEXT_PUBLIC_BASE_URL);
    console.log("TempId:", tempId);


    return NextResponse.redirect(successUrl);

  } catch (error) {
    console.error('Error processing payment callback:', error);
    const baseUrl = getBaseUrl();
    return NextResponse.redirect(new URL('/payment/failure', process.env.NEXT_PUBLIC_BASE_URL));
  }
}
