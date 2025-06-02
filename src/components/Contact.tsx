"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const iconsRef = useRef<HTMLDivElement[]>([])

  const contacts = [
    {
      platform: "Email",
      value: "facundodiaz1983@gmail.com",
      link: "mailto:facundodiaz1983@gmail.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      color: "bg-red-500",
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/facalandia",
      link: "https://linkedin.com/in/facalandia",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "bg-blue-600",
    },
    {
      
        platform: "Behance",
        value: "behance.net/facalandia",
        link: "https://behance.net/facalandia",
        icon: (
          <img src="https://files.catbox.moe/sikw1q.svg" alt="Behance logo" className="w-6 h-6" />
        ),
        color: "bg-blue-600",
      
      

    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll(".contact-card"),
      { y: 100, opacity: 0, rotationX: 90 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    iconsRef.current.forEach((icon) => {
      if (!icon) return

      const handleMouseEnter = () => {
        gsap.to(icon, { scale: 1.2, rotation: 15, duration: 0.3, ease: "power2.out" })
      }

      const handleMouseLeave = () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
      }

      icon.addEventListener("mouseenter", handleMouseEnter)
      icon.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        icon.removeEventListener("mouseenter", handleMouseEnter)
        icon.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])

  return (
    <footer ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-8 text-white drop-shadow-lg"
          style={{ fontFamily: '"CustomFont", "Comic Sans MS", "Marker Felt", "Chalkduster", cursive, sans-serif' }}
        >
          Let’s connect!
        </h2>

        <p
          className="text-center text-white text-xl mb-16"
          style={{ fontFamily: '"CustomFont", "Comic Sans MS", "Marker Felt", "Bradley Hand", cursive, sans-serif' }}
        >
          "Bringing ideas to life, one frame at a time" ✨
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card bg-[#FF7560] p-8 shadow-[8px_8px_0_0_#000] transform hover:scale-105 transition-all duration-300 block"
            >
              <div className="text-center">
                <div
                  ref={(el) => {
                    if (el) iconsRef.current[index] = el
                  }}
                  className={`w-16 h-16 ${contact.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                >
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contact.platform}</h3>
                <p className="text-black break-all">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-[#FF9160] p-2 shadow-[8px_8px_0_0_#000] inline-block">
            <p className="text-white font-bold">© 2025 Facundo Diaz - 2D Animator & Motion Graphics Artist</p>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <p className="text-white/100 italic">Developed by Gonza_Bonadeo</p>
              <a
                href="https://github.com/Gxnza48"
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon text-black/80  hover:text-black text-xl relative -translate-y-1"
                aria-label="GitHub Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.286 3.438 9.773 8.207 11.387.6.111.793-.261.793-.577 0-.285-.012-1.231-.018-2.234-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.521.117-3.172 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 013.003-.403c1.018.005 2.042.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.651.244 2.869.12 3.172.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.625-5.48 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.19.694.801.576C20.565 22.067 24 17.581 24 12.297 24 5.67 18.627 0.297 12 0.297z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
