"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const experiences = [
    {
      title: "2d character animator",
      company: "Wasted Series",
      year: "2023 - Present",
      description:
        "Rigged character development and animations for TV series.",
      link: "https://www.youtube.com/watch?v=Q8XKDVYBcQc",
    },
    {
      title: "Character Animator",
      company: "Dalenteam",
      year: "2023",
      description: "Storyboarded, adn did character animation for a pre-teen animated series",
      link: "https://www.youtube.com/watch?v=gKvS2x8hyps&t=6s",

    },
    {
      title: "Lipsync and 2d character animator",
      company: "Pipalupa animation studio",
      year: "2022",
      description: "Animated content creation using toon boomrigs",
    },
    {
      title: "Conicet documental",
      company: "Freelance",
      year: "2020 - 2021",
      description: "Storyboarded, designed and animated segments for a range of youtube projects",
    },
    {
      title: "2D Animation Teacher",
      company: "Arte en Foco",
      year: "Present",
      description: "Teacher of a 9 month long course covering character animation with after effects and toon boom as main programs",

    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? -200 : 200, opacity: 0, rotation: index % 2 === 0 ? -10 : 10 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg"
          
        >
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="bg-[#EA6463]  p-8 shadow-[8px_8px_0_0_#000] transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-white/90 mb-2">{exp.company}</p>
                </div>
                <span className="text-black font-bold bg-white/20 px-4 py-2 rounded-full">{exp.year}</span>
              </div>
              <p className="text-black mb-4">{exp.description}</p>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#EA6463] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                View Project 🎬
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
