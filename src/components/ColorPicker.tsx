'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Crosshair, Copy, Check } from 'lucide-react'
import { Button } from './ui/button'

interface ColorPickerProps {
  imageUrl: string
  onColorSelect?: (color: { hex: string; rgb: { r: number; g: number; b: number } }) => void
  selectedColor?: { hex: string; rgb: { r: number; g: number; b: number } } | null
}

export function ColorPicker({ imageUrl, selectedColor }: ColorPickerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [copied, setCopied] = useState(false)

  const copyColor = () => {
    if (selectedColor) {
      navigator.clipboard.writeText(selectedColor.hex).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
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
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">🎯 Color Picker</h3>
        <p className="text-sm text-gray-400 mb-4">
          Hover over the main image to pick colors in real-time
        </p>
      </div>

      {/* Hidden canvas for color detection */}
      <canvas
        ref={canvasRef}
        className="hidden"
      />
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Color picker reference"
        className="hidden"
        crossOrigin="anonymous"
      />

      {/* Color Results Panel */}
      <div className="space-y-4">
        {selectedColor ? (
          <>
            {/* Selected Color Display */}
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="mb-3">
                <h4 className="font-medium text-white text-sm">Selected Color</h4>
                <p className="text-xs text-gray-400">Compare with your palette</p>
              </div>
              
              {/* Large Color Display */}
              <div
                className="h-20 w-full rounded border-2 border-gray-600 mb-3"
                style={{ backgroundColor: selectedColor.hex }}
              />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-300">Hex Code:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyColor}
                    className={`h-6 px-2 transition-all duration-200 ${
                      copied 
                        ? 'text-white bg-green-600 hover:bg-green-700' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-600'
                    }`}
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
                <div className="font-mono text-sm font-bold text-white">
                  {selectedColor.hex.toUpperCase()}
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-300">RGB Values:</span>
                  <div className="font-mono text-xs text-gray-400">
                    R: {selectedColor.rgb.r}<br/>
                    G: {selectedColor.rgb.g}<br/>
                    B: {selectedColor.rgb.b}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-300">Position:</span>
                  <div className="font-mono text-xs text-gray-400">
                    Click on image to pick colors
                  </div>
                </div>
              </div>
            </div>

            {/* Color Comparison Strip */}
            <div className="bg-gray-700 rounded-lg p-3">
              <h4 className="font-medium text-gray-300 mb-2 text-sm">Color Comparison</h4>
              <div className="grid grid-cols-3 gap-2 h-8">
                <div 
                  className="rounded border border-gray-600"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div className="bg-gray-600 border-2 border-dashed border-gray-500 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400">Your Mix</span>
                </div>
                <div 
                  className="rounded border border-gray-600"
                  style={{ backgroundColor: selectedColor.hex }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Hold your palette knife next to center for comparison
              </p>
            </div>
          </>
        ) : (
          <div className="bg-gray-700 rounded-lg p-6 text-center">
            <Crosshair className="h-8 w-8 text-gray-400 mx-auto mb-3" />
            <h4 className="font-medium text-white mb-2">Hover to Pick Colors</h4>
            <p className="text-xs text-gray-400">
              Move cursor over the main image to see colors
            </p>
          </div>
        )}

        {/* Artist Tips */}
        <div className="bg-gray-700 rounded-lg p-3">
          <h4 className="font-medium text-gray-300 mb-2 text-sm">🎨 Picking Tips</h4>
          <div className="text-xs text-gray-400 space-y-1">
            <p>• Mix color on palette knife</p>
            <p>• Compare with color swatch above</p>
            <p>• Use RGB values for digital reference</p>
          </div>
        </div>
      </div>
    </div>
  )
}
