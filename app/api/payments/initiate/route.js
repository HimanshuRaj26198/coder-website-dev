import { NextResponse } from 'next/server';
import crypto from 'crypto';

function generateForwardHash(key, salt, data) {
  const fields = [
    key,
    data.txnid,
    parseFloat(data.amount).toFixed(2),
    data.productinfo,
    data.firstname,
    data.email,
    data.udf1 || '',
    data.udf2 || '',
    data.udf3 || '',
    data.udf4 || '',
    data.udf5 || '',
    data.udf6 || '',
    data.udf7 || '',
    data.udf8 || '',
    data.udf9 || '',
    data.udf10 || '',
    salt
  ];
  return crypto.createHash('sha512').update(fields.join('|')).digest('hex').toLowerCase();
}

export async function POST(request) {
  try {
    const { paymentData, enrollmentData } = await request.json();

    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const merchantSalt = process.env.PAYU_MERCHANT_SALT;
    // Use test endpoint for dev
    const payuUrl = (process.env.PAYU_ENVIRONMENT === 'LIVE')
      ? 'https://secure.payu.in/_payment'
      : 'https://test.payu.in/_payment';

    // --- Normalize and finalize fields BEFORE hashing ---
    const pd = { ...(paymentData || {}) };
    console.log(pd.amount, "PaymenAmout")
    pd.key = merchantKey; // must exist in payload and hash first field
    pd.txnid = pd.txnid || `txn_${Date.now()}`;
    pd.amount = parseFloat(pd.amount || 0).toFixed(2);
    // Make productinfo a simple safe string
    pd.productinfo = (pd.productinfo || '').toString().trim();
    console.log(pd.productinfo, "Product Info")
    pd.firstname = (pd.firstname || '').toString().trim();
    pd.email = (pd.email || '').toString().trim();
    pd.phone = (pd.phone || '').toString().trim();


    // required callbacks
    pd.surl = pd.surl || `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/verify`;
    pd.furl = pd.furl || `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/failure`;

    // service provider
    // pd.service_provider = pd.service_provider || 'payu_paisa';

    // Ensure udf1..udf10 exist (empty string if not provided)
    for (let i = 1; i <= 10; i++) {
      const k = `udf${i}`;
      pd[k] = pd[k] == null ? '' : pd[k];
    }

    // Generate hash AFTER normalization
    const hash = generateForwardHash(merchantKey, merchantSalt, pd);
    pd.hash = hash;
    console.log(pd, "Complete payment data")
    // DEBUG logs (remove in production)
    console.log('PAYU FORWARD STRING:', [
      merchantKey,
      pd.txnid,
      pd.amount,
      pd.productinfo,
      pd.firstname,
      pd.email,
      pd.udf1, pd.udf2, pd.udf3, pd.udf4, pd.udf5, pd.udf6, pd.udf7, pd.udf8, pd.udf9, pd.udf10,
      merchantSalt
    ].join('|'));
    console.log('PAYU HASH:', hash);
    console.log('PAYMENT PAYLOAD SENT TO PAYU (keys):', Object.keys(pd));

    // Build a HTML form with exact fields (no sdk)
    const inputs = Object.entries(pd)
      .map(([k, v]) => `<input type="hidden" name="${k}" value="${String(v).replace(/"/g, '&quot;')}" />`)
      .join('\n');

    console.log('Merchant key:', merchantKey ? 'exists' : 'MISSING');
    console.log('Merchant salt:', merchantSalt ? 'exists' : 'MISSING');
    console.log('NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL);


    const formHtml = `
      <html><body>
      <form id="payu_form" action="${payuUrl}" method="post">
        ${inputs}
      </form>
      <script>document.getElementById('payu_form').submit();</script>
      </body></html>
    `;

    return NextResponse.json({ success: true, formHtml });

  } catch (err) {
    console.error('initiate error', err);
    return NextResponse.json({ success: false, error: err.message || 'Payment initiation failed' }, { status: 500 });
  }
}
