"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Create floating polka dots
    const dots = dotsRef.current

    dots.forEach((dot, index) => {
      gsap.set(dot, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      })

      gsap.to(dot, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: 360,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
      })
    })
  }, [])

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 bg-gradient-to-br from-[#FFAE5D] via-yellow-400 to-[#FFAE5D]"
      style={{ zIndex: -10 }}
    >
      {/* Animated polka dots */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => el && (dotsRef.current[index] = el)}
          className="absolute w-4 h-4 bg-white/20 rounded-full animate-pulse"
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-pink-300/30 rounded-full animate-bounce" />
      <div
        className="absolute top-20 right-20 w-6 h-6 bg-purple-300/30 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-20 w-10 h-10 bg-blue-300/30 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}

export default AnimatedBackground
