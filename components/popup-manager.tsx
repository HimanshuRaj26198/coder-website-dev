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

  useEffect(() => {
    // Don't show popups if user has already seen one in this session
    if (hasShownPopup) return

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
      if (e.clientY <= 0 && !hasShownPopup) {
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
  }, [currentPage, hasShownPopup])

  const closePopup = () => {
    setActivePopup(null)
  }

  return (
    <>
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
