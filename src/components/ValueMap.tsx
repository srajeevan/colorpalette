'use client'

import React, { useState } from 'react'
import { Contrast, Download } from 'lucide-react'
import { Button } from './ui/button'

interface ValueMapProps {
  originalImage: string
  valueMap: string
}

export function ValueMap({ originalImage, valueMap }: ValueMapProps) {
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Value Map</h2>
          <p className="text-gray-600">
            Black and white version showing light and dark relationships
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-2"
          >
            <Contrast className="h-4 w-4" />
            {showComparison ? 'Hide' : 'Show'} Comparison
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={downloadValueMap}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      {showComparison ? (
        /* Side by Side Comparison */
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="font-semibold text-gray-900">Original Image</h3>
            </div>
            <img
              src={originalImage}
              alt="Original"
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="font-semibold text-gray-900">Value Map</h3>
            </div>
            <img
              src={valueMap}
              alt="Value Map"
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
      ) : (
        /* Single Value Map View */
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={valueMap}
            alt="Value Map"
            className="w-full h-auto max-h-96 object-contain mx-auto"
          />
        </div>
      )}

      {/* Artist Tips */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">⚫⚪ Value Study Tips</h4>
        <div className="text-sm text-gray-700 space-y-1">
          <p>• <strong>Light values:</strong> Areas that catch the most light (highlights, light planes)</p>
          <p>• <strong>Dark values:</strong> Shadow areas, cast shadows, and form shadows</p>
          <p>• <strong>Mid-tones:</strong> Transitional areas between light and shadow</p>
          <p>• <strong>Painting tip:</strong> Establish your darkest darks and lightest lights first</p>
          <p>• <strong>Squint test:</strong> If you squint at this value map, you should see the same major shapes as your reference</p>
        </div>
      </div>

      {/* Value Scale Reference */}
      <div className="mt-4 bg-white rounded-lg shadow-md p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Value Scale Reference</h4>
        <div className="flex rounded-lg overflow-hidden border">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className="flex-1 h-8 flex items-center justify-center text-xs font-medium"
              style={{ 
                backgroundColor: `rgb(${255 - (i * 32)}, ${255 - (i * 32)}, ${255 - (i * 32)})`,
                color: i > 4 ? 'white' : 'black'
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-600">
          <span>Lightest</span>
          <span>Mid-tone</span>
          <span>Darkest</span>
        </div>
      </div>
    </div>
  )
}
