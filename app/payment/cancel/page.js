"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { XCircle, RotateCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";

export default function PaymentCancelled() {
  const searchParams = useSearchParams();
  const tempId = searchParams.get("tempId");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Clean up session data
  useEffect(() => {
    if (tempId) {
      sessionStorage.removeItem("pendingEnrollment");
      sessionStorage.removeItem("tempEnrollmentId");
    }

    // Set window size for confetti
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Trigger confetti briefly for visual interest
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);

    return () => clearTimeout(timer);
  }, [tempId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 flex items-center justify-center p-4">
      {/* Animated confetti (negative feedback can still be visually engaging) */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          colors={["#ef4444", "#f97316", "#f59e0b"]}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Animated header */}
        <div className="bg-rose-100 p-6 relative overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-10 -right-10 text-rose-200"
            style={{ fontSize: "10rem" }}
          >
            <XCircle size={80} />
          </motion.div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-rose-800">Payment Cancelled</h1>
            <p className="text-rose-600 mt-2">Don't worry, you can try again</p>
          </div>
        </div>

        <div className="p-8">
          {/* Animated illustration */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="flex justify-center mb-6"
          >
            <XCircle className="text-rose-500" size={80} strokeWidth={1.5} />
          </motion.div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Oops! Payment Not Completed
            </h2>
            <p className="text-gray-600">
              Your payment process was interrupted. No charges have been made to
              your account.
            </p>

            {/* Pulse animation on the retry button */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="pt-4"
            >
              <Button
                onClick={() => window.location.reload()}
                className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 rounded-lg font-medium"
              >
                <RotateCw className="mr-2 h-4 w-4" />
                Try Payment Again
              </Button>
            </motion.div>

            <div className="flex gap-4 pt-2">
              <Button
                variant="outline"
                className="flex-1 border-rose-300 text-rose-600 hover:bg-rose-50"
                onClick={() => (window.location.href = "/courses")}
              >
                Browse Courses
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-purple-300 text-purple-600 hover:bg-purple-50"
                onClick={() => (window.location.href = "/")}
              >
                Return Home
              </Button>
            </div>

            {/* Help section */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <p className="text-sm text-gray-500 mb-3">
                Need help with your payment?
              </p>
              <Button
                variant="link"
                className="text-rose-600 underline hover:text-rose-700"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Support <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}