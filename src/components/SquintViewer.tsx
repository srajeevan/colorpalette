'use client'

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface SquintViewerProps {
  originalImage: string
  squintLevels: string[]
}

export function SquintViewer({ originalImage, squintLevels }: SquintViewerProps) {
  const [currentLevel, setCurrentLevel] = useState(0) // 0 = original, 1-4 = squint levels

  const levels = [
    { name: 'Original', description: 'Full detail view' },
    { name: 'Light Squint', description: 'Slight blur - major shapes visible' },
    { name: 'Medium Squint', description: 'Medium blur - light/shadow patterns' },
    { name: 'Heavy Squint', description: 'Strong blur - basic value structure' },
    { name: 'Maximum Squint', description: 'Maximum blur - pure light/dark masses' }
  ]

  const getCurrentImage = () => {
    return currentLevel === 0 ? originalImage : squintLevels[currentLevel - 1]
  }

  if (!squintLevels || squintLevels.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Squint Analysis</h2>
        <p className="text-gray-600">
          Use different blur levels to identify major light and shadow patterns in your reference image.
        </p>
      </div>

      {/* Level Controls */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {levels.map((level, index) => (
            <Button
              key={index}
              variant={currentLevel === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentLevel(index)}
              className={cn(
                "flex items-center gap-2",
                currentLevel === index && "ring-2 ring-blue-500"
              )}
            >
              {index === 0 ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              {level.name}
            </Button>
          ))}
        </div>
        
        {/* Current Level Description */}
        <div className="text-center mt-3">
          <p className="text-sm font-medium text-gray-900">
            {levels[currentLevel].name}
          </p>
          <p className="text-xs text-gray-600">
            {levels[currentLevel].description}
          </p>
        </div>
      </div>

      {/* Image Display */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={getCurrentImage()}
            alt={`Squint level ${currentLevel}`}
            className="w-full h-auto max-h-96 object-contain mx-auto"
          />
          
          {/* Level Indicator Overlay */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            Level {currentLevel}: {levels[currentLevel].name}
          </div>
        </div>
      </div>

      {/* Artist Tips */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">👁️ Squinting Technique for Artists</h4>
        <div className="text-sm text-blue-800 space-y-1">
          <p><strong>Level 1-2:</strong> Identify major shapes and forms</p>
          <p><strong>Level 3:</strong> See clear light and shadow patterns</p>
          <p><strong>Level 4:</strong> Focus on the biggest value relationships</p>
          <p><strong>Tip:</strong> Start your painting with the patterns you see at Level 4, then add detail progressively</p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mt-4 flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentLevel(Math.max(0, currentLevel - 1))}
          disabled={currentLevel === 0}
        >
          ← Less Blur
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentLevel(Math.min(4, currentLevel + 1))}
          disabled={currentLevel === 4}
        >
          More Blur →
        </Button>
      </div>
    </div>
  )
}
