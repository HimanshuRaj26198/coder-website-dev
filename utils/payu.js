// utils/payu.js
import crypto from 'crypto';

export function generateForwardHash(key, salt, data) {
    console.log(data, "Forward Data")
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
  return crypto.createHash("sha512").update(fields.join('|')).digest("hex").toLowerCase();
}

export function generateReverseHash(key, salt, data) {
    console.log(data, "Reverse Data")
  const fields = [
    salt,
    data.status,
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
    data.email,
    data.firstname,
    data.productinfo,
    parseFloat(data.amount).toFixed(2),
    data.txnid,
    key
  ];
  return crypto.createHash("sha512").update(fields.join('|')).digest("hex").toLowerCase();
}
