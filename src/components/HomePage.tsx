"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Header from "./Header"
import Software from "./Software"
import Experience from "./Experience"
import Education from "./Education"
import Languages from "./Languages"
import Contact from "./Contact"

const HomePage = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    // Reset scroll position when entering home page
    window.scrollTo(0, 0)

    // Page entrance animation
    gsap.fromTo(page, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })

    // Add scroll indicator
    const scrollIndicator = document.createElement("div")
    scrollIndicator.className = "scroll-indicator fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    scrollIndicator.innerHTML = `
      <div class="bg-[#EA6463] text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
        <span class="text-sm font-bold">↓</span>
      </div>
    `
    document.body.appendChild(scrollIndicator)

    // Hide scroll indicator after user scrolls
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(scrollIndicator, { opacity: 0, duration: 0.5, ease: "power2.out" })
        window.removeEventListener("scroll", handleScroll)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      if (scrollIndicator && scrollIndicator.parentNode) {
        scrollIndicator.parentNode.removeChild(scrollIndicator)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen">
      <Header />
      <Software />
      <Experience />
      <Education />
      <Languages />
      <Contact />
    </div>
  )
}

export default HomePage
