'use client'

import React, { useState, useEffect } from 'react'

interface TerminalTypingProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function TerminalTyping({ text, delay = 0, speed = 50, className = '' }: TerminalTypingProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0)
      }, delay)
      return () => clearTimeout(delayTimeout)
    }
  }, [delay])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && text.length > 0) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </span>
  )
}

interface TerminalLinesProps {
  lines: string[]
  lineDelay?: number
  speed?: number
  className?: string
}

export function TerminalLines({ lines, lineDelay = 100, speed = 50, className = '' }: TerminalLinesProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    lines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
      }, index * (lineDelay + lines[index - 1]?.length * speed || 0))
    })
  }, [lines, lineDelay, speed])

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={index} className="font-mono">
          {visibleLines.includes(index) ? (
            <>
              <span className="text-accent mr-2">{'>'}</span>
              <TerminalTyping text={line} speed={speed} />
            </>
          ) : (
            <span className="invisible">{line}</span>
          )}
        </div>
      ))}
    </div>
  )
}
