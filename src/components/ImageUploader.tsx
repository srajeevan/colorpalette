'use client'

import React, { useCallback, useState } from 'react'
import { Upload, Image as ImageIcon } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface ImageUploaderProps {
  onImageUpload: (file: File) => void
  isProcessing?: boolean
}

export function ImageUploader({ onImageUpload, isProcessing = false }: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPEG, PNG, WebP)')
      return
    }

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)

    // Pass file to parent
    onImageUpload(file)
  }, [onImageUpload])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find(file => file.type.startsWith('image/'))
    
    if (imageFile) {
      handleFileSelect(imageFile)
    }
  }, [handleFileSelect])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={cn(
          "relative border-4 border-dashed rounded-2xl p-10 text-center transition-all duration-300 paint-brush-border",
          isDragOver 
            ? "border-red-500 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 scale-105" 
            : "border-yellow-400 bg-gradient-to-br from-white via-orange-50 to-yellow-50 hover:border-orange-400 hover:scale-102",
          isProcessing && "opacity-50 pointer-events-none"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600">
              {isProcessing ? 'Processing image...' : 'Image ready for analysis'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              {isDragOver ? (
                <ImageIcon className="h-12 w-12 text-blue-500" />
              ) : (
                <Upload className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                Drop your reference image here
              </p>
              <p className="text-sm text-gray-600 mt-1">
                or click to browse files
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Supports JPEG, PNG, and WebP formats
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isProcessing}
        />
      </div>

      {preview && !isProcessing && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            onClick={() => {
              setPreview(null)
              // Reset file input
              const input = document.querySelector('input[type="file"]') as HTMLInputElement
              if (input) input.value = ''
            }}
          >
            Choose Different Image
          </Button>
        </div>
      )}
    </div>
  )
}
