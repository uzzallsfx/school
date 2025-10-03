"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, X } from "lucide-react"

const models = [
  {
    id: 1,
    name: "Gedu Higher Secondary School - Main Building",
    category: "Education",
    description:
      "The iconic main administrative building of Gedu Higher Secondary School, featuring traditional Bhutanese architecture with modern educational facilities.",
    details:
      "Gedu Higher Secondary School, established in 1971, is one of Bhutan's premier educational institutions located in Gedu, Chhukha Dzongkhag. The main building houses administrative offices, principal's office, staff rooms, and central library. Built with traditional Bhutanese architectural elements including intricate woodwork, colorful paintings, and sloped roofs, it represents the perfect blend of cultural heritage and modern education. The building serves over 1,200 students and 80+ faculty members.",
    color: "#DC2626",
    shape: "rectangle",
  },
  {
    id: 2,
    name: "Gedu HSS - Science Laboratory Complex",
    category: "Education",
    description:
      "State-of-the-art science laboratories equipped with modern instruments for Physics, Chemistry, and Biology studies.",
    details:
      "The Science Laboratory Complex at Gedu Higher Secondary School features fully equipped laboratories for Physics, Chemistry, and Biology. Each lab is designed to accommodate 30+ students with modern equipment including microscopes, spectrometers, and digital measuring instruments. The complex also houses a computer lab with high-speed internet connectivity and modern workstations for ICT education.",
    color: "#059669",
    shape: "cube",
  },
  {
    id: 3,
    name: "Gedu HSS - Student Dormitories",
    category: "Education",
    description: "Comfortable residential facilities providing a home away from home for students from across Bhutan.",
    details:
      "Gedu Higher Secondary School provides excellent boarding facilities with separate dormitories for boys and girls. The dormitories can accommodate over 800 students with modern amenities including study halls, recreational areas, and 24/7 supervision. Each dormitory features traditional Bhutanese architecture with modern comfort, ensuring students have a conducive environment for both study and rest.",
    color: "#7C3AED",
    shape: "tower",
  },
  {
    id: 4,
    name: "Gedu HSS - Sports Complex",
    category: "Education",
    description: "Comprehensive sports facilities including basketball courts, football field, and indoor games area.",
    details:
      "The sports complex at Gedu HSS includes a full-size football field, multiple basketball courts, volleyball courts, and an indoor sports hall. The school has produced numerous national-level athletes and regularly participates in inter-school competitions. The complex also features a gymnasium with modern fitness equipment and changing rooms.",
    color: "#0891B2",
    shape: "sphere",
  },
  {
    id: 5,
    name: "Gedu HSS - Library & Resource Center",
    category: "Education",
    description:
      "Modern library facility with extensive collection of books, digital resources, and quiet study spaces.",
    details:
      "The library at Gedu Higher Secondary School houses over 15,000 books covering various subjects, reference materials, and digital resources. It features quiet study areas, group discussion rooms, and computer terminals with internet access. The library serves as the academic heart of the school, supporting both curriculum-based learning and independent research.",
    color: "#B45309",
    shape: "octagon",
  },
  {
    id: 6,
    name: "Gedu HSS - Multipurpose Hall",
    category: "Education",
    description: "Large assembly hall used for school functions, cultural programs, and community events.",
    details:
      "The multipurpose hall can accommodate over 1,500 people and serves as the venue for morning assemblies, cultural programs, graduation ceremonies, and community events. Equipped with modern sound systems and lighting, it's the cultural hub of the school where students showcase their talents in drama, music, and dance performances.",
    color: "#EA580C",
    shape: "capsule",
  },
  {
    id: 7,
    name: "Gedu HSS - Cafeteria & Dining Hall",
    category: "Education",
    description: "Spacious dining facility serving nutritious meals to students and staff throughout the day.",
    details:
      "The cafeteria at Gedu HSS serves over 1,200 students daily with nutritious and balanced meals. The kitchen follows strict hygiene standards and offers both traditional Bhutanese cuisine and international dishes. The dining hall provides a social space where students from different backgrounds come together, fostering unity and friendship.",
    color: "#DB2777",
    shape: "diamond",
  },
  {
    id: 8,
    name: "Gedu HSS - Art & Craft Workshop",
    category: "Education",
    description: "Creative workshop space for traditional Bhutanese arts, crafts, and modern artistic expression.",
    details:
      "The Art & Craft Workshop promotes Bhutanese cultural heritage through traditional arts like thangka painting, wood carving, and textile weaving. Students learn from master craftsmen and also explore modern artistic techniques. The workshop regularly displays student artwork and contributes to preserving Bhutan's rich artistic traditions.",
    color: "#10B981",
    shape: "blob",
  },
  {
    id: 9,
    name: "Gedu HSS - School Garden & Farm",
    category: "Education",
    description:
      "Organic garden and small farm where students learn sustainable agriculture and environmental conservation.",
    details:
      "The school maintains an organic garden and small farm where students learn practical agriculture, environmental science, and sustainability. The garden produces vegetables for the school cafeteria and serves as an outdoor classroom for biology and environmental studies. This initiative promotes self-sufficiency and environmental awareness among students.",
    color: "#6366F1",
    shape: "sword",
  },
  {
    id: 10,
    name: "Gedu HSS - Memorial Stupa",
    category: "Education",
    description:
      "Sacred memorial stupa dedicated to the school's founders and benefactors, serving as a place of reflection.",
    details:
      "The Memorial Stupa stands as a testament to the vision and dedication of Gedu Higher Secondary School's founders and benefactors. This sacred structure provides a peaceful space for meditation and reflection, embodying the Buddhist values that guide the school's educational philosophy. Students often visit the stupa for moments of quiet contemplation and spiritual guidance.",
    color: "#4F46E5",
    shape: "bike",
  },
]

