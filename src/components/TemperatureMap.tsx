'use client'

import React, { useState } from 'react'
import { Thermometer, Download } from 'lucide-react'
import { Button } from './ui/button'

interface TemperatureMapProps {
  originalImage: string
  temperatureMap: string
}

export function TemperatureMap({ originalImage, temperatureMap }: TemperatureMapProps) {
  const [showComparison, setShowComparison] = useState(false)

  const downloadTemperatureMap = () => {
    const link = document.createElement('a')
    link.href = temperatureMap
    link.download = 'temperature-map.png'
    link.click()
  }

  if (!temperatureMap) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Temperature Map</h2>
          <p className="text-gray-600">
            Warm and cool color zones in your reference image
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-2"
          >
            <Thermometer className="h-4 w-4" />
            {showComparison ? 'Hide' : 'Show'} Comparison
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={downloadTemperatureMap}
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
              <h3 className="font-semibold text-gray-900">Temperature Map</h3>
            </div>
            <img
              src={temperatureMap}
              alt="Temperature Map"
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
      ) : (
        /* Single Temperature Map View */
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={temperatureMap}
            alt="Temperature Map"
            className="w-full h-auto max-h-96 object-contain mx-auto"
          />
        </div>
      )}

      {/* Temperature Legend */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <h4 className="font-semibold text-red-900">Warm Colors</h4>
          </div>
          <div className="text-sm text-red-800 space-y-1">
            <p>• Reds, oranges, yellows</p>
            <p>• Appear to advance forward</p>
            <p>• Create energy and warmth</p>
            <p>• Often found in light sources, skin tones</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <h4 className="font-semibold text-blue-900">Cool Colors</h4>
          </div>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Blues, greens, purples</p>
            <p>• Appear to recede backward</p>
            <p>• Create calm and distance</p>
            <p>• Often found in shadows, sky, water</p>
          </div>
        </div>
      </div>

      {/* Artist Tips */}
      <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-2">🌡️ Temperature Mixing Tips</h4>
        <div className="text-sm text-purple-800 space-y-1">
          <p>• <strong>Warm shadows:</strong> Add warm colors (burnt umber, raw sienna) to shadow mixtures</p>
          <p>• <strong>Cool lights:</strong> Add cool colors (ultramarine, viridian) to highlight mixtures</p>
          <p>• <strong>Color temperature shift:</strong> Shadows are often cooler than lights, but not always!</p>
          <p>• <strong>Atmospheric perspective:</strong> Distant objects appear cooler and less saturated</p>
          <p>• <strong>Complementary temperatures:</strong> Warm and cool areas create visual interest and depth</p>
        </div>
      </div>

      {/* Color Temperature Wheel Reference */}
      <div className="mt-4 bg-white rounded-lg shadow-md p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Color Temperature Reference</h4>
        <div className="flex rounded-lg overflow-hidden border h-12">
          {/* Warm to Cool Gradient */}
          <div className="flex-1" style={{ background: 'linear-gradient(to right, #ff4444, #ff8844, #ffcc44, #88cc44, #44cc88, #44ccff, #4488ff, #4444ff)' }}></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>Warm (Advancing)</span>
          <span>Neutral</span>
          <span>Cool (Receding)</span>
        </div>
      </div>
    </div>
  )
}
