// utils/createEnrollment.js


import PendingEnrollments from '@/models/PendingEnrollments';
import crypto from 'crypto';

const PAYU_KEY = process.env.PAYU_KEY;
const PAYU_SALT = process.env.PAYU_SALT;
const PAYU_VERIFY_URL = process.env.PAYU_VERIFY_URL || "https://info.payu.in/merchant/postservice?form=2";

export async function createEnrollment(tempId, data) {
  try {
    let pendingPaymentRes = await PendingEnrollments.findOne({tempId: tempId});
    console.log(pendingPaymentRes, "Pending Enrollment Response")
    // pendingPaymentRes = await pendingPaymentRes.json();
    let enrollmentData = pendingPaymentRes;
    // Validate required fields
    if (!enrollmentData.courseId || 
        enrollmentData.price === undefined || 
        enrollmentData.paidAmount === undefined) {
      throw new Error("Missing required enrollment fields");
    }

    if (!enrollmentData.email && !enrollmentData.phone) {
      throw new Error("Email or phone is required to identify user");
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/enrollments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData)
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle errors from the API
      throw new Error(data.error || 'Failed to create enrollment');
    }

    return data;
  } catch (error) {
    console.error("Enrollment creation error:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
}

// Optional: You might want to add additional utility functions
// for common enrollment-related operations

/**
 * Checks if a user is already enrolled in a course
 * @param {string} userId - User ID
 * @param {string} courseId - Course ID
 * @returns {Promise<boolean>} - Whether the user is enrolled
 */
export async function isUserEnrolled(userId, courseId) {
  try {
    const response = await fetch(`/api/enrollments/check?userId=${userId}&courseId=${courseId}`);
    const data = await response.json();
    return data.isEnrolled || false;
  } catch (error) {
    console.error("Error checking enrollment:", error);
    return false;
  }
}


export async function verifyPayment(txnid) {
  try {
    console.log(txnid, "Transaction ID")
    // Step 1: Generate hash
    const command = "verify_payment";
    const hashString = `${PAYU_KEY}|${command}|${txnid}|${PAYU_SALT}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    // Step 2: Prepare request body
    const formData = new URLSearchParams();
    formData.append('key', PAYU_KEY);
    formData.append('command', command);
    formData.append('var1', txnid);
    formData.append('hash', hash);

    // Step 3: Make request to PayU
    const res = await fetch(PAYU_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });

    if (!res.ok) {
      throw new Error(`PayU verification failed with status ${res.status}`);
    }

    const json = await res.json();

    // Step 4: Parse response
    if (json.status === 1 && json.transaction_details && json.transaction_details[txnid]) {
      const details = json.transaction_details[txnid];
      if (details.status === "success") {
        return {
          success: true,
          txnid: details.txnid,
          message: "Payment verified successfully",
          data: details
        };
      } else {
        return {
          success: false,
          message: `Payment status is ${details.status}`,
          data: details
        };
      }
    }

    return {
      success: false,
      message: "Invalid response from PayU",
      data: json
    };
  } catch (err) {
    console.error("Error verifying PayU payment:", err);
    return {
      success: false,
      message: err.message
    };
  }
}