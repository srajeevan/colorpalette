'use client'

import React, { useState } from 'react'
import { Thermometer, Download } from 'lucide-react'
import { Button } from './ui/button'

interface TemperatureMapProps {
  temperatureMap: string
}

export function TemperatureMap({ temperatureMap }: TemperatureMapProps) {
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
    <div className="w-full">
      <div className="mb-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">🌡️ Temperature Map</h3>
          <p className="text-sm text-gray-400">
            Warm and cool color zones analysis
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-2 text-xs bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
          >
            <Thermometer className="h-3 w-3" />
            {showComparison ? 'Hide' : 'Show'}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={downloadTemperatureMap}
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
            Temperature Analysis Active
          </p>
          <p className="text-xs text-gray-400">
            Main image highlights warm vs cool zones
          </p>
        </div>
        
        {showComparison && (
          <div className="grid grid-cols-1 gap-3 text-xs">
            <div className="bg-gray-600 p-2 rounded">
              <h4 className="font-medium text-white mb-1">Original Image</h4>
              <p className="text-gray-300">Natural color relationships</p>
            </div>
            <div className="bg-gray-600 p-2 rounded">
              <h4 className="font-medium text-white mb-1">Temperature Analysis</h4>
              <p className="text-gray-300">Warm vs cool visualization</p>
            </div>
          </div>
        )}
      </div>

      {/* Temperature Legend */}
      <div className="grid grid-cols-1 gap-3 mb-4">
        <div className="bg-gray-700 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <h4 className="font-medium text-white text-sm">Warm Colors</h4>
          </div>
          <div className="text-xs text-gray-400 space-y-1">
            <p>• Reds, oranges, yellows - advance forward</p>
            <p>• Light sources, skin tones</p>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h4 className="font-medium text-white text-sm">Cool Colors</h4>
          </div>
          <div className="text-xs text-gray-400 space-y-1">
            <p>• Blues, greens, purples - recede back</p>
            <p>• Shadows, sky, water</p>
          </div>
        </div>
      </div>

      {/* Artist Tips */}
      <div className="bg-gray-700 rounded-lg p-3 mb-4">
        <h4 className="font-medium text-gray-300 mb-2 text-sm">🌡️ Mixing Tips</h4>
        <div className="text-xs text-gray-400 space-y-1">
          <p>• <strong>Warm shadows:</strong> Add burnt umber, raw sienna</p>
          <p>• <strong>Cool lights:</strong> Add ultramarine, viridian</p>
          <p>• <strong>Tip:</strong> Warm/cool creates depth</p>
        </div>
      </div>

      {/* Color Temperature Reference */}
      <div className="bg-gray-700 rounded-lg p-3">
        <h4 className="font-medium text-gray-300 mb-2 text-sm">Temperature Scale</h4>
        <div className="flex rounded overflow-hidden h-6">
          <div className="flex-1" style={{ background: 'linear-gradient(to right, #ff4444, #ff8844, #ffcc44, #88cc44, #44cc88, #44ccff, #4488ff, #4444ff)' }}></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-400">
          <span>Warm</span>
          <span>Cool</span>
        </div>
      </div>
    </div>
  )
}
