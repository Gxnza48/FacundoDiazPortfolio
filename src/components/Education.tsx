"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const education = [
    {
      institution: "Universidad Abierta Interamericana",
      degree: "Audiovisual Arts",
      year: "2015 - 2019",
      description: "Comprehensive training in audiovisual production, animation, and digital design.",
    },
    {
      institution: "Carlos Barocelli Art School",
      degree: "Specialization in Animation",
      year: "2023",
      description: "Intensive course on advanced 2D animation techniques and storytelling.",
    },
    {
      institution: "Universidad Tecnologica Nacional",
      degree: "Blender modelling and animation course",
      year: "2024",
      description: "Intesive course of 3d modeling and rendering"

    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll(".education-card"),
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg"
          
        >
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="education-card bg-[#FF9160]  p-8 shadow-[8px_8px_0_0_#000] relative">
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 w-1 h-8 bg-white/50 transform -translate-x-1/2 z-10" />
              )}

<div className="text-center">
  <div className="mb-4 flex justify-center">
    {edu.institution.includes("Interamericana") && (
      <img
        src="https://i.ibb.co/r2ZPxvL5/3267c174-2a3b-420f-b1d1-658c8fce984b-removalai-preview.png"
        alt="UAI Logo"
        className="h-16"
      />
    )}
    {edu.institution.includes("Tecnologica") && (
      <img
        src="https://i.ibb.co/27WqYCXf/7d3852b8-93f9-4a34-94d3-41cee93612bd-removalai-preview.png"
        alt="UTN Logo"
        className="h-16"
      />
    )}
    {edu.institution.includes("Barocelli") && (
      <img
        src="https://i.ibb.co/mVhfNw6H/4d044efe-52d3-423e-8319-5d422a0afc09-removalai-preview.png"
        alt="Carlos Barocelli Logo"
        className="h-16"
      />
    )}
  </div>
  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
  <p className="text-lg text-white/90 mb-2">{edu.degree}</p>
  <span className="inline-block bg-white/20 text-black font-bold px-4 py-2 rounded-full mb-4">
    {edu.year}
  </span>
  <p className="text-black">{edu.description}</p>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
