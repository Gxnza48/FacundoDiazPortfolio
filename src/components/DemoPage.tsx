"use client"

import { useEffect, useRef, useState } from "react"

interface VideoItem {
  title: string
  url: string
  description?: string
}

interface TreeNode {
  id: string
  title: string
  intro?: string
  videos?: VideoItem[]
  children?: TreeNode[]
  isExpanded?: boolean
}

const toYouTubeEmbed = (url: string): string | null => {
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "")
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }
    if (u.hostname.includes("youtube.com") && u.pathname.includes("/shorts/")) {
      const id = u.pathname.split("/shorts/")[1]?.split("/")[0]
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }
    if (u.hostname.includes("youtube.com") && u.searchParams.get("v")) {
      const id = u.searchParams.get("v")!
      return `https://www.youtube-nocookie.com/embed/${id}`
    }
    if (u.pathname.includes("/embed/")) {
      const id = u.pathname.split("/embed/")[1]?.split("/")[0]
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }
    return null
  } catch {
    return null
  }
}

const isImageUrl = (url: string) => {
  const lower = url.toLowerCase()
  return (
    lower.includes("i.ibb.co") ||
    lower.endsWith(".png") ||
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".webp") ||
    lower.endsWith(".gif")
  )
}

const DemoPage = () => {
  const pageRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // DEMO REELS
  const REEL_2D_URL = "https://www.youtube.com/embed/zx1XHP1iu-c"
  const REEL_MG_URL = "https://www.youtube.com/embed/XD3iwdQanhc"

  const featuredReels: { title: string; url: string }[] = [
    { title: "2D Animation Reel", url: REEL_2D_URL },
    { title: "Motion Graphics Reel", url: REEL_MG_URL },
  ]

  // DATA (orden: Animation → Motion Graphics → Ilustration → StoryBoard)
  const [treeData, setTreeData] = useState<TreeNode[]>([
    {
      id: "animacion",
      title: "Animation",
      children: [
        {
          id: "rigged",
          title: "Rigged",
          intro:
            "It took me tons of practice, but eventually I learned how to give rigged animation the same charm that I'm able to give to hand drawn.",
          videos: [
            { title: "Wasted - First Person Shot", url: "https://www.youtube.com/embed/aheIzZLgd7E" },
            { title: "Gaucho Walk Cycle", url: "https://www.youtube.com/embed/ORX97rnTWyk" },
            { title: "Wasted Cops", url: "https://www.youtube.com/embed/DO8olhpkUog" },
            { title: "Flower Pots with AI Backgrounds", url: "https://www.youtube.com/embed/JQpRVYzF0Ns" },
            { title: "Wasted Retrospective Sequence", url: "https://www.youtube.com/embed/QbMMwVXTQWE" },
            { title: "Silhouette Animation", url: "https://www.youtube.com/embed/xcaESOF6ZvE" },
          ],
        },
        {
          id: "tradicional",
          title: "Traditional",
          intro:
            "Traditional animation has always been my main focus of study, and although I always knew to diversify my toolkit with broader techniques, traditional has a special place in my heart. It's as good as it comes.",
          videos: [
            {
              title: "Clothing Presentation – Mixed Techniques",
              url: "https://youtu.be/xOWdBrKuUCU",
              description:
                "Project involving a clothing presentation! With a mix of 3D, 2D and motion graphics.",
            },
            { title: "Gaucho Horse-Riding Cycle", url: "https://www.youtube.com/embed/X_ScI0t51mE" },
            { title: "George Liquor - Sopranos Voice", url: "https://www.youtube.com/embed/8_W-vQ5h-6U" },
            { title: "Frankenstein's Monster", url: "https://www.youtube.com/embed/nU02y68_jBg" },
            { title: "Wasted - Non-Organic Objects", url: "https://www.youtube.com/embed/8pyhculZ8wE" },
            { title: "Eternaut Tribute", url: "https://youtube.com/embed/ncwNK-qb6nI" },
            { title: "Jake Dramatic Jump", url: "https://www.youtube.com/embed/pUSzUQukcTc" },
            { title: "Antagonist Dialogue Test", url: "https://www.youtube.com/embed/npZN5GLrlAg" },
          ],
        },
      ],
    },

    {
      id: "motion-graphics",
      title: "Motion Graphics",
      intro:
        "I became enamoured with Motion Graphics ever since I began teaching After Effects some time ago. The possibility to combine techniques and styles in a sort of moving collage frees the imagination to think of endless visual experiences.",
      videos: [
        { title: "Motion Graphics – Intro", url: "https://youtu.be/FfNwveF9LOA" },
        { title: "Brand Animation Test 1", url: "https://www.youtube.com/embed/tUJxGQC-j-E" },
        { title: "Brand Animation Test 2", url: "https://www.youtube.com/embed/eaolrFA8CVY" },
        { title: "Brand Animation Test 3", url: "https://www.youtube.com/embed/FWuGNP4RLt0" },
        { title: "Pixel Art Burger Animation", url: "https://www.youtube.com/embed/A4PlrefxicU" },
        { title: "Corporate Video Intro", url: "https://www.youtube.com/embed/1pj_a-qQ-NA" },
        { title: "Photography School Logo", url: "https://www.youtube.com/embed/mKRa5luvzzk" },
        { title: "3D + AI Ad – Fun Experiment", url: "https://youtube.com/shorts/jJ2J25TG8TI?feature=share" },
        { title: "Event Logo Animation", url: "https://youtu.be/6DPLCuXo18U" },
        { title: "Snack Animation 1", url: "https://youtube.com/shorts/P11hUXv74Hw?feature=share" },
        { title: "Snack Animation 2", url: "https://youtube.com/shorts/d8-7Jd1hOe0?feature=share" },
      ],
    },

    {
      id: "ilustracion",
      title: "Ilustration",
      intro:
        "Learning animation I slowly became a proficient illustrator and designer. I've made from promotional posts to concept art to posters. These are the highlights.",
      children: [
        {
          id: "portfolio-ilustraciones",
          title: "Ilustration Portfolio",
          videos: [
            { title: "", url: "https://i.ibb.co/5hJdZRzP/Concepto-moto-bici.png" },
            { title: "", url: "https://i.ibb.co/7Jjqh2sv/6-Concepto-psj-paloma.png" },
            { title: "", url: "https://i.ibb.co/gLvmfKF5/Hoja-psj.png" },
            { title: "", url: "https://i.ibb.co/cXK8N6qc/concepto-auto.png" },
            { title: "", url: "https://i.ibb.co/gY78MmT/1-1dise-os-juntos.png" },
            { title: "", url: "https://i.ibb.co/297mZS4/1-Dibujo-jake-kill-v2.png" },
            { title: "", url: "https://i.ibb.co/Myc6jWgY/2-illust-v5.png" },
            { title: "", url: "https://i.ibb.co/btYY0MT/3-tuki-cogo-gallinas-v1.png" },
            { title: "", url: "https://i.ibb.co/WvYYsfK8/4-concepto-grande.png" },
            { title: "", url: "https://i.ibb.co/dwLn32tg/pombero.png" },
            { title: "", url: "https://i.ibb.co/fzb9GzDT/6-Entre-Plumas-poster.png" },
            { title: "", url: "https://i.ibb.co/67CbCmhg/7-imilia-conepto1.png" },
          ],
        },
        {
          id: "dibujo-figura",
          title: "Figure Drawing",
          intro:
            "Figure drawing has been fundamental to my artistic development. These studies focus on anatomy, gesture, and capturing the essence of human form through various techniques and approaches.",
          videos: [
            { title: "", url: "https://i.ibb.co/spd7yHp1/life-port-00000.png" },
            { title: "", url: "https://i.ibb.co/ymTz6YZR/life-port-00003.png" },
            { title: "", url: "https://i.ibb.co/v6t4vhwH/life-port-00002.png" },
            { title: "", url: "https://i.ibb.co/qM4y2MkC/life-port-00001.png" },
            { title: "", url: "https://i.ibb.co/KpmQSNzs/life-port-00006.png" },
            { title: "", url: "https://i.ibb.co/x9VzxDr/life-port-00005.png" },
            { title: "", url: "https://i.ibb.co/7dwdbYwN/life-port-00004.png" },
            { title: "", url: "https://i.ibb.co/VWzKDyxq/life-port-00007.png" },
            { title: "", url: "https://i.ibb.co/4ny0r3nB/life-port-00008.png" },
          ],
        },
      ],
    },

    {
      id: "storyboard",
      title: "StoryBoard",
      intro:
        "Storyboards are crucial for storytelling purposes. As an individualist I've learned to master its most important tools and to adapt the design for the type of job.",
      videos: [
        { title: "Soccer Team Sponsor Project", url: "https://www.youtube.com/embed/XR7YDbi5YkQ" },
        { title: "Web Series - Lead Animator", url: "https://www.youtube.com/embed/jv95wPsJ1Y0" },
        { title: "Fictional Reboot - Action Musical", url: "https://www.youtube.com/embed/QuFYG4r3iIo" },
      ],
    },
  ])

  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    window.scrollTo(0, 0)

    page.style.opacity = "0"
    page.style.transform = "translateY(20px)"
    setTimeout(() => {
      page.style.transition = "all 0.8s ease-out"
      page.style.opacity = "1"
      page.style.transform = "translateY(0)"
    }, 100)

    const treeNodes = document.querySelectorAll(".tree-node")
    treeNodes.forEach((node, index) => {
      const el = node as HTMLElement
      el.style.transform = "translateX(-100px)"
      el.style.opacity = "0"
      setTimeout(() => {
        el.style.transition = "all 0.6s ease-out"
        el.style.transform = "translateX(0)"
        el.style.opacity = "1"
      }, 300 + index * 100)
    })

    const videoPanel = document.querySelector(".video-panel") as HTMLElement
    if (videoPanel) {
      videoPanel.style.transform = "translateX(100px)"
      videoPanel.style.opacity = "0"
      setTimeout(() => {
        videoPanel.style.transition = "all 0.8s ease-out"
        videoPanel.style.transform = "translateX(0)"
        videoPanel.style.opacity = "1"
      }, 500)
    }
  }, [])

  const toggleNode = (nodeId: string) => {
    setTreeData((prev) => {
      const updateNode = (nodes: TreeNode[]): TreeNode[] =>
        nodes.map((n) => {
          if (n.id === nodeId) return { ...n, isExpanded: !n.isExpanded }
          if (n.children) return { ...n, children: updateNode(n.children) }
          return n
        })
      return updateNode(prev)
    })
  }

  const selectNode = (node: TreeNode) => {
    setSelectedNode(node)
    const content = document.querySelector(".video-content") as HTMLElement
    if (content) {
      content.style.transform = "scale(0.9)"
      content.style.opacity = "0"
      setTimeout(() => {
        content.style.transition = "all 0.5s ease-out"
        content.style.transform = "scale(1)"
        content.style.opacity = "1"
        const scroller = document.querySelector(".video-content .overflow-y-auto") as HTMLElement | null
        if (scroller) scroller.scrollTop = 0
      }, 50)
    }
  }

  const openImagePreview = (imageUrl: string) => setSelectedImage(imageUrl)
  const closeImagePreview = () => setSelectedImage(null)

  const renderTreeNode = (node: TreeNode, level = 0) => {
    const hasChildren = !!(node.children && node.children.length)
    const hasVideos = !!(node.videos && node.videos.length)

    return (
      <div key={node.id} style={{ marginLeft: level * 32 }}>
        <div
          className={`tree-node flex items-center p-4 bg-[#EA6463] shadow-[8px_8px_0_0_#000] cursor-pointer transform hover:scale-105 transition-all duration-300 mb-4 ${
            selectedNode?.id === node.id ? "ring-4 ring-white" : ""
          }`}
          onClick={() => {
            if (hasChildren) toggleNode(node.id)
            if (hasVideos) selectNode(node)
          }}
        >
          {hasChildren && <span className="text-white text-xl mr-3">{node.isExpanded ? "📂" : "📁"}</span>}
          {hasVideos && <span className="text-white text-xl mr-3">🎬</span>}
          <h3 className="text-xl font-bold text-white">{node.title}</h3>
          {hasChildren && <span className="ml-auto text-white">{node.isExpanded ? "▼" : "▶"}</span>}
        </div>

        {hasChildren && node.isExpanded && (
          <div className="ml-8 space-y-2">{node.children?.map((child) => renderTreeNode(child, level + 1))}</div>
        )}
      </div>
    )
  }

  // Imagen (tile) sin textos
  const renderImageTile = (item: VideoItem, index: number) => (
    <button
      key={`img-${index}`}
      className="relative bg-black rounded-xl overflow-hidden group"
      onClick={() => openImagePreview(item.url)}
      title="Open image"
    >
      <div className="aspect-square bg-gray-900">
        <img
          src={item.url || "/placeholder.svg"}
          alt="Artwork"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </div>
    </button>
  )

  // Video en LISTA (uno debajo del otro, sin textos)
  const renderVideoListItem = (item: VideoItem, index: number) => {
    const embedUrl = toYouTubeEmbed(item.url) || item.url
    return (
      <div key={`vid-${index}`} className="bg-black rounded-xl overflow-hidden">
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={`video-${index}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    )
  }

  // Galería mixta: videos en LISTA (stack), imágenes en grilla
  const renderGallery = (items: VideoItem[] = []) => {
    const videos = items.filter((it) => !isImageUrl(it.url))
    const images = items.filter((it) => isImageUrl(it.url))

    return (
      <div
        className="overflow-y-auto pr-2 custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 300px)", minHeight: "300px" }}
      >
        {videos.length > 0 && (
          <div className="space-y-4">
            {videos.map((v, idx) => renderVideoListItem(v, idx))}
          </div>
        )}

        {images.length > 0 && (
          <div className={videos.length > 0 ? "mt-6 grid grid-cols-2 md:grid-cols-3 gap-4" : "grid grid-cols-2 md:grid-cols-3 gap-4"}>
            {images.map((img, idx) => renderImageTile(img, idx))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={pageRef} className="min-h-screen py-20 px-4 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-4">Interactive Portfolio</h1>
          <p className="text-white text-xl opacity-90">Explore my work organized by different categories</p>
        </div>

        {/* Demo Reels: fila propia */}
        {featuredReels.some((r) => r.url) && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white flex items-center mb-6">
              <span className="mr-3">⭐</span> Demo Reels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredReels.map((r, i) => {
                const embed = r.url ? toYouTubeEmbed(r.url) || r.url : null
                if (!embed) return null
                return (
                  <div key={i} className="bg-black rounded-2xl overflow-hidden shadow-[6px_6px_0_0_#000]">
                    <div className="aspect-video">
                      <iframe
                        src={embed}
                        title={r.title}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold text-lg">{r.title}</h4>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Tree Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">📁</span>
              Categories
            </h3>
            {treeData.map((node) => renderTreeNode(node))}
          </div>

          {/* Right: Display */}
          <div className="video-panel bg-[#FF9160] p-4 md:p-8 shadow-[8px_8px_0_0_#000] min-h-[500px] md:min-h-[600px] overflow-hidden">
            {selectedNode ? (
              <div className="video-content">
                <h3 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center">
                  <span className="mr-3">
                    {selectedNode.id.includes("dibujo") || selectedNode.id.includes("portfolio") ? "🎨" : "🎬"}
                  </span>
                  {selectedNode.title}
                </h3>

                {/* Intro solo para no-ilustración */}
                {selectedNode.intro &&
                  !(selectedNode.id === "portfolio-ilustraciones" || selectedNode.id === "dibujo-figura") && (
                    <div className="bg-white/10 rounded-3xl p-4 mb-6">
                      <p className="text-white text-xl leading-relaxed">{selectedNode.intro}</p>
                    </div>
                  )}

                {/* Videos en LISTA + imágenes en GRID */}
                {renderGallery(selectedNode.videos)}
              </div>
            ) : (
              <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                <div className="text-6xl mb-6 animate-bounce">👀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Select a Category</h3>
                <p className="text-black text-lg max-w-md mb-6">Click on any category to preview videos and images</p>
                <div className="text-white/70">
                  <p className="text-sm">👈 Explore the folders to view my work</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 md:p-8"
          onClick={closeImagePreview}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-black/50 rounded-lg overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeImagePreview()
              }}
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 text-xl hover:text-gray-300 transition-colors z-10"
              aria-label="Close preview"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Preview"
                className="max-w-full max-h-[80vh] object-contain rounded shadow-lg"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 768px) {
          .custom-scrollbar {
            max-height: 60vh !important;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  )
}

export default DemoPage
