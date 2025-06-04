import type React from "react"

interface FloatingShapeProps {
  delay: number
  size: string
  position: string
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ delay, size, position }) => (
  <div
    className={`absolute ${position} ${size} bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded-full blur-md z-0 animate-float`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: "8s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
    }}
  />
)

export default FloatingShape
