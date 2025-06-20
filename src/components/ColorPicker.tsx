'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Crosshair, Copy } from 'lucide-react'
import { Button } from './ui/button'
import { rgbToHex } from '@/lib/utils'

interface ColorPickerProps {
  imageUrl: string
  onColorSelect?: (color: { hex: string; rgb: { r: number; g: number; b: number } }) => void
}

interface SelectedColor {
  hex: string
  rgb: { r: number; g: number; b: number }
  x: number
  y: number
}

export function ColorPicker({ imageUrl, onColorSelect }: ColorPickerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [selectedColor, setSelectedColor] = useState<SelectedColor | null>(null)
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
      const newSelectedColor = { ...color, x, y }
      setSelectedColor(newSelectedColor)
      onColorSelect?.(color)
    }
  }, [getColorAtPosition, onColorSelect])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setCursorPosition({ x: 0, y: 0 })
  }

  const copyColor = () => {
    if (selectedColor) {
      navigator.clipboard.writeText(selectedColor.hex)
    }
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Color Picker</h2>
        <p className="text-gray-600">
          Hover over the image to pick colors in real-time. Perfect for matching paint colors on your palette knife.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Image with Color Picker */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="relative">
              <img
                ref={imageRef}
                src={imageUrl}
                alt="Color picker reference"
                className="w-full h-auto max-h-96 object-contain"
                crossOrigin="anonymous"
              />
              
              <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full object-contain cursor-none ${
                  isHovering ? 'opacity-100' : 'opacity-0'
                }`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  cursor: 'none',
                  pointerEvents: 'auto'
                }}
              />

              {/* Custom Crosshair Cursor with Center Point */}
              {isHovering && (
                <div
                  className="absolute pointer-events-none z-10"
                  style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Crosshair with center point */}
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
            </div>
          </div>
        </div>

        {/* Color Display Panel */}
        <div className="space-y-4">
          {selectedColor ? (
            <>
              {/* Large Color Swatch */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-semibold text-gray-900">Selected Color</h3>
                  <p className="text-sm text-gray-600">Compare with your palette knife</p>
                </div>
                
                {/* Large Color Display */}
                <div
                  className="h-32 w-full border-4 border-white shadow-inner"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Hex Code:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyColor}
                        className="h-6 px-2"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="font-mono text-lg font-bold text-gray-900">
                      {selectedColor.hex.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-700">RGB Values:</span>
                    <div className="font-mono text-sm text-gray-900">
                      R: {selectedColor.rgb.r}<br/>
                      G: {selectedColor.rgb.g}<br/>
                      B: {selectedColor.rgb.b}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-700">Position:</span>
                    <div className="font-mono text-sm text-gray-600">
                      X: {selectedColor.x}, Y: {selectedColor.y}
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Comparison Strip */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Color Comparison</h4>
                <div className="grid grid-cols-3 gap-2 h-12">
                  <div 
                    className="rounded border-2 border-gray-200"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <div className="bg-white border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Your Mix</span>
                  </div>
                  <div 
                    className="rounded border-2 border-gray-200"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Hold your palette knife next to the center square to compare colors
                </p>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Crosshair className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hover to Pick Colors</h3>
              <p className="text-sm text-gray-600">
                Move your cursor over the image to see colors in real-time
              </p>
            </div>
          )}

          {/* Artist Tips */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🎨 Color Matching Tips</h4>
            <div className="text-sm text-green-800 space-y-1">
              <p>• Mix your color on the palette knife</p>
              <p>• Hold it next to the large color swatch</p>
              <p>• Adjust your mix until they match</p>
              <p>• Use the RGB values for digital reference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
