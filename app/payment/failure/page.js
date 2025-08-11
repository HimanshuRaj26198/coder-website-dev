"use client";
import { motion } from "framer-motion";
import { XCircle, RotateCw, Home, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic"; // so it runs on server

export default function PaymentFailure() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-6 text-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "mirror",
              duration: 2 
            }}
            className="inline-block"
          >
            <XCircle className="h-16 w-16 text-white mx-auto" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white mt-4">Payment Failed</h1>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-rose-600 mb-6"
          >
            We couldn't process your payment. Please try again or use a different payment method.
          </motion.p>

          {/* Animated error details box */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-rose-50 rounded-lg p-4 mb-6 text-left overflow-hidden"
          >
            <div className="flex items-center text-rose-700 mb-2">
              <span className="font-medium">Possible reasons:</span>
            </div>
            <ul className="list-disc list-inside text-sm text-rose-600 space-y-1">
              <li>Insufficient funds</li>
              <li>Card declined by bank</li>
              <li>Incorrect card details</li>
              <li>Network issues</li>
            </ul>
          </motion.div>

          {/* Action buttons with staggered animation */}
          <div className="space-y-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={() => router.refresh()} // Retry current payment
                className="w-full bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-200"
              >
                <RotateCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={() => router.push("/checkout")}
                variant="outline"
                className="w-full border-rose-300 text-rose-600 hover:bg-rose-50"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Change Payment Method
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={() => router.push("/")}
                variant="ghost"
                className="w-full text-rose-500 hover:bg-rose-50"
              >
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Footer with help link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-rose-50 p-4 text-center border-t border-rose-100"
        >
          <p className="text-sm text-rose-500">
            Need help?{" "}
            <a 
              href="/contact" 
              className="font-medium underline hover:text-rose-700"
            >
              Contact support
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}