"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { CheckCircle, PartyPopper, BookOpen, Mail, User, CreditCard, Phone } from "lucide-react";
import PaymentSuccessComponent from "../../../components/ui/PaymentSuccessComponent";

export default function PaymentSuccess() {
  return(
    <Suspense>
      <PaymentSuccessComponent />
    </Suspense>
  )
}