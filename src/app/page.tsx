'use client'

import React, { useState } from 'react'
import { Palette, Eye, Contrast, Thermometer, Crosshair } from 'lucide-react'
import { ImageUploader } from '@/components/ImageUploader'
import { ColorPalette } from '@/components/ColorPalette'
import { SquintViewer } from '@/components/SquintViewer'
import { ValueMap } from '@/components/ValueMap'
import { TemperatureMap } from '@/components/TemperatureMap'
import { ColorPicker } from '@/components/ColorPicker'
import { ImageProcessor, ImageAnalysis } from '@/lib/imageProcessing'

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [originalImage, setOriginalImage] = useState<string>('')
  const [analysis, setAnalysis] = useState<ImageAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState<'palette' | 'picker' | 'squint' | 'value' | 'temperature'>('palette')

  const handleImageUpload = async (file: File) => {
    setIsProcessing(true)
    
    try {
      // Create preview URL for original image
      const imageUrl = URL.createObjectURL(file)
      setOriginalImage(imageUrl)
      
      // Process the image
      const processor = new ImageProcessor()
      const result = await processor.processImage(file)
      setAnalysis(result)
      
      // Default to palette view
      setActiveTab('palette')
    } catch (error) {
      console.error('Error processing image:', error)
      alert('Error processing image. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const exportPalette = () => {
    if (!analysis) return
    
    // Create a canvas with the color palette
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    
    canvas.width = 600
    canvas.height = 100
    
    const swatchWidth = canvas.width / analysis.dominantColors.length
    
    analysis.dominantColors.forEach((color, index) => {
      ctx.fillStyle = color.hex
      ctx.fillRect(index * swatchWidth, 0, swatchWidth, canvas.height)
    })
    
    // Download the palette
    const link = document.createElement('a')
    link.href = canvas.toDataURL()
    link.download = 'color-palette.png'
    link.click()
  }

  const tabs = [
    { id: 'palette' as const, name: 'Color Palette', icon: Palette },
    { id: 'picker' as const, name: 'Color Picker', icon: Crosshair },
    { id: 'squint' as const, name: 'Squint Analysis', icon: Eye },
    { id: 'value' as const, name: 'Value Map', icon: Contrast },
    { id: 'temperature' as const, name: 'Temperature Map', icon: Thermometer },
  ]

  return (
    <div className="min-h-screen palette-effect">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Color Palette Generator & Value Map Tool for Artists",
            "description": "Professional color palette generator and value map analyzer for oil painters, watercolor artists, and traditional painters. Extract dominant colors, analyze light/shadow values, temperature mapping, and real-time color picker.",
            "url": "https://artistcolortools.com",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Color Palette Generation",
              "Value Map Analysis", 
              "Temperature Mapping",
              "Real-time Color Picker",
              "Squint Analysis",
              "Export Color Swatches"
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "Artists, Oil Painters, Watercolor Artists, Traditional Painters"
            }
          })
        }}
      />

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-green-500/10"></div>
        <div className="relative bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-gradient-to-r from-red-500 via-yellow-500 to-green-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full shadow-lg" aria-hidden="true"></div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  🎨 Free Color Palette Generator & Value Map Analyzer for Artists
                </h1>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg" aria-hidden="true"></div>
              </div>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg font-medium">
                Professional <strong>color palette generator</strong> and <strong>value map analyzer</strong> for <strong>oil painters</strong>, <strong>watercolor artists</strong>, and <strong>traditional painters</strong>. 
                Extract <em>dominant colors</em>, analyze <em>light and shadow values</em>, explore <em>color temperature relationships</em>, and use our <em>real-time color picker</em>.
                <span className="text-red-600 font-semibold"> Free online art reference tool with advanced squint analysis for better paintings.</span>
              </p>
              <div className="flex justify-center gap-2 mt-4" aria-hidden="true">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Upload Section */}
        <section className="mb-8" aria-labelledby="upload-heading">
          <h2 id="upload-heading" className="sr-only">Upload Your Reference Image</h2>
          <ImageUploader 
            onImageUpload={handleImageUpload}
            isProcessing={isProcessing}
          />
        </section>

        {/* Analysis Results */}
        {analysis && originalImage && (
          <section className="space-y-8" aria-labelledby="analysis-heading">
            <h2 id="analysis-heading" className="sr-only">Color Analysis Results</h2>
            
            {/* Tab Navigation */}
            <nav className="flex justify-center" aria-label="Analysis tools">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-yellow-300 p-2 flex space-x-2 paint-brush-border">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        artist-tab flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300
                        ${activeTab === tab.id 
                          ? 'active' 
                          : ''
                        }
                      `}
                      aria-pressed={activeTab === tab.id}
                      aria-describedby={`${tab.id}-description`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {tab.name}
                    </button>
                  )
                })}
              </div>
            </nav>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'palette' && (
                <section aria-labelledby="palette-heading">
                  <ColorPalette 
                    colors={analysis.dominantColors}
                    onExport={exportPalette}
                  />
                </section>
              )}
              
              {activeTab === 'picker' && (
                <section aria-labelledby="picker-heading">
                  <ColorPicker 
                    imageUrl={originalImage}
                  />
                </section>
              )}
              
              {activeTab === 'squint' && (
                <section aria-labelledby="squint-heading">
                  <SquintViewer 
                    originalImage={originalImage}
                    squintLevels={analysis.squintLevels}
                  />
                </section>
              )}
              
              {activeTab === 'value' && (
                <section aria-labelledby="value-heading">
                  <ValueMap 
                    originalImage={originalImage}
                    valueMap={analysis.valueMap}
                  />
                </section>
              )}
              
              {activeTab === 'temperature' && (
                <section aria-labelledby="temperature-heading">
                  <TemperatureMap 
                    originalImage={originalImage}
                    temperatureMap={analysis.temperatureMap}
                  />
                </section>
              )}
            </div>
          </section>
        )}

        {/* Getting Started Guide */}
        {!analysis && !isProcessing && (
          <section className="mt-12 max-w-5xl mx-auto" aria-labelledby="guide-heading">
            <div className="bg-gradient-to-br from-white via-orange-50 to-yellow-50 rounded-2xl shadow-xl border-4 border-gradient-to-r from-red-300 via-yellow-300 to-green-300 p-10 paint-brush-border">
              <h2 id="guide-heading" className="text-3xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-8 text-center">
                🎨 How to Use This Professional Artist Color Analysis Tool
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <article className="text-center group">
                  <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">📸 Upload Reference Image</h3>
                  <p className="text-gray-700 font-medium">
                    Upload your <strong>reference photo</strong> or <strong>painting study</strong> using drag & drop or file browser. Supports JPEG, PNG, and WebP formats.
                  </p>
                </article>
                
                <article className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🎨 Extract Dominant Colors</h3>
                  <p className="text-gray-700 font-medium">
                    Get the 6 most <strong>dominant colors</strong> as <strong>paint swatches</strong> with hex codes and RGB values for accurate <strong>color mixing</strong>.
                  </p>
                </article>
                
                <article className="text-center group">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">👁️ Analyze Light & Shadow</h3>
                  <p className="text-gray-700 font-medium">
                    Study <strong>light and shadow patterns</strong> with <strong>value maps</strong> and <strong>squint analysis</strong> to understand form and depth.
                  </p>
                </article>
                
                <article className="text-center group">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🖌️ Paint with Confidence</h3>
                  <p className="text-gray-700 font-medium">
                    Use <strong>color temperature analysis</strong> and <strong>real-time color picker</strong> to create more accurate and vibrant paintings.
                  </p>
                </article>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  ✨ Perfect for <span className="text-red-600">Oil Painters</span>, <span className="text-yellow-600">Watercolor Artists</span>, <span className="text-green-600">Acrylic Painters</span>, and <span className="text-blue-600">Traditional Artists</span> ✨
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Free online tool</strong> • No registration required • Works on desktop and mobile • Export color palettes
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SEO Content Section */}
        <section className="mt-16 max-w-4xl mx-auto prose prose-lg" aria-labelledby="seo-content-heading">
          <h2 id="seo-content-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Professional Color Analysis Tools for Artists
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
            <article>
              <h3 className="font-semibold text-gray-900 mb-3">Color Palette Generator Features</h3>
              <ul className="space-y-2">
                <li>• <strong>K-means clustering algorithm</strong> for accurate color extraction</li>
                <li>• <strong>6 dominant colors</strong> with percentage dominance</li>
                <li>• <strong>Hex codes and RGB values</strong> for precise color matching</li>
                <li>• <strong>Export color swatches</strong> as PNG images</li>
                <li>• <strong>Copy color codes</strong> to clipboard instantly</li>
              </ul>
            </article>
            
            <article>
              <h3 className="font-semibold text-gray-900 mb-3">Value Map & Analysis Tools</h3>
              <ul className="space-y-2">
                <li>• <strong>Grayscale value mapping</strong> for light/shadow study</li>
                <li>• <strong>4-level squint analysis</strong> for form simplification</li>
                <li>• <strong>Color temperature mapping</strong> (warm/cool zones)</li>
                <li>• <strong>Real-time color picker</strong> with crosshair precision</li>
                <li>• <strong>Side-by-side comparisons</strong> for better analysis</li>
              </ul>
            </article>
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-3">Why Artists Choose Our Color Analysis Tool</h3>
            <p className="text-amber-800">
              Our <strong>free color palette generator</strong> uses advanced algorithms to provide accurate color analysis for <strong>oil painting</strong>, 
              <strong>watercolor</strong>, and <strong>acrylic painting</strong>. Whether you&apos;re a beginner learning <strong>color theory</strong> or a 
              professional artist working on <strong>commissioned paintings</strong>, our tool helps you understand <strong>color relationships</strong>, 
              <strong>value structures</strong>, and <strong>temperature variations</strong> in your reference images.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-green-500/10"></div>
        <div className="relative bg-white/90 backdrop-blur-sm border-t-4 border-gradient-to-r from-red-500 via-yellow-500 to-green-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center">
              <div className="flex justify-center gap-3 mb-4" aria-hidden="true">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <p className="text-lg font-semibold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Built with ❤️ for oil painters and traditional artists worldwide
              </p>
              <p className="text-gray-700 font-medium mt-2">
                Free color analysis tools • Value mapping • Temperature analysis • Real-time color picker
              </p>
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">🎨 Paint • 👁️ Analyze • 🌡️ Explore • 🎯 Create • 📱 Mobile-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
