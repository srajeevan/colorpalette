'use client'

import React, { useState } from 'react'
import { Contrast, Download } from 'lucide-react'
import { Button } from './ui/button'

interface ValueMapProps {
  valueMap: string
}

export function ValueMap({ valueMap }: ValueMapProps) {
  const [showComparison, setShowComparison] = useState(false)

  const downloadValueMap = () => {
    const link = document.createElement('a')
    link.href = valueMap
    link.download = 'value-map.png'
    link.click()
  }

  if (!valueMap) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">🔳 Value Map</h3>
          <p className="text-sm text-gray-400">
            Grayscale showing light and dark relationships
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-2 text-xs bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
          >
            <Contrast className="h-3 w-3" />
            {showComparison ? 'Hide' : 'Show'}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={downloadValueMap}
            className="flex items-center gap-2 text-xs bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="h-3 w-3" />
            Download
          </Button>
        </div>
      </div>

      {/* Analysis Info */}
      <div className="bg-gray-700 rounded-lg p-3 mb-4">
        <div className="text-center mb-3">
          <p className="text-sm font-medium text-white mb-1">
            Value Map Analysis Active
          </p>
          <p className="text-xs text-gray-400">
            Main image shows grayscale values for light/shadow analysis
          </p>
        </div>
        
        {showComparison && (
          <div className="grid grid-cols-1 gap-3 text-xs">
            <div className="bg-gray-600 p-2 rounded">
              <h4 className="font-medium text-white mb-1">Original Colors</h4>
              <p className="text-gray-300">Full color with hues and saturation</p>
            </div>
            <div className="bg-gray-600 p-2 rounded">
              <h4 className="font-medium text-white mb-1">Value Map</h4>
              <p className="text-gray-300">Grayscale for form analysis</p>
            </div>
          </div>
        )}
      </div>

      {/* Artist Tips */}
      <div className="bg-gray-700 rounded-lg p-3 mb-4">
        <h4 className="font-medium text-gray-300 mb-2 text-sm">⚫⚪ Value Tips</h4>
        <div className="text-xs text-gray-400 space-y-1">
          <p>• <strong>Light values:</strong> Highlights, light planes</p>
          <p>• <strong>Dark values:</strong> Shadows, form shadows</p>
          <p>• <strong>Mid-tones:</strong> Transition areas</p>
          <p>• <strong>Tip:</strong> Establish darks and lights first</p>
        </div>
      </div>

      {/* Value Scale Reference */}
      <div className="bg-gray-700 rounded-lg p-3">
        <h4 className="font-medium text-gray-300 mb-2 text-sm">Value Scale</h4>
        <div className="flex rounded overflow-hidden">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className="flex-1 h-6 flex items-center justify-center text-xs font-medium"
              style={{ 
                backgroundColor: `rgb(${255 - (i * 32)}, ${255 - (i * 32)}, ${255 - (i * 32)})`,
                color: i > 4 ? 'white' : 'black'
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-400">
          <span>Light</span>
          <span>Mid</span>
          <span>Dark</span>
        </div>
      </div>
    </div>
  )
}
