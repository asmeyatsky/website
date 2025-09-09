'use client'

import React, { useEffect, useRef } from 'react'

const MatrixRain = ({ intensity = 0.3 }: { intensity?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters (AI/tech themed)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ+-*/=<>[]{}()AI∞∑∆∇∂∫√π∴∵∞▲▼◆◇★☆※§∴∵'
    const charArray = chars.split('')

    // Drop properties
    const drops: Array<{
      x: number
      y: number
      speed: number
      chars: string[]
      length: number
    }> = []

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops
    for (let i = 0; i < columns * intensity; i++) {
      drops.push({
        x: (i % columns) * fontSize,
        y: Math.random() * -canvas.height,
        speed: Math.random() * 3 + 2,
        chars: Array.from({ length: 20 }, () => charArray[Math.floor(Math.random() * charArray.length)]),
        length: Math.random() * 15 + 10
      })
    }

    // Animation
    const animate = () => {
      // Create fade effect
      ctx.fillStyle = 'rgba(0, 8, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Inter', sans-serif`
      ctx.textAlign = 'center'

      drops.forEach((drop) => {
        // Update position
        drop.y += drop.speed

        // Draw the trail
        for (let i = 0; i < drop.length; i++) {
          const charY = drop.y - (i * fontSize)
          
          if (charY > 0 && charY < canvas.height) {
            // Calculate opacity based on position in trail
            const opacity = Math.max(0, 1 - (i / drop.length))
            
            // Different colors based on position
            let color = '#00F5FF'
            if (i < 3) {
              color = '#FFFFFF' // Bright white for head
            } else if (i < 6) {
              color = '#00F5FF' // Cyan
            } else if (i < 10) {
              color = '#39FF14' // Green
            } else {
              color = '#00FF41' // Matrix green
            }

            ctx.fillStyle = color
            ctx.globalAlpha = opacity
            ctx.shadowBlur = 5
            ctx.shadowColor = color
            
            // Get character for this position
            const charIndex = (Math.floor(drop.y / fontSize) + i) % drop.chars.length
            const char = drop.chars[charIndex]
            
            ctx.fillText(char, drop.x + fontSize/2, charY)
          }
        }

        // Reset drop when it goes off screen
        if (drop.y - drop.length * fontSize > canvas.height) {
          drop.y = Math.random() * -canvas.height
          drop.speed = Math.random() * 3 + 2
          drop.chars = Array.from({ length: 20 }, () => charArray[Math.floor(Math.random() * charArray.length)])
        }

        // Randomly change characters
        if (Math.random() < 0.02) {
          const randomIndex = Math.floor(Math.random() * drop.chars.length)
          drop.chars[randomIndex] = charArray[Math.floor(Math.random() * charArray.length)]
        }
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default MatrixRain