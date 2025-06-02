"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Software = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const software = [
    {
      name: "Blender",
      image: "https://i.ibb.co/ns9f7L4D/software-lista-Blender-logo.png",
      description: "3D modeling and animation",
    },
    {
      name: "TVPaint",
      image: "https://i.ibb.co/gFPh0w6j/software-lista-tvpaint-logo.png",
      description: "Traditional 2D animation",
    },
    {
      name: "Harmony",
      image: "https://i.ibb.co/RpHXGCvf/software-lista-harmony-logo.png",
      description: "Professional animation",
    },
    {
      name: "After Effects",
      image: "https://i.ibb.co/ksxZtrw6/software-lista-After-effects.png",
      description: "Motion graphics and compositing",
    },
    {
      name: "Animate",
      image: "https://i.ibb.co/HQTCxrL/software-lista-Animate.png",
      description: "Professional animation",
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { scale: 0, rotation: 180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Hover animations
    cardsRef.current.forEach((card) => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, { scale: 1.1, rotation: 5, duration: 0.3, ease: "power2.out" })
      }

      const handleMouseLeave = () => {
        gsap.to(card, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)

      // Cleanup function
      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg"
          
        >
          Software I Use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">
    
          {software.map((tool, index) => (
            <div
              key={tool.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="bg-[#FFDD57]  p-6 shadow-[8px_8px_0_0_#000] cursor-pointer"
            >
              <div className="text-center">
                <img
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.name}
                  className="w-20 h-20 mx-auto mb-4 object-contain"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=100&width=100"
                  }}
                />
                <h3 className="text-xl font-bold text-black mb-2">{tool.name}</h3>
                <p className="text-black text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Software
