'use client'

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface SquintViewerProps {
  squintLevels: string[]
  onLevelChange?: (level: number) => void
  currentLevel?: number
}

export function SquintViewer({ squintLevels, onLevelChange, currentLevel = 0 }: SquintViewerProps) {
  const [localLevel, setLocalLevel] = useState(currentLevel)
  
  const handleLevelChange = (level: number) => {
    setLocalLevel(level)
    onLevelChange?.(level)
  }
  
  const activeLevel = currentLevel ?? localLevel

  const levels = [
    { name: 'Original', description: 'Full detail view' },
    { name: 'Light Squint', description: 'Slight blur - major shapes visible' },
    { name: 'Medium Squint', description: 'Medium blur - light/shadow patterns' },
    { name: 'Heavy Squint', description: 'Strong blur - basic value structure' },
    { name: 'Maximum Squint', description: 'Maximum blur - pure light/dark masses' }
  ]

  // getCurrentImage function removed - image now shown in parent component

  if (!squintLevels || squintLevels.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">👁️ Squint Analysis</h3>
        <p className="text-sm text-gray-400">
          Different blur levels to study shapes and values
        </p>
      </div>

      {/* Level Controls */}
      <div className="mb-4">
        {/* Grid layout for all screens */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {levels.map((level, index) => (
            <Button
              key={index}
              variant={activeLevel === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleLevelChange(index)}
              className={cn(
                "flex items-center justify-center gap-1 px-2 py-2 text-xs",
                activeLevel === index 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
              )}
            >
              {index === 0 ? (
                <EyeOff className="h-3 w-3" />
              ) : (
                <Eye className="h-3 w-3" />
              )}
              <span className="whitespace-nowrap text-xs">{level.name}</span>
            </Button>
          ))}
        </div>
        
        {/* Current Level Description */}
        <div className="text-center">
          <p className="text-sm font-medium text-white">
            {levels[currentLevel].name}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {levels[currentLevel].description}
          </p>
        </div>
      </div>

      {/* Analysis Info */}
      <div className="bg-gray-700 rounded-lg p-3 mb-4">
        <div className="text-center">
          <p className="text-sm font-medium text-white mb-1">
            Current Level: {levels[activeLevel].name}
          </p>
          <p className="text-xs text-gray-400">
            Main image shows squint analysis for this level
          </p>
        </div>
      </div>

      {/* Artist Tips */}
      <div className="bg-gray-700 rounded-lg p-3">
        <h4 className="font-medium text-gray-300 mb-2 text-sm">👁️ Squint Technique</h4>
        <div className="text-xs text-gray-400 space-y-1">
          <p><strong>Level 1-2:</strong> Major shapes and forms</p>
          <p><strong>Level 3:</strong> Light and shadow patterns</p>
          <p><strong>Level 4:</strong> Biggest value relationships</p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mt-3 flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleLevelChange(Math.max(0, activeLevel - 1))}
          disabled={activeLevel === 0}
          className="text-xs bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white disabled:opacity-50"
        >
          ← Less Blur
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleLevelChange(Math.min(4, activeLevel + 1))}
          disabled={activeLevel === 4}
          className="text-xs bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white disabled:opacity-50"
        >
          More Blur →
        </Button>
      </div>
    </div>
  )
}
