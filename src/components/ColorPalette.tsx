'use client'

import React from 'react'
import { Download, Copy } from 'lucide-react'
import { Button } from './ui/button'
import { ColorInfo } from '@/lib/imageProcessing'
import { cn } from '@/lib/utils'

interface ColorPaletteProps {
  colors: ColorInfo[]
  onExport?: () => void
}

export function ColorPalette({ colors, onExport }: ColorPaletteProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const copyAllColors = () => {
    const colorList = colors.map(color => `${color.hex} (RGB: ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`).join('\n')
    copyToClipboard(colorList)
  }

  if (colors.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          🎨 Dominant Color Palette
        </h2>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={copyAllColors}
            className="flex items-center gap-2 border-2 border-yellow-400 text-orange-600 hover:bg-yellow-50 font-semibold"
          >
            <Copy className="h-4 w-4" />
            Copy All
          </Button>
          {onExport && (
            <Button
              size="sm"
              onClick={onExport}
              className="artist-button flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
          )}
        </div>
      </div>

      {/* Large Paint Swatches - Artist Friendly */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
        {colors.map((color, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 color-swatch border-4 border-yellow-200 hover:border-orange-300"
          >
            {/* Color Swatch */}
            <div
              className="h-28 w-full cursor-pointer relative overflow-hidden"
              style={{ backgroundColor: color.hex }}
              onClick={() => copyToClipboard(color.hex)}
              title={`Click to copy ${color.hex}`}
            >
              {/* Paint brush stroke effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none"></div>
            </div>
            
            {/* Color Info */}
            <div className="p-4 space-y-2 bg-gradient-to-br from-white to-orange-50">
              <div className="font-mono text-sm font-bold text-gray-900">
                {color.hex.toUpperCase()}
              </div>
              <div className="text-xs text-gray-700 font-medium">
                RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
              </div>
              <div className="text-xs text-orange-600 font-semibold">
                {((color.count / colors.reduce((sum, c) => sum + c.count, 0)) * 100).toFixed(1)}% dominant
              </div>
            </div>

            {/* Copy button overlay */}
            <button
              onClick={() => copyToClipboard(color.hex)}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110"
              title="Copy hex code"
            >
              <Copy className="h-4 w-4 text-orange-600" />
            </button>
          </div>
        ))}
      </div>

      {/* Horizontal Strip View - Traditional Paint Palette */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Paint Palette Strip</h3>
        <div className="flex rounded-lg overflow-hidden shadow-sm border">
          {colors.map((color, index) => (
            <div
              key={index}
              className="flex-1 h-16 cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: color.hex }}
              onClick={() => copyToClipboard(color.hex)}
              title={`${color.hex} - Click to copy`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          {colors.map((color, index) => (
            <div key={index} className="flex-1 text-center font-mono">
              {color.hex.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Color Mixing Notes for Artists */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="font-semibold text-amber-900 mb-2">🎨 Mixing Notes for Oil Painters</h4>
        <div className="text-sm text-amber-800 space-y-1">
          <p>• Use these colors as your base palette for color matching</p>
          <p>• Consider the color temperature when mixing - warm colors advance, cool colors recede</p>
          <p>• The percentage shows how dominant each color is in your reference</p>
          <p>• Start with the most dominant colors and adjust with smaller amounts of accent colors</p>
        </div>
      </div>
    </div>
  )
}
