'use client'

import React, { useState } from 'react'
import { Download, Copy, Check } from 'lucide-react'
import { Button } from './ui/button'
import { ColorInfo } from '@/lib/imageProcessing'

interface ColorPaletteProps {
  colors: ColorInfo[]
  onExport?: () => void
}

export function ColorPalette({ colors, onExport }: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedColor(text)
      setTimeout(() => setCopiedColor(null), 2000)
    })
  }

  const copyAllColors = () => {
    const colorList = colors.map(color => `${color.hex} (RGB: ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`).join('\n')
    navigator.clipboard.writeText(colorList).then(() => {
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2000)
    })
  }

  if (colors.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">🎨 Color Palette</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={copyAllColors}
            className={`flex items-center gap-2 text-xs transition-all duration-200 ${
              copiedAll 
                ? 'bg-green-600 border-green-500 text-white' 
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {copiedAll ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copiedAll ? 'Copied!' : 'Copy All'}
          </Button>
          {onExport && (
            <Button
              size="sm"
              onClick={onExport}
              className="flex items-center gap-2 text-xs bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="h-3 w-3" />
              Export
            </Button>
          )}
        </div>
      </div>

      {/* Color Swatches */}
      <div className="space-y-3 mb-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="group relative bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-all duration-200"
          >
            <div className="flex">
              {/* Color Swatch */}
              <div
                className="w-12 h-12 cursor-pointer"
                style={{ backgroundColor: color.hex }}
                onClick={() => copyToClipboard(color.hex)}
                title={`Click to copy ${color.hex}`}
              />
              
              {/* Color Info */}
              <div className="flex-1 p-3 min-w-0">
                <div className="font-mono text-sm font-bold text-white">
                  {color.hex.toUpperCase()}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
                </div>
                <div className="text-xs text-blue-400 mt-1">
                  {((color.count / colors.reduce((sum, c) => sum + c.count, 0)) * 100).toFixed(1)}% dominant
                </div>
              </div>

              {/* Copy button */}
              <button
                onClick={() => copyToClipboard(color.hex)}
                className={`transition-all duration-200 p-2 hover:bg-gray-600 rounded ${
                  copiedColor === color.hex 
                    ? 'opacity-100 bg-green-600' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}
                title={copiedColor === color.hex ? 'Copied!' : 'Copy hex code'}
              >
                {copiedColor === color.hex ? (
                  <Check className="h-3 w-3 text-white" />
                ) : (
                  <Copy className="h-3 w-3 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Strip View */}
      <div className="bg-gray-700 rounded-lg p-3">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Paint Palette Strip</h4>
        <div className="flex rounded overflow-hidden">
          {colors.map((color, index) => (
            <div
              key={index}
              className="flex-1 h-8 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundColor: color.hex }}
              onClick={() => copyToClipboard(color.hex)}
              title={`${color.hex} - Click to copy`}
            />
          ))}
        </div>
      </div>

      {/* Color Mixing Notes */}
      <div className="mt-4 bg-gray-700 rounded-lg p-3">
        <h4 className="font-medium text-gray-300 mb-2 text-sm">🎨 Mixing Notes</h4>
        <div className="text-xs text-gray-400 space-y-1">
          <p>• Use as base palette for color matching</p>
          <p>• Percentage shows color dominance</p>
          <p>• Click any color to copy hex code</p>
        </div>
      </div>
    </div>
  )
}