function Model3D({
  modelData,
  isActive,
  scrollProgress,
}: { modelData: any; isActive: boolean; scrollProgress: number }) {
  const getShapeStyles = (shape: string, color: string) => {
    const rotationY = isActive ? 25 + scrollProgress * 360 : scrollProgress * 180
    const scale = isActive ? 1.4 + scrollProgress * 0.3 : 1 + scrollProgress * 0.2
    const translateY = scrollProgress * -50

    const baseStyles = {
      width: "120px",
      height: "120px",
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      boxShadow: `0 ${20 + scrollProgress * 30}px ${40 + scrollProgress * 20}px ${color}33, inset 0 0 20px ${color}22`,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: `scale(${scale}) rotateY(${rotationY}deg) rotateX(${scrollProgress * 15}deg) translateY(${translateY}px)`,
      filter: `brightness(${1 + scrollProgress * 0.3}) saturate(${1 + scrollProgress * 0.5})`,
    }

    switch (shape) {
      case "cube":
        return { ...baseStyles, borderRadius: "8px" }
      case "rectangle":
        return { ...baseStyles, width: "160px", height: "80px", borderRadius: "12px" }
      case "tower":
        return { ...baseStyles, width: "80px", height: "160px", borderRadius: "8px" }
      case "sword":
        return { ...baseStyles, width: "20px", height: "160px", borderRadius: "10px" }
      case "sphere":
        return { ...baseStyles, borderRadius: "50%" }
      case "blob":
        return { ...baseStyles, borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }
      case "capsule":
        return { ...baseStyles, width: "160px", height: "80px", borderRadius: "40px" }
      case "diamond":
        return { ...baseStyles, clipPath: "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)" }
      case "bike":
        return { ...baseStyles, width: "140px", height: "60px", borderRadius: "30px 8px" }
      case "octagon":
        return {
          ...baseStyles,
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }
      default:
        return { ...baseStyles, borderRadius: "8px" }
    }
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="relative"
        style={{
          ...getShapeStyles(modelData.shape, modelData.color),
          animation: isActive ? "float 4s ease-in-out infinite" : "rotate 12s linear infinite",
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${modelData.color}88, transparent 70%)`,
            borderRadius: "inherit",
            clipPath: "inherit",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{
                backgroundColor: modelData.color,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
                animation: `particle-float-${i} ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ModelShowcase3D() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [transitionProgress, setTransitionProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollTime = useRef(0)

  const currentModel = models[currentModelIndex]

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const now = Date.now()
      if (now - lastScrollTime.current < 600) return

      lastScrollTime.current = now
      setIsScrolling(true)

      setScrollProgress(1)
      setTransitionProgress(1)

      if (e.deltaY > 0) {
        setCurrentModelIndex((prev) => (prev + 1) % models.length)
      } else {
        setCurrentModelIndex((prev) => (prev - 1 + models.length) % models.length)
      }

      setTimeout(() => {
        setScrollProgress(0)
        setIsScrolling(false)
      }, 400)

      setTimeout(() => {
        setTransitionProgress(0)
      }, 800)
    }

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      containerRef.current?.setAttribute("data-touch-start-y", touch.clientY.toString())
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0]
      const startY = Number.parseFloat(containerRef.current?.getAttribute("data-touch-start-y") || "0")
      const deltaY = startY - touch.clientY

      if (Math.abs(deltaY) > 50) {
        const now = Date.now()
        if (now - lastScrollTime.current < 600) return

        lastScrollTime.current = now
        setIsScrolling(true)

        setScrollProgress(1)
        setTransitionProgress(1)

        if (deltaY > 0) {
          setCurrentModelIndex((prev) => (prev + 1) % models.length)
        } else {
          setCurrentModelIndex((prev) => (prev - 1 + models.length) % models.length)
        }

        setTimeout(() => {
          setScrollProgress(0)
          setIsScrolling(false)
        }, 400)

        setTimeout(() => {
          setTransitionProgress(0)
        }, 800)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false })
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })

      return () => {
        container.removeEventListener("wheel", handleScroll)
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault()
        setCurrentModelIndex((prev) => (prev + 1) % models.length)
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault()
        setCurrentModelIndex((prev) => (prev - 1 + models.length) % models.length)
      } else if (e.key === "Escape") {
        setShowInfo(false)
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        setShowInfo(true)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1.4) rotateY(25deg); }
          50% { transform: translateY(-25px) scale(1.4) rotateY(25deg); }
        }
        @keyframes rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes bounce-pointer {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes particle-float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px) scale(1.2); opacity: 1; }
        }
        @keyframes particle-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-15px) translateX(-8px) scale(1.1); opacity: 0.8; }
        }
        @keyframes particle-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-25px) translateX(5px) scale(1.3); opacity: 1; }
        }
        @keyframes particle-float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-18px) translateX(-12px) scale(1.1); opacity: 0.7; }
        }
        @keyframes particle-float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-22px) translateX(8px) scale(1.2); opacity: 0.9; }
        }
        @keyframes particle-float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-16px) translateX(-6px) scale(1.1); opacity: 0.8; }
        }
        @keyframes background-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes zigzag-bounce {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-16px) translateX(-4px); }
          75% { transform: translateY(-8px) translateX(4px); }
        }
        @keyframes presentation-glow {
          0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 8px currentColor); }
          50% { opacity: 1; filter: drop-shadow(0 0 16px currentColor); }
        }
      `}</style>

      <div
        ref={containerRef}
        className="h-screen w-full relative overflow-hidden transition-all duration-1000 ease-out"
        style={{
          touchAction: "none",
          background: `linear-gradient(135deg, 
            ${currentModel.color}08 0%, 
            #0f172a 25%, 
            #1e293b 50%, 
            #0f172a 75%, 
            ${currentModel.color}12 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{
              backgroundColor: currentModel.color,
              animation: "background-pulse 4s ease-in-out infinite",
              transform: `scale(${1 + transitionProgress * 0.5}) translate(${transitionProgress * 50}px, ${transitionProgress * -30}px)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl"
            style={{
              backgroundColor: currentModel.color,
              animation: "background-pulse 6s ease-in-out infinite reverse",
              transform: `scale(${1 + transitionProgress * 0.3}) translate(${transitionProgress * -40}px, ${transitionProgress * 40}px)`,
            }}
          />
        </div>

        <header className="absolute top-0 left-0 right-0 z-50 p-6">
          <div
            className="flex items-center justify-between transition-all duration-800 ease-out"
            style={{
              transform: `translateY(${transitionProgress * -20}px)`,
              opacity: 1 - transitionProgress * 0.3,
            }}
          >
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">Gedu Higher Secondary School</h1>
              <Badge variant="secondary" className="text-xs bg-slate-800/80 text-slate-200 border border-slate-600">
                Virtual Tour
              </Badge>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <span className="hover:text-white cursor-pointer transition-colors drop-shadow-sm">About</span>
              <span className="hover:text-white cursor-pointer transition-colors drop-shadow-sm">Academics</span>
              <span className="hover:text-white cursor-pointer transition-colors drop-shadow-sm">Contact</span>
            </nav>
          </div>
        </header>

        <div className="h-full w-full flex flex-col items-center justify-center">
          <div
            className="relative mb-8 text-center transition-all duration-800 ease-out"
            style={{
              transform: `translateY(${transitionProgress * -30}px) scale(${1 + transitionProgress * 0.1})`,
              opacity: 1 - transitionProgress * 0.5,
            }}
          >
            <h2 className="text-xl font-bold text-white text-balance px-4 mb-6 drop-shadow-lg">{currentModel.name}</h2>

            <div className="relative flex flex-col items-center">
              <div
                className="w-4 h-4 rounded-full mb-1 border-2 border-white/30"
                style={{
                  backgroundColor: currentModel.color,
                  animation: "presentation-glow 3s ease-in-out infinite",
                  boxShadow: `0 0 20px ${currentModel.color}88, inset 0 0 8px ${currentModel.color}aa`,
                }}
              />

              <div className="relative h-20 w-1 mb-1">
                <div
                  className="absolute top-0 w-1 h-5"
                  style={{
                    backgroundColor: currentModel.color,
                    transform: "rotate(15deg) translateX(2px)",
                    animation: "zigzag-bounce 2.5s ease-in-out infinite",
                    boxShadow: `0 0 8px ${currentModel.color}66`,
                  }}
                />
                <div
                  className="absolute top-4 w-1 h-5"
                  style={{
                    backgroundColor: currentModel.color,
                    transform: "rotate(-15deg) translateX(-2px)",
                    animation: "zigzag-bounce 2.5s ease-in-out infinite 0.3s",
                    boxShadow: `0 0 8px ${currentModel.color}66`,
                  }}
                />
                <div
                  className="absolute top-8 w-1 h-5"
                  style={{
                    backgroundColor: currentModel.color,
                    transform: "rotate(15deg) translateX(2px)",
                    animation: "zigzag-bounce 2.5s ease-in-out infinite 0.6s",
                    boxShadow: `0 0 8px ${currentModel.color}66`,
                  }}
                />
                <div
                  className="absolute top-12 w-1 h-5"
                  style={{
                    backgroundColor: currentModel.color,
                    transform: "rotate(-15deg) translateX(-2px)",
                    animation: "zigzag-bounce 2.5s ease-in-out infinite 0.9s",
                    boxShadow: `0 0 8px ${currentModel.color}66`,
                  }}
                />
              </div>

              <div className="relative">
                <div
                  className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent"
                  style={{
                    borderTopColor: currentModel.color,
                    animation: "presentation-glow 3s ease-in-out infinite",
                    filter: `drop-shadow(0 4px 8px ${currentModel.color}44)`,
                  }}
                />
                <div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 rounded-full"
                  style={{
                    backgroundColor: currentModel.color,
                    animation: "presentation-glow 3s ease-in-out infinite 0.5s",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setShowInfo(true)}
            style={{
              transform: `scale(${1 + transitionProgress * 0.2})`,
            }}
          >
            <Model3D modelData={currentModel} isActive={true} scrollProgress={scrollProgress} />
          </div>
        </div>

        <div
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-800 ease-out"
          style={{
            transform: `translateX(${transitionProgress * 20}px) translateY(-50%)`,
            opacity: 1 - transitionProgress * 0.4,
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-2">
              {models.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModelIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentModelIndex ? "bg-blue-500 scale-125" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <div className="text-xs text-slate-400 text-center">
              <div>
                {currentModelIndex + 1} / {models.length}
              </div>
              <ChevronDown className="w-4 h-4 mx-auto mt-1 animate-bounce" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-800 ease-out"
          style={{
            transform: `translateY(${transitionProgress * 20}px) translateX(-50%)`,
            opacity: 1 - transitionProgress * 0.5,
          }}
        >
          <div className="text-xs text-slate-300 text-center drop-shadow-sm">
            <span className="block mb-2">Scroll or swipe to explore</span>
            <div
              className="w-12 h-px mx-auto"
              style={{
                background: `linear-gradient(to right, transparent, ${currentModel.color}66, transparent)`,
              }}
            />
          </div>
        </div>

        {isScrolling && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div
              className="backdrop-blur-sm rounded-full p-4 border transition-all duration-300"
              style={{
                backgroundColor: `${currentModel.color}20`,
                borderColor: `${currentModel.color}40`,
              }}
            >
              <div
                className="w-6 h-6 border-2 rounded-full animate-spin"
                style={{
                  borderColor: `${currentModel.color}30`,
                  borderTopColor: currentModel.color,
                }}
              />
            </div>
          </div>
        )}

        {showInfo && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-6">
            <Card className="max-w-lg w-full p-6 relative bg-slate-800 border-slate-700">
              <Button
                onClick={() => setShowInfo(false)}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentModel.color }} />
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  {currentModel.category}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-balance text-white">{currentModel.name}</h3>

              <p className="text-sm leading-relaxed text-pretty text-slate-300">{currentModel.description}</p>

              <p className="text-sm leading-relaxed text-pretty text-slate-300">{currentModel.details}</p>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}
