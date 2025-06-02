"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import DemoPage from "./components/DemoPage"
import AnimatedBackground from "./components/AnimatedBackground"
import "./App.css"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "demo">("home")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showGoToTop, setShowGoToTop] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)
  const goToTopRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update()

      // Show/hide go to top button
      if (e.scroll > 300) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    })

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Page load animation
    gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })

    return () => {
      // Cleanup
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useEffect(() => {
    // Update ScrollTrigger when page changes
    if (lenisRef.current) {
      ScrollTrigger.refresh()
    }
  }, [currentPage])

  useEffect(() => {
    // Animate go to top button
    const button = goToTopRef.current
    if (!button) return

    if (showGoToTop) {
      button.classList.add("visible")
    } else {
      button.classList.remove("visible")
    }
  }, [showGoToTop])

  const navigateToPage = (page: "home" | "demo") => {
    if (page === currentPage || isTransitioning) return

    setIsTransitioning(true)

    // Scroll to top smoothly before page transition
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 0.8,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      })
    }

    // Page transition animation
    gsap.to(".page-content", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrentPage(page)
        gsap.fromTo(
          ".page-content",
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              setIsTransitioning(false)
              // Refresh ScrollTrigger after page transition
              ScrollTrigger.refresh()
            },
          },
        )
      },
    })
  }

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      })
    }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar currentPage={currentPage} onNavigate={navigateToPage} />

      <div className="page-content relative z-10">
        {currentPage === "home" && <HomePage />}
        {currentPage === "demo" && <DemoPage />}
      </div>

      {/* Go to Top Button */}
      <button
        ref={goToTopRef}
        onClick={scrollToTop}
        className="go-to-top"
        aria-label="Ir al inicio"
        title="Ir al inicio"
      >
        ↑
      </button>
    </div>
  )
}

export default App
