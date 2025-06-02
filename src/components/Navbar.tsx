"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface NavbarProps {
  currentPage: "home" | "demo"
  onNavigate: (page: "home" | "demo") => void
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    // Initial animation with delay to ensure it's visible
    gsap.set(nav, { y: -100, opacity: 0 })
    gsap.to(nav, { y: 0, opacity: 1, duration: 1, ease: "bounce.out", delay: 1 })

    // Floating animation
    gsap.to(nav, {
      y: "+=5",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2,
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] bg-[#EA6463] backdrop-blur-md rounded-full px-8 py-4 shadow-2xl border-2 border-white/30"
      style={{
        position: "fixed",
        zIndex: 9999,
        top: "24px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex items-center space-x-6">
        <button
          onClick={() => onNavigate("home")}
          className={`px-6 py-3 rounded-full font-bold transition-all duration-300 text-lg ${
            currentPage === "home"
              ? "bg-white text-[#EA6463] shadow-lg scale-105"
              : "text-white hover:bg-white/20 hover:scale-105"
          }`}
          type="button"
        >
          🏠 Home
        </button>
        <button
          onClick={() => onNavigate("demo")}
          className={`px-6 py-3 rounded-full font-bold transition-all duration-300 text-lg ${
            currentPage === "demo"
              ? "bg-white text-[#EA6463] shadow-lg scale-105"
              : "text-white hover:bg-white/20 hover:scale-105"
          }`}
          type="button"
        >
          🎬 Demo
        </button>
      </div>
    </nav>
  )
}

export default Navbar
