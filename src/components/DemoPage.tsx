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

const DemoPage = () => {
  const pageRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
            {
              title: "Wasted - First Person Shot",
              url: "https://www.youtube.com/embed/StrbbJch0-I",
              description:
                "My best rig-based shot in my opinion. Not only was this made in the last episode I ever made for Wasted, with my technique as refined as possible, this also included a part animated in the first person, with a special head bobbing movement for the character's point of view.",
            },
            {
              title: "Gaucho Walk Cycle",
              url: "https://www.youtube.com/embed/ORX97rnTWyk",
              description:
                "Along with my love for gauchos, I decided to make the most complex design possible and give it a shot at a rigged walk. I also composed the music for this video.",
            },
            {
              title: "Wasted Cops 1",
              url: "https://www.youtube.com/embed/CiB4aXHohfs",
              description: "Humans on Wasted! I wish these 2 cops had been given more screen time.",
            },
            {
              title: "Wasted Cops 2",
              url: "https://www.youtube.com/embed/DO8olhpkUog",
              description: "Humans on Wasted! I wish these 2 cops had been given more screen time.",
            },
            {
              title: "Flower Pots with AI Backgrounds",
              url: "https://www.youtube.com/embed/JQpRVYzF0Ns",
              description:
                "These cute flower pots were made with photo-reference, and the fantasy backgrounds with some AI tools, since this allowed to make something both with realistic features and tailor-made for the scene. I also composed the music.",
            },
            {
              title: "Wasted Retrospective Sequence",
              url: "https://www.youtube.com/embed/ZEBhUXyideA",
              description:
                "This stylized shot was made for a retrospective sequence in Wasted. Mounted and animated on After Effects.",
            },
            {
              title: "Silhouette Animation",
              url: "https://www.youtube.com/embed/xcaESOF6ZvE",
              description:
                "I love silhouettes. They communicate so much with so little. This would have been quite complex but I resolved it rather quickly with this method.",
            },
          ],
        },
        {
          id: "tradicional",
          title: "Traditional",
          intro:
            "Traditional animation has always been my main focus of study, and although I always knew to diversify my toolkit with broader techniques, traditional has a special place in my heart. It's as good as it comes.",
          videos: [
            {
              title: "Gaucho Horse-Riding Cycle",
              url: "https://www.youtube.com/embed/8PvyLr1vgHw",
              description:
                "I love gauchos, and at some point I motivated myself to try and animate a horse-riding cycle. It's not gonna be the last.",
            },
            {
              title: "George Liquor - Sopranos Voice",
              url: "https://www.youtube.com/embed/8_W-vQ5h-6U",
              description:
                "I didn't grow up with Ren and Stimpy, but watching it as an adult was a great experience. George Liquor is such an unnerving character that as soon as I heard an unrelated voice line from The Sopranos, I knew it fitted the animated character like a glove.",
            },
            {
              title: "Frankenstein's Monster",
              url: "https://www.youtube.com/embed/1pkK9AGlHVM",
              description:
                "For a personal project I decided to make a more complex type of anatomy for a character. This was the result. My own interpretation of Frankenstein's monster.",
            },
            {
              title: "Wasted - Non-Organic Objects",
              url: "https://www.youtube.com/embed/8pyhculZ8wE",
              description:
                "For my work on the Wasted series I looked for ways to integrate traditional animation into the more rigged-oriented workspace. I wasn't too familiar with animating non-organic objects either, but I gave it a try using references and I think everyone was happy with the result.",
            },
            {
              title: "Eternaut Tribute",
              url: "https://www.youtube.com/embed/pUSzUQukcTc",
              description:
                "For a social media post for Wasted I decided to make a stylized tribute of the Eternaut series.",
            },
            {
              title: "Jake Dramatic Jump",
              url: "https://www.youtube.com/embed/pUSzUQukcTc",
              description:
                "Also for Wasted, I was allowed again to make a traditional shot of Jake jumping dramatically. They really loved the results.",
            },
            {
              title: "Antagonist Dialogue Test",
              url: "https://www.youtube.com/embed/npZN5GLrlAg",
              description:
                "For another personal project, I made this dialogue test of an antagonist talking menacingly to his henchman.",
            },
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
        {
          title: "Soccer Team Sponsor Project",
          url: "https://www.youtube.com/embed/XR7YDbi5YkQ",
          description:
            "I've made storyboards for many freelance projects I've been involved in. In this case it was for an official sponsor of a soccer team. I wanted to convey the grandness of the event.",
        },
        {
          title: "Web Series - Lead Animator",
          url: "https://www.youtube.com/embed/jv95wPsJ1Y0",
          description:
            "This is a web series which I worked shortly for. I was lead animator and storyboard artist for 2 episodes. Being really explicit about design was crucial since the background artist based their designs heavily on my sketches.",
        },
        {
          title: "Fictional Reboot - Action Musical",
          url: "https://www.youtube.com/embed/QuFYG4r3iIo",
          description:
            "Personal project involving a fictional reboot of an old series. I wanted to make an action-heavy musical sequence.",
        },
      ],
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics",
      intro:
        "I became enamoured with Motion Graphics ever since I began teaching After Effects some time ago. The possibility to combine techniques and styles in a sort of moving collage frees the imagination to think of endless visual experiences. This motivated me to train myself beyond 2D into other areas such as 3D, photography, illustration and musical composition.",
      videos: [
        {
          title: "Brand Animation Test 1",
          url: "https://www.youtube.com/embed/tUJxGQC-j-E",
          description:
            "Animation test made with real brands in mind, working with mixed techniques and a frenetic rhythm. This makes the result eye-catching, iconic and diverse in style.",
        },
        {
          title: "Brand Animation Test 2",
          url: "https://www.youtube.com/embed/eaolrFA8CVY",
          description:
            "Animation test made with real brands in mind, working with mixed techniques and a frenetic rhythm. This makes the result eye-catching, iconic and diverse in style.",
        },
        {
          title: "Brand Animation Test 3",
          url: "https://www.youtube.com/embed/FWuGNP4RLt0",
          description:
            "Animation test made with real brands in mind, working with mixed techniques and a frenetic rhythm. This makes the result eye-catching, iconic and diverse in style.",
        },
        {
          title: "Pixel Art Burger Animation",
          url: "https://www.youtube.com/embed/A4PlrefxicU",
          description:
            "This animation was based off the pixel-art illustration made by Jack Haege. I wanted to make it an explosion in color and editing. The whole burger is made in 3D and the ketchup and mustard are 2D hand-drawn animations.",
        },
        {
          title: "Corporate Video Intro",
          url: "https://www.youtube.com/embed/1pj_a-qQ-NA",
          description:
            "This is an intro for a corporate video presentation which mixes 3D models and 2D elements, as well as music and sound design by me.",
        },
        {
          title: "Photography School Logo",
          url: "https://www.youtube.com/embed/mKRa5luvzzk",
          description:
            "This is a logo animation made for the photography school where I teach animation and motion graphics.",
        },
        {
          title: "7-Up Commercial Concept",
          url: "https://www.youtube.com/embed/B5m4yIf25e4",
          description: "Very simple and fine animation I made as a hypothetical 7-up commercial.",
        },
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
            {
              title: "Wasted Promotional Art 1",
              url: "https://i.ibb.co/pjk6vk1Q/1-Dibujo-jake-kill-v2.png",
              description: "Promotional material for the Wasted animated series. Experimenting with lineal style.",
            },
            {
              title: "Wasted Promotional Art 2",
              url: "https://i.ibb.co/5xs411DR/2-illust-v5.png",
              description:
                "Promotional material for the Wasted animated series. Experimenting with painting-like style.",
            },
            {
              title: "Wasted Promotional Art 3",
              url: "https://i.ibb.co/MDpf1sgd/5-final-titulo-2.png",
              description: "Promotional material for the Wasted animated series. Different experimental style.",
            },
            {
              title: "Gaucho Concept Art",
              url: "https://i.ibb.co/WvYYsfK8/4-concepto-grande.png",
              description: "Concept art made for a personal project involving the local 'Gaucho' figure.",
            },
            {
              title: "Live-Action Project Poster 1",
              url: "https://i.ibb.co/Lz4DxkqK/6-Entre-Plumas-poster.png",
              description: "Poster made for a live-action project still in pre-production.",
            },
            {
              title: "Thesis Project Poster",
              url: "https://i.ibb.co/0pbr7qFK/7-imilia-conepto1.png",
              description: "Poster made for my thesis project using the same team and techniques.",
            },
            {
              title: "Commission Work",
              url: "https://i.ibb.co/Z1pw7gj8/1-1dise-os-juntos.png",
              description: "Commission for a project in pre-production.",
            },
          ],
        },
        {
          id: "dibujo-figura",
          title: "Figure Drawing",
          intro:
            "Figure drawing has been fundamental to my artistic development. These studies focus on anatomy, gesture, and capturing the essence of human form through various techniques and approaches.",
          videos: [
            {
              title: "Figure Study 1",
              url: "https://i.ibb.co/spd7yHp1/life-port-00000.png",
              description: "Anatomical study focusing on muscle structure and proportions.",
            },
            {
              title: "Figure Study 2",
              url: "https://i.ibb.co/ymTz6YZR/life-port-00003.png",
              description: "Gesture drawing capturing movement and dynamic poses.",
            },
            {
              title: "Figure Study 3",
              url: "https://i.ibb.co/v6t4vhwH/life-port-00002.png",
              description: "Portrait study with emphasis on facial features and expression.",
            },
            {
              title: "Figure Study 4",
              url: "https://i.ibb.co/qM4y2MkC/life-port-00001.png",
              description: "Full body figure drawing with attention to lighting and shadow.",
            },
            {
              title: "Figure Study 5",
              url: "https://i.ibb.co/KpmQSNzs/life-port-00006.png",
              description: "Character design exploration through figure drawing techniques.",
            },
            {
              title: "Figure Study 6",
              url: "https://i.ibb.co/x9VzxDr/life-port-00005.png",
              description: "Life drawing session focusing on natural poses and proportions.",
            },
            {
              title: "Figure Study 7",
              url: "https://i.ibb.co/7dwdbYwN/life-port-00004.png",
              description: "Stylized figure drawing blending realism with cartoon elements.",
            },
            {
              title: "Figure Study 8",
              url: "https://i.ibb.co/VWzKDyxq/life-port-00007.png",
              description: "Stylized backwards drawing blending realism with cartoon elements.",
            },
            {
              title: "Figure Study 9",
              url: "https://i.ibb.co/4ny0r3nB/life-port-00008.png",
              description: "Advanced anatomy study with detailed muscle and bone structure.",
            },
          ],
        },
      ],
    },
  ])

  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    // Reset scroll position when entering demo page
    window.scrollTo(0, 0)

    // Simple CSS animations instead of GSAP
    page.style.opacity = "0"
    page.style.transform = "translateY(20px)"

    setTimeout(() => {
      page.style.transition = "all 0.8s ease-out"
      page.style.opacity = "1"
      page.style.transform = "translateY(0)"
    }, 100)

    // Animate tree nodes
    const treeNodes = document.querySelectorAll(".tree-node")
    treeNodes.forEach((node, index) => {
      const element = node as HTMLElement
      element.style.transform = "translateX(-100px)"
      element.style.opacity = "0"

      setTimeout(
        () => {
          element.style.transition = "all 0.6s ease-out"
          element.style.transform = "translateX(0)"
          element.style.opacity = "1"
        },
        300 + index * 100,
      )
    })

    // Animate video panel
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
    setTreeData((prevData) => {
      const updateNode = (nodes: TreeNode[]): TreeNode[] => {
        return nodes.map((node) => {
          if (node.id === nodeId) {
            return { ...node, isExpanded: !node.isExpanded }
          }
          if (node.children) {
            return { ...node, children: updateNode(node.children) }
          }
          return node
        })
      }
      return updateNode(prevData)
    })
  }

  const selectNode = (node: TreeNode) => {
    setSelectedNode(node)

    // Simple animation for video content
    const videoContent = document.querySelector(".video-content") as HTMLElement
    if (videoContent) {
      videoContent.style.transform = "scale(0.9)"
      videoContent.style.opacity = "0"

      setTimeout(() => {
        videoContent.style.transition = "all 0.5s ease-out"
        videoContent.style.transform = "scale(1)"
        videoContent.style.opacity = "1"
      }, 50)
    }
  }

  const openImagePreview = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeImagePreview = () => {
    setSelectedImage(null)
  }

  const renderTreeNode = (node: TreeNode, level = 0) => {
    const hasChildren = node.children && node.children.length > 0
    const hasVideos = node.videos && node.videos.length > 0

    return (
      <div key={node.id} className={`ml-${level * 8}`}>
        <div
          className={`tree-node flex items-center p-4 bg-[#EA6463] shadow-[8px_8px_0_0_#000] cursor-pointer transform hover:scale-105 transition-all duration-300 mb-4 ${
            selectedNode?.id === node.id ? "ring-4 ring-white" : ""
          }`}
          onClick={() => {
            if (hasChildren) {
              toggleNode(node.id)
            }
            if (hasVideos) {
              selectNode(node)
            }
          }}
        >
          {hasChildren && <span className="text-white text-xl mr-3">{node.isExpanded ? "📂" : "📁"}</span>}
          {hasVideos && <span className="text-white text-xl mr-3">🎨</span>}
          <h3 className="text-xl font-bold text-white">{node.title}</h3>
          {hasChildren && <span className="ml-auto text-white">{node.isExpanded ? "▼" : "▶"}</span>}
        </div>

        {hasChildren && node.isExpanded && (
          <div className="ml-8 space-y-2">{node.children?.map((child) => renderTreeNode(child, level + 1))}</div>
        )}
      </div>
    )
  }

  const renderVideoContent = (video: VideoItem, index: number) => {
    const isImage = video.url.includes("placeholder.svg") || video.url.includes("i.ibb.co")

    if (isImage) {
      return (
        <div key={index} className="bg-black rounded-2xl overflow-hidden shadow-lg">
          <div
            className="aspect-video bg-gray-800 flex items-center justify-center cursor-pointer"
            onClick={() => openImagePreview(video.url)}
          >
            <img
              src={video.url || "/placeholder.svg"}
              alt={video.title}
              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
              crossOrigin="anonymous"
            />
          </div>
          <div className="p-4">
            <h4 className="text-white font-semibold text-lg mb-2">{video.title}</h4>
            {video.description && <p className="text-white/80 text-sm leading-relaxed">{video.description}</p>}
            <p className="text-white/60 text-xs mt-2">Click image to view full size</p>
          </div>
        </div>
      )
    }

    return (
      <div key={index} className="bg-black rounded-2xl overflow-hidden shadow-lg">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-4">
          <h4 className="text-white font-semibold text-lg mb-2">{video.title}</h4>
          {video.description && <p className="text-white/80 text-xl leading-relaxed">{video.description}</p>}
        </div>
      </div>
    )
  }

  return (
    <div ref={pageRef} className="min-h-screen py-20 px-4 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-4">Interactive Portfolio</h1>
          <p className="text-white text-xl opacity-90">Explore my work organized by different categories</p>
          <div className="mt-6 text-white/70"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tree Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">📁</span>
              Categories
            </h3>
            {treeData.map((node) => renderTreeNode(node))}
          </div>

          {/* Video Display */}
          <div className="video-panel bg-[#FF9160] p-8 shadow-[8px_8px_0_0_#000] min-h-[600px]">
            {selectedNode ? (
              <div className="video-content">
                <h3 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center">
                  <span className="mr-3">{selectedNode.id.includes("dibujo") ? "🎨" : "🎬"}</span>
                  {selectedNode.title}
                </h3>

                {selectedNode.intro && (
                  <div className="bg-white/10 rounded-3xl p-4 mb-6">
                    <p className="text-white text-xl leading-relaxed">{selectedNode.intro}</p>
                  </div>
                )}

                <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                  {selectedNode.videos?.map((video, index) => renderVideoContent(video, index))}
                </div>
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
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeImagePreview}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={closeImagePreview}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕ Close
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoPage
