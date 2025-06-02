"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Languages = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const languages = [
    {
      language: "Spanish",
      level: "Native",
      percentage: 100,
      flag: "https://flagcdn.com/w80/ar.png", // Bandera Argentina
    },
    {
      language: "English",
      level: "Advanced",
      percentage: 85,
      flag: "https://flagcdn.com/w80/us.png", // Bandera Estados Unidos
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll(".language-card"),
      { scale: 0, rotation: 360, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Animate progress bars
    section.querySelectorAll(".progress-bar").forEach((bar, index) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${languages[index].percentage}%`,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">
          Languages
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="language-card bg-[#EA6463] p-8 shadow-[8px_8px_0_0_#000] rounded-lg"
            >
              <div className="text-center">
                <img
                  src={lang.flag}
                  alt={`${lang.language} flag`}
                  className="w-12 h-8 mx-auto mb-4 rounded shadow"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {lang.language}
                </h3>
                <p className="text-lg text-white/90 mb-4">{lang.level}</p>

                {/* Modern progress bar */}
                <div className="w-full bg-white/20 rounded-full h-5 overflow-hidden shadow-inner mb-2">
                  <div
                    className="progress-bar h-full rounded-full transition-all duration-1000"
                    style={{
                      width: "0%",
                      background:
                        "linear-gradient(90deg, #00580C, #53FF43)",
                      boxShadow: "0 0 10px rgba(255,255,255,0.6)",
                    }}
                  />
                </div>

                <span className="text-black font-bold">{lang.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
