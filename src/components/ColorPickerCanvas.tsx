'use client'

import React, { useRef, useEffect, useCallback, useState } from 'react'
import { rgbToHex } from '@/lib/utils'

interface ColorPickerCanvasProps {
  imageUrl: string
  isActive: boolean
  onColorSelect?: (color: { hex: string; rgb: { r: number; g: number; b: number } }) => void
  className?: string
}

export function ColorPickerCanvas({ imageUrl, isActive, onColorSelect, className }: ColorPickerCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const getColorAtPosition = useCallback((x: number, y: number): { hex: string; rgb: { r: number; g: number; b: number } } | null => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    
    if (!canvas || !ctx) return null

    const imageData = ctx.getImageData(x, y, 1, 1)
    const [r, g, b] = imageData.data
    
    return {
      hex: rgbToHex(r, g, b),
      rgb: { r, g, b }
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isActive) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    
    const x = Math.floor((e.clientX - rect.left) * scaleX)
    const y = Math.floor((e.clientY - rect.top) * scaleY)
    
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    
    const color = getColorAtPosition(x, y)
    if (color) {
      onColorSelect?.(color)
    }
  }, [getColorAtPosition, onColorSelect, isActive])

  const handleMouseEnter = () => {
    if (isActive) setIsHovering(true)
  }
  
  const handleMouseLeave = () => {
    setIsHovering(false)
    setCursorPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = imageRef.current

    if (!canvas || !ctx || !img) return

    const loadImage = () => {
      // Set canvas size to match image
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      
      // Draw image to canvas
      ctx.drawImage(img, 0, 0)
    }

    if (img.complete) {
      loadImage()
    } else {
      img.onload = loadImage
    }
  }, [imageUrl])

  if (!isActive) return null

  return (
    <>
      {/* Hidden image for loading */}
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Color picker reference"
        className="hidden"
        crossOrigin="anonymous"
      />
      
      {/* Invisible canvas overlay for color detection */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-contain ${isActive ? 'cursor-none' : 'pointer-events-none'} ${className || ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          cursor: isActive ? 'none' : 'default',
          pointerEvents: isActive ? 'auto' : 'none',
          opacity: 0 // Make canvas invisible but still functional
        }}
      />

      {/* Custom Crosshair Cursor */}
      {isActive && isHovering && (
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg">
            {/* White outline for visibility */}
            <line x1="12" y1="2" x2="12" y2="8" stroke="white" strokeWidth="3" />
            <line x1="12" y1="16" x2="12" y2="22" stroke="white" strokeWidth="3" />
            <line x1="2" y1="12" x2="8" y2="12" stroke="white" strokeWidth="3" />
            <line x1="16" y1="12" x2="22" y2="12" stroke="white" strokeWidth="3" />
            <circle cx="12" cy="12" r="2" fill="white" stroke="white" strokeWidth="1" />
            
            {/* Black crosshair for contrast */}
            <line x1="12" y1="2" x2="12" y2="8" stroke="black" strokeWidth="1" />
            <line x1="12" y1="16" x2="12" y2="22" stroke="black" strokeWidth="1" />
            <line x1="2" y1="12" x2="8" y2="12" stroke="black" strokeWidth="1" />
            <line x1="16" y1="12" x2="22" y2="12" stroke="black" strokeWidth="1" />
            <circle cx="12" cy="12" r="1.5" fill="black" />
          </svg>
        </div>
      )}
    </>
  )
}