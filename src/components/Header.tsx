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
  const videosRef = useRef<HTMLDivElement>(null)

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

  const downloadCV = () => {
    window.open(
      "https://download1085.mediafire.com/hd428jprjtxggY3SuZo5HV_0Qemy87bjGlRl1oZvVgKWak--v-VhB7rcRXlOKDwvgkHeAwsCmUU51efokOl2i04wrQpWe5InABPzEkq7lyQfbbLxZMlRrjpnr5ql_FMWYErJ68XAbRRUcxEnmizEmNMxdiPE-HABo6H1832Iw_jcvQ/fnn8uvf6uq976ih/Facundo+D%C3%ADaz+-+Resume+2025+%281%29.pdf",
      "_blank",
    )
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
            <h4 className="text-white text-xl font-bold mb-2"> 2D Animation Reel</h4>
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
            <h4 className="text-white text-xl font-bold mb-2"> Motion Graphics Reel</h4>
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

        <div ref={buttonsRef} className="flex justify-center items-center">
          <button
            onClick={downloadCV}
            className="bg-[#EA6463] hover:bg-[#d55453] text-white px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-[8px_8px_0_0_#000] hover:shadow-xl"
          >
            📄 Download CV
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
