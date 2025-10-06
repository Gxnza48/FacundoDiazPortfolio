"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const getYouTubeId = (url: string): string | null => {
  try {
    const u = new URL(url)
    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "")
    }
    // youtube.com/watch?v=<id>
    if (u.searchParams.has("v")) {
      return u.searchParams.get("v")
    }
    // youtube.com/embed/<id>
    if (u.pathname.includes("/embed/")) {
      return u.pathname.split("/embed/")[1]?.split("/")[0] || null
    }
    return null
  } catch {
    return null
  }
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const experiences = [
    {
      title: "2d character animator",
      company: "Wasted Series",
      year: "2023 - Present",
      description:
        "Hired as lead animator and character rigger for a complete season of the animated series. Dealt with Complex scenes involving traditional and rigged techniques, as well as more hybrid and experimental situations.",
      link: "https://www.youtube.com/watch?v=Q8XKDVYBcQc",
    },
    {
      title: "Character Animator",
      company: "Dalenteam",
      year: "2023",
      description:
        "Hired as lead animator for flagship Youtube series, with tight deadlines, a very specific style which I could not deaviate from and had to respect throughout production. Still proud of the tight results.",
      link: "https://www.youtube.com/watch?v=gKvS2x8hyps&t=6s",
    },
    {
      title: "Conicet documental",
      company: "Freelance",
      year: "2020 - 2021",
      description:
        "Storyboarded, designed and animated segments for a range of science-related projects. As my first big job, this gave me the best possible introduction to the production pipeline, which I have no more than prefected since then.",
      // Embed específico pedido por el cliente:
      link: "https://youtu.be/kkSvaHEk_z0?si=3TSWHi1k9FcVD8KU",
    },
    {
      title: "2D Animation Teacher",
      company: "Arte en Foco",
      year: "Present",
      description:
        "Teacher of a 9 month long course covering character animation with after effects and toon boom as main programs",
    },
  ] as const

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
        <h2 className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const ytId = exp.link ? getYouTubeId(exp.link) : null
            const embedSrc = ytId
              ? `https://www.youtube-nocookie.com/embed/${ytId}`
              : null

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="bg-[#EA6463] p-8 shadow-[8px_8px_0_0_#000] transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-white/90 mb-2">{exp.company}</p>
                  </div>
                  <span className="text-black font-bold bg-white/20 px-4 py-2 rounded-full">
                    {exp.year}
                  </span>
                </div>

                <p className="text-black mb-4">{exp.description}</p>

                {/* Si hay link, mostramos el video embebido en lugar del botón */}
                {embedSrc ? (
                  <div className="w-full rounded-xl overflow-hidden shadow-[6px_6px_0_0_#000]">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={embedSrc}
                        title={`${exp.title} – ${exp.company}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
