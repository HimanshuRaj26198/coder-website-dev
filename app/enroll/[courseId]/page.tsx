"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Calendar, Phone, CheckCircle, Shield, Clock, Users, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"
import coursesData from "@/data/courses.json"
import EmiPopup from "@/components/popups/emi-popup"
import PartPaymentPopup from "@/components/popups/part-payment-popup"
import { toast } from "sonner"


interface EnrollPageProps {
  params: Promise<{ courseId: string }>
}

export default function EnrollPage({ params }: EnrollPageProps) {
  const [courseId, setCourseId] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState("full")
  const [showEmiPopup, setShowEmiPopup] = useState(false)
  const [showPartPaymentPopup, setShowPartPaymentPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    preferredSchedule: "",
  })

  // Get courseId from params
  React.useEffect(() => {
    params.then(({ courseId }) => setCourseId(courseId))
  }, [params])

  const course = coursesData.courses.find((c) => c.id === courseId)

  if (!course) {
    return <div>Loading...</div>
  }

// import crypto from "crypto";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError(null);

  try {
    // 1️⃣ Calculate payment plan
    let paymentPlan = [];
    let firstPaymentAmount = course.price;

    if (paymentMethod === "full") {
      paymentPlan.push({
        amount: course.price,
        dueDate: new Date().toISOString(),
        status: "pending"
      });
    } else if (paymentMethod === "part-payment") {
      firstPaymentAmount = Math.ceil(course.price * 0.5);
      paymentPlan = [
        { amount: firstPaymentAmount, dueDate: new Date().toISOString(), status: "pending" },
        { amount: Math.ceil(course.price * 0.25), dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), status: "pending" },
        { amount: Math.ceil(course.price * 0.25), dueDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), status: "pending" }
      ];
    } else if (paymentMethod === "monthly") {
      firstPaymentAmount = Math.ceil(course.price / parseInt(course.duration.split(" ")[0]));
      for (let i = 0; i < parseInt(course.duration.split(" ")[0]); i++) {
        paymentPlan.push({
          amount: firstPaymentAmount,
          dueDate: new Date(Date.now() + i * 30 * 24 * 60 * 60 * 1000).toISOString(),
          status: "pending"
        });
      }
    }

    // 2️⃣ Generate IDs
    const tempEnrollmentId = `temp-${Date.now()}`;
      const txnid = `codercrafter-${Date.now()}`;

    // 3️⃣ Merchant credentials
    const merchantKey = process.env.PAYU_MERCHANT_KEY;

    // 4️⃣ Format amount
   
    const amount = parseFloat(firstPaymentAmount.toString()).toFixed(2); // *** important ***

    // 5️⃣ Prepare UDFs (ALL must exist)
    const udf1 = tempEnrollmentId;
    const udf2 = '';
    const udf3 = '';
    const udf4 = '';
    const udf5 = '';
    const udf6 = '';
    const udf7 = '';
    const udf8 = '';
    const udf9 = '';
    const udf10 = '';


    // 7️⃣ Save enrollment data locally
    const enrollmentData = {
      firstName: formData.name.split(' ')[0],
      lastName: formData.name.split(' ').slice(1).join(' ') || '',
      email: formData.email,
      phone: formData.phone,
      courseId: course.id,
      price: course.price,
      paidAmount: firstPaymentAmount,
      paymentMethod,
      paymentPlan,
      experience: formData.experience,
      preferredSchedule: formData.preferredSchedule,
      motivation: formData.motivation,
      status: 'pending_verification'
    };

    sessionStorage.setItem('pendingEnrollment', JSON.stringify(enrollmentData));
    sessionStorage.setItem('tempEnrollmentId', tempEnrollmentId);

    // 8️⃣ Payment request (include ALL udf fields)


    const paymentData = {
      txnid,
      amount,
      productinfo: course.title.trim().replace(/[^a-zA-Z0-9 ]/g, ''), // keep it safe
      firstname: formData.name.split(' ')[0],
      email: formData.email,
      phone: formData.phone,
      udf1: tempEnrollmentId,
      udf2: '', udf3: '', udf4: '', udf5: '', udf6: '', udf7: '', udf8: '', udf9: '', udf10: ''
    };

    // Storing Enrollment as Pending
    const storePendingRes = await fetch("/api/pending-enrollments", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({tempId: tempEnrollmentId, enrollmentData: {...enrollmentData, txnid: txnid}})
    });

    if(!storePendingRes.ok){
        let res = await storePendingRes.json();
        console.log(res)
        toast.error(res.error)
        return;
    }

    // 9️⃣ Call backend to generate auto-submit form
    const res = await fetch('/api/payments/initiate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentData, enrollmentData })
    });

    if (!res.ok) throw new Error('Failed to initiate payment');

    const data = await res.json();

    if (data.formHtml) {
      const div = document.createElement('div');
      div.innerHTML = data.formHtml;
      document.body.appendChild(div);
      const form = div.querySelector('form');
      form?.submit();
    } else {
      throw new Error('Payment form not received from PayU');
    }

  } catch (err: any) {
    setSubmitError(err.message || "Failed to initiate payment. Please try again.");
    setIsSubmitting(false);
  }
};


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getPaymentAmount = () => {
    switch (paymentMethod) {
      case "full":
        return course.price
      case "part-payment":
        return Math.ceil(course.price * 0.5)
      case "monthly":
        return Math.ceil(course.price / parseInt(course.duration.split(" ")[0]))
      default:
        return course.price
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          href={`/courses/${courseId}`}
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Course</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enrollment Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Enroll in Course</h1>
              <p className="text-xl text-gray-600">
                Complete your enrollment for <span className="font-semibold text-purple-600">{course.title}</span>
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Enrollment Details</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => handleChange("experience", value)}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select your experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Complete Beginner</SelectItem>
                            <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredSchedule">Preferred Schedule</Label>
                      <Select
                        value={formData.preferredSchedule}
                        onValueChange={(value) => handleChange("preferredSchedule", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your preferred schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday-morning">Weekday Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="weekday-evening">Weekday Evening (6 PM - 9 PM)</SelectItem>
                          <SelectItem value="weekend">Weekend (Flexible)</SelectItem>
                          <SelectItem value="self-paced">Self-Paced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to take this course?</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us about your goals and motivation..."
                        value={formData.motivation}
                        onChange={(e) => handleChange("motivation", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Payment Options</h3>

                    <div className="grid gap-4">
                      {/* Full Payment */}
                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          paymentMethod === "full"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("full")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="payment"
                              value="full"
                              checked={paymentMethod === "full"}
                              onChange={() => setPaymentMethod("full")}
                              className="text-purple-600"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">Full Payment</h4>
                              <p className="text-sm text-gray-600">Pay the complete amount upfront</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</div>
                            <div className="text-sm text-green-600">Save 10% extra</div>
                          </div>
                        </div>
                      </div>

                      {/* Installment Payment */}
                      <div
  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
    paymentMethod === "part-payment"
      ? "border-purple-500 bg-purple-50"
      : "border-gray-200 hover:border-gray-300"
  }`}
  onClick={() => setPaymentMethod("part-payment")}
>
  <div className="flex items-start justify-between">
    <div className="flex items-start space-x-3">
      <input
        type="radio"
        name="payment"
        value="part-payment"
        checked={paymentMethod === "part-payment"}
        onChange={() => setPaymentMethod("part-payment")}
        className="text-purple-600 mt-1"
      />
      <div>
        <h4 className="font-semibold text-gray-900">Part Payment Plan</h4>
        <p className="text-sm text-gray-600 mb-2">Pay in 3 parts (50% + 25% + 25%)</p>
        
        {/* Payment breakdown */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-purple-50 rounded p-2 text-center">
            <div className="font-medium">First Payment</div>
            <div className="font-bold">50%</div>
            <div className="text-purple-600">₹{Math.ceil(course.price * 0.5).toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded p-2 text-center">
            <div className="font-medium">Second</div>
            <div className="font-bold">25%</div>
            <div className="text-gray-600">₹{Math.ceil(course.price * 0.25).toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded p-2 text-center">
            <div className="font-medium">Third</div>
            <div className="font-bold">25%</div>
            <div className="text-gray-600">₹{Math.ceil(course.price * 0.25).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="text-right">
      <div className="text-2xl font-bold text-gray-900">
        ₹{Math.ceil(course.price * 0.5).toLocaleString()}
      </div>
      <div className="text-sm text-gray-600">first payment</div>
      <div className="text-xs text-gray-500 mt-1">
        then ₹{Math.ceil(course.price * 0.25).toLocaleString()} x 2
      </div>
    </div>
  </div>
</div>

                      {/* Monthly Payment */}
                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          paymentMethod === "monthly"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("monthly")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="payment"
                              value="monthly"
                              checked={paymentMethod === "monthly"}
                              onChange={() => setPaymentMethod("monthly")}
                              className="text-purple-600"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">Monthly EMI</h4>
                              <p className="text-sm text-gray-600">Pay monthly for {course.duration.split(" ")[0]} months</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              ₹{Math.ceil(course.price / parseInt(course.duration.split(" ")[0])).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">per month</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Options */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Need Custom Payment Plan?</h4>
                      <div className="flex space-x-4">
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowEmiPopup(true)}>
                          <Phone className="w-4 h-4 mr-2" />
                          Contact for EMI
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowPartPaymentPopup(true)}>
                          <Calendar className="w-4 h-4 mr-2" />
                          Part Payment Options
                        </Button>
                      </div>
                    </div>
                  </div>

               <Button
  type="submit"
  size="lg"
  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-lg"
  disabled={isSubmitting}
>
  <CreditCard className="w-5 h-5 mr-2" />
  {isSubmitting ? "Processing..." : `Proceed to Payment - ₹${getPaymentAmount().toLocaleString()}`}
</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Course Summary & Benefits */}
          <div className="space-y-8">
            {/* Course Summary */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Course Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                    <p className="text-gray-600">{course.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span>{course.duration}</span>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>Certificate included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span>Lifetime access</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Course Price:</span>
                      <span className="line-through text-gray-500">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount ({course.discount}%):</span>
                      <span className="text-green-600">-₹{(course.originalPrice - course.price).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Final Price:</span>
                      <span>₹{course.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Recorded live classes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hands-on projects and assignments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Downloadable resources and materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lifetime access to course content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 student support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Job placement assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>15-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <Card className="border-0 shadow-lg bg-green-50">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-green-900 mb-2">Secure Payment</h3>
                <p className="text-sm text-green-700">
                  Your payment information is encrypted and secure. We accept all major payment methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Popups */}
      <EmiPopup
        isOpen={showEmiPopup}
        onClose={() => setShowEmiPopup(false)}
        courseName={course.title}
        coursePrice={course.price}
      />
      <PartPaymentPopup
        isOpen={showPartPaymentPopup}
        onClose={() => setShowPartPaymentPopup(false)}
        courseName={course.title}
        coursePrice={course.price}
      />
    </main>
  )
}
