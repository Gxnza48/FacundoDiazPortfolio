"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Header = () => {
  const headerRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const stickersRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(profileRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" })
      .fromTo(
        nameRef.current,
        { y: -100, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "bounce.out" },
        "-=0.5",
      )
      .fromTo(
        subtitleRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(aboutRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .fromTo(videosRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4")
      .fromTo(
        buttonsRef.current?.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.3",
      )

    if (stickersRef.current) {
      const stickers = stickersRef.current.children

      gsap.fromTo(
        stickers,
        { scale: 2.4, opacity: 0 },
        {
          scale: 3,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "back.out(1.7)",
          delay: 2,
        },
      )

      Array.from(stickers).forEach((sticker, index) => {
        gsap.to(sticker, {
          y: "+=20",
          rotation: "+=5",
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.5,
        })
      })
    }
  }, [])

  // ✅ Nueva función de descarga local
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/facundoCv.pdf" // archivo dentro de /public
    link.download = "Facundo_Diaz_CV.pdf" // nombre con el que se descargará
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header ref={headerRef} className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden">
      {/* Stickers de fondo */}
      <div ref={stickersRef} className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://i.ibb.co/LDHktnX2/tuki3.png"
          alt="Sticker 1"
          className="absolute w-20 h-20 md:w-24 md:h-24 opacity-100"
          style={{ top: "15%", left: "10%", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
        />
        <img
          src="https://i.ibb.co/GQs9kDrJ/jake2.png"
          alt="Sticker 2"
          className="absolute w-16 h-16 md:w-20 md:h-20 opacity-100"
          style={{ top: "25%", right: "15%", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
        />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div ref={profileRef} className="mb-8">
          <div className="profile-picture">
            <img
              src="https://i.ibb.co/nq3M5Py2/Perfil7.jpg"
              alt="Facundo Diaz"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div className="relative">
          <h1
            ref={nameRef}
            className="text-6xl md:text-8xl font-bold text-white mb-4 font-comic drop-shadow-lg"
            style={{
              textShadow: "4px 4px 0px #EA6463, 8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            Facundo Diaz
          </h1>
          <p ref={subtitleRef} className="text-2xl md:text-3xl text-white mb-8 font-handwritten drop-shadow-md">
            2D Animator & Motion Graphics artist
          </p>
        </div>

        <div ref={aboutRef} className="bg-[#FF7560] p-8 shadow-[8px_8px_0_0_#000] mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
          <div className="profile-picture">
            <img
              src="https://i.ibb.co/3m7WCpxs/foto-presentacion.jpg"
              alt="Facundo Diaz"
              crossOrigin="anonymous"
            />
          </div>
          <p className="text-black text-lg leading-relaxed">
            Facundo Diaz is a 2d Character Animator, both rigged and traditional. Motion Graphics, storyboard artist and illustrator. Also teacher at Arte en Foco Photography School. Studied film at the Interamerican Open University, drawing at the Barocelli art academy and Blender at the National Technical University.
            Currently working as both a freelancer and as lead animator in the Wasted animated series, running since 2024.
          </p>
        </div>

        {/* Reels */}
        <div ref={videosRef} className="flex flex-col md:flex-row justify-center items-start gap-6 mb-8">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h4 className="text-white text-xl font-bold mb-2">2D Animation Reel</h4>
            <div className="w-full aspect-video shadow-[8px_8px_0_0_#000]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zx1XHP1iu-c"
                title="2D Animation Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h4 className="text-white text-xl font-bold mb-2">Motion Graphics Reel</h4>
            <div className="w-full aspect-video shadow-[8px_8px_0_0_#000]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XD3iwdQanhc"
                title="Motion Graphics Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div ref={buttonsRef} className="flex justify-center items-center mt-6">
  <button
    onClick={downloadCV}
    className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-lg text-white transition-all duration-300 rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[0_0_25px_#EA6463] group bg-gradient-to-r from-[#EA6463] to-[#ff9c89] hover:from-[#ff8173] hover:to-[#EA6463]"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#EA6463] via-[#ff9c89] to-[#EA6463] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></span>
    <span className="relative z-10 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Download CV
    </span>
  </button>
</div>

      </div>
    </header>
  )
}

export default Header
