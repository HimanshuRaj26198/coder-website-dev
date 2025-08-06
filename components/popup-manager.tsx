"use client"

import { useState, useEffect } from "react"
import ExitIntentPopup from "./popups/exit-intent-popup"
import CourseRecommendationPopup from "./popups/course-recommendation-popup"
import FreeResourcePopup from "./popups/free-resource-popup"
import CareerSurveyPopup from "./popups/career-survey-popup"
import DiscountPopup from "./popups/discount-popup"
import NewsletterPopup from "./popups/newsletter-popup"

interface PopupManagerProps {
  currentPage?: string
  courseCategory?: string
}

export default function PopupManager({ currentPage = "", courseCategory = "" }: PopupManagerProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [hasShownPopup, setHasShownPopup] = useState(false)
  const [testMode, setTestMode] = useState(false) // New state for test mode

  useEffect(() => {
    // Don't show popups if user has already seen one in this session
    if (hasShownPopup || testMode) return // Skip if in test mode

    const popupShown = sessionStorage.getItem("popup_shown")
    if (popupShown) return

    // Random popup selection based on page and category
    const getRandomPopup = () => {
      const popups = [
        "exit-intent",
        "course-recommendation",
        "free-resource",
        "career-survey",
        "discount",
        "newsletter",
      ]

      // Weight popups based on page context
      if (currentPage.includes("courses")) {
        return Math.random() < 0.4 ? "course-recommendation" : "free-resource"
      }

      if (currentPage.includes("freshers")) {
        return Math.random() < 0.5 ? "career-survey" : "free-resource"
      }

      if (currentPage.includes("professionals")) {
        return Math.random() < 0.4 ? "discount" : "course-recommendation"
      }

      // Random for other pages
      return popups[Math.floor(Math.random() * popups.length)]
    }

    // Show popup after random delay (5-20 seconds instead of 15-45)
    const delay = Math.random() * 15000 + 5000
    const timer = setTimeout(() => {
      const popup = getRandomPopup()
      setActivePopup(popup)
      setHasShownPopup(true)
      sessionStorage.setItem("popup_shown", "true")
    }, delay)

    // Exit intent popup
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup && !testMode) { // Skip if in test mode
        setActivePopup("exit-intent")
        setHasShownPopup(true)
        sessionStorage.setItem("popup_shown", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [currentPage, hasShownPopup, testMode])

  const closePopup = () => {
    setActivePopup(null)
  }

  // Function to manually trigger a popup for testing
  const triggerTestPopup = (popupType: string) => {
    setTestMode(true) // Enable test mode
    setActivePopup(popupType)
  }

  // Function to reset to normal behavior
  const resetToNormal = () => {
    setTestMode(false)
    setActivePopup(null)
    setHasShownPopup(false)
    sessionStorage.removeItem("popup_shown")
  }

  return (
    <>
      {/* Test controls - only show in development */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-sm mb-1">Popup Tester</h3>
            <button
              onClick={() => triggerTestPopup("exit-intent")}
              className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 rounded"
            >
              Exit Intent
            </button>
            <button
              onClick={() => triggerTestPopup("course-recommendation")}
              className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 rounded"
            >
              Course Rec
            </button>
            <button
              onClick={() => triggerTestPopup("free-resource")}
              className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 rounded"
            >
              Free Resource
            </button>
            <button
              onClick={() => triggerTestPopup("career-survey")}
              className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 rounded"
            >
              Career Survey
            </button>
            <button
              onClick={() => triggerTestPopup("discount")}
              className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 rounded"
            >
              Discount
            </button>
            <button
              onClick={() => triggerTestPopup("newsletter")}
              className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 rounded"
            >
              Newsletter
            </button>
            <button
              onClick={resetToNormal}
              className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded mt-2"
            >
              Reset to Normal
            </button>
          </div>
        </div>
      )}

      {/* Actual popups */}
      {activePopup === "exit-intent" && (
        <ExitIntentPopup isOpen={true} onClose={closePopup} courseCategory={courseCategory} />
      )}
      {activePopup === "course-recommendation" && <CourseRecommendationPopup isOpen={true} onClose={closePopup} />}
      {activePopup === "free-resource" && (
        <FreeResourcePopup isOpen={true} onClose={closePopup} courseCategory={courseCategory} />
      )}
      {activePopup === "career-survey" && <CareerSurveyPopup isOpen={true} onClose={closePopup} />}
      {activePopup === "discount" && <DiscountPopup isOpen={true} onClose={closePopup} />}
      {activePopup === "newsletter" && <NewsletterPopup isOpen={true} onClose={closePopup} />}
    </>
  )
}