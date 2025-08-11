"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle, PartyPopper, BookOpen, Mail, User, CreditCard, Phone } from "lucide-react";

export default function PaymentSuccessComponent() {
  const searchParams = useSearchParams();
  const txnid = searchParams.get("txnid");
  const [enrollment, setEnrollment] = useState<any | null>(null);
  const [paymentData, setPaymentData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);


  function formatDate(dateStr:string) {
  const date = new Date(dateStr);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

// Extract time "2025-08-10T19:14:05.000Z" -> "HH:MM:SS"
function extractTime(dateStr:string) {
  const date = new Date(dateStr);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

  // In a real app, you would fetch enrollment details from your API
  useEffect(() => {
    // Simulate API call
    const fetchEnrollment = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/enrollments/${txnid}`);
        // const data = await response.json();
        
        // Mock data - remove in production
        const mockData = {
          user: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+91 9876543210" // Added phone number
          },
          course: {
            title: "Advanced Web Development",
            duration: "12 Weeks",
          },
          payment: {
            amount: 999,
            paidAmount: 999,
            paymentMethod: "Credit Card",
            transactionId: txnid || "PAY-123456789",
            date: new Date().toLocaleDateString(),
          },
          support: {
            phone: "+91 1800 123 4567",
            email: "support@academy.com"
          }
        };

        let paymentRes = await fetch(`/api/payments/data/${txnid}`);
        let paymentJson = await paymentRes.json();
        console.log(paymentJson, "Payment Details")
        setPaymentData(paymentJson.data);

        let enrollmentRes = await fetch(`/api/pending-enrollments/${txnid}`);
        let enrollmentJson = await enrollmentRes.json();
        console.log(enrollmentJson, "Enrollment Details")
        setEnrollment(enrollmentJson.data);
      } catch (error) {
        console.error("Error fetching enrollment:", error);
      } finally {
        setLoading(false);
      }
    };

    if (txnid) {
      fetchEnrollment();
    }
  }, [txnid]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading your enrollment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Payment Successful! �
          </h1>
          <div className="mt-6 flex justify-center">
            <PartyPopper className="h-10 w-10 text-yellow-500 animate-bounce" />
          </div>
          <p className="mt-4 text-xl text-gray-600">
            Thank you for enrolling! Your learning journey begins now.
          </p>
          <p className="mt-2 text-lg text-blue-600 font-medium">
            Our training team will contact you soon with further details.
          </p>
        </div>

        {enrollment && (
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="mr-2" /> Enrollment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {enrollment.firstName}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Contact Information</h3>
                      <p className="mt-1 text-xs text-gray-500 italic">
                        (We will use this contact information for further communication)
                      </p>
                      <div className="mt-2 space-y-2">
                        <p className="text-lg font-semibold text-gray-900 flex items-center">
                          <Mail className="mr-2 h-5 w-5" /> {enrollment.email}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 flex items-center">
                          <Phone className="mr-2 h-5 w-5" /> {enrollment.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Course Enrolled</h3>
                      <p className="mt-1 text-lg font-semibold text-gray-900 flex items-center">
                        <BookOpen className="mr-2 h-5 w-5" /> {paymentData.productinfo}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {/* Duration: {enrollment.course.duration} */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CreditCard className="mr-2" /> Payment Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Amount Paid</h3>
                    <p className="mt-1 text-2xl font-bold text-green-600">
                      ₹{paymentData.amount}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Total Course Fee: ₹{paymentData.amount}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {paymentData.mode}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Transaction ID</h3>
                      <p className="mt-1 text-sm font-mono text-gray-900">
                        {paymentData.txnid}
                      </p>
                      <h3 className="text-sm font-medium text-gray-500">Bank Ref Num</h3>
                      <p className="mt-1 text-sm font-mono text-gray-900">
                        {paymentData.bank_ref_num}
                      </p>
                      <div className="flex gap-4" >
                        <p className="mt-1 text-sm text-gray-500">
                        Date: {formatDate(paymentData.addedon)}
                      </p>
                       <p className="mt-1 text-sm text-gray-500">
                        Time: {extractTime(paymentData.addedon)}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 sm:px-10">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">
                      <span className="text-blue-600">What's next?</span> Our team will contact you
                      within 24 hours with course access details and schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">
                      <span className="text-green-600">Need immediate assistance?</span> You can:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <a
                        href={`tel:${enrollment.phone}`}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700"
                      >
                        <Phone className="mr-1 h-3 w-3" /> Call Us Now
                      </a>
                      <a
                        href={`mailto:support@codercrafter.in`}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        <Mail className="mr-1 h-3 w-3" /> Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-600">
            Best of luck for your learning journey! We're excited to have you on board.
          </p>
          <div className="mt-6">
            <button
              onClick={() => window.location.href = "/"}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}