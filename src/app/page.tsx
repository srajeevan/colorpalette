'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Palette, Eye, Contrast, Thermometer, Crosshair } from 'lucide-react'
import { ImageUploader } from '@/components/ImageUploader'
import { ColorPalette } from '@/components/ColorPalette'
import { SquintViewer } from '@/components/SquintViewer'
import { ValueMap } from '@/components/ValueMap'
import { TemperatureMap } from '@/components/TemperatureMap'
import { ColorPicker } from '@/components/ColorPicker'
import { ColorPickerCanvas } from '@/components/ColorPickerCanvas'
import { ImageProcessor, ImageAnalysis } from '@/lib/imageProcessing'
import { trackEvent } from '@/components/GoogleAnalytics'

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [originalImage, setOriginalImage] = useState<string>('')
  const [analysis, setAnalysis] = useState<ImageAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState<'palette' | 'picker' | 'squint' | 'value' | 'temperature'>('palette')
  const [squintLevel, setSquintLevel] = useState(0)
  const [selectedColor, setSelectedColor] = useState<{hex: string; rgb: {r: number; g: number; b: number}} | null>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const handleImageUpload = async (file: File) => {
    setIsProcessing(true)
    
    try {
      // Track image upload event
      trackEvent('image_upload', 'user_interaction', 'image_uploaded', Math.round(file.size / 1024))
      
      // Create preview URL for original image
      const imageUrl = URL.createObjectURL(file)
      setOriginalImage(imageUrl)
      
      // Process the image
      const processor = new ImageProcessor()
      const result = await processor.processImage(file)
      setAnalysis(result)
      
      // Track successful analysis
      trackEvent('analysis_complete', 'user_interaction', 'image_processed')
      
      // Default to palette view
      setActiveTab('palette')
    } catch (error) {
      console.error('Error processing image:', error)
      trackEvent('analysis_error', 'user_interaction', 'processing_failed')
      alert('Error processing image. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const exportPalette = () => {
    if (!analysis) return
    
    // Track palette export event
    trackEvent('palette_export', 'user_interaction', 'palette_downloaded')
    
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

  const handleTabChange = (tabId: 'palette' | 'picker' | 'squint' | 'value' | 'temperature') => {
    // Track tab navigation
    trackEvent('tab_navigation', 'user_interaction', `${tabId}_tab_selected`)
    setActiveTab(tabId)
  }

  const tabs = [
    { id: 'palette' as const, name: 'Color Palette', icon: Palette },
    { id: 'picker' as const, name: 'Color Picker', icon: Crosshair },
    { id: 'squint' as const, name: 'Squint Analysis', icon: Eye },
    { id: 'value' as const, name: 'Value Map', icon: Contrast },
    { id: 'temperature' as const, name: 'Temperature Map', icon: Thermometer },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col w-screen overflow-x-hidden">
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

      {/* Top Navbar - Modern UI/UX Design */}
      <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 px-8 py-4 flex-shrink-0 z-20 shadow-lg">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          {/* Left - Icon + Brand (Following F-pattern design) */}
          <div className="flex items-center gap-4">
            {/* Logo Icon - Positioned leftmost for visual hierarchy */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-blue-500/20 transition-all duration-200 hover:ring-blue-500/40 hover:scale-105">
              <span className="text-white font-bold text-lg">🎨</span>
            </div>
            
            {/* Brand Text - Improved typography hierarchy */}
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-xl tracking-tight leading-tight">Artist Color Tools</h1>
              <p className="text-gray-400 text-sm font-medium">Professional Color Analysis Platform</p>
            </div>
          </div>

          {/* Center - Navigation Links (Improved spacing and typography) */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-white text-base font-semibold transition-all duration-300 hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="relative group">
              <button className="text-gray-300 hover:text-white text-base font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Tutorials
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Enhanced Dropdown with modern design */}
              <div className="absolute top-full left-0 mt-3 w-56 bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-600/50 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">Learn & Grow</div>
                  <Link href="/tutorials/color-theory" className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 group/item">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400">📚</span>
                      <span>Color Theory Basics</span>
                    </div>
                  </Link>
                  <Link href="/tutorials/oil-painting" className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 group/item">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">🎨</span>
                      <span>Oil Painting Tips</span>
                    </div>
                  </Link>
                  <Link href="/tutorials/value-studies" className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 group/item">
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400">⚫</span>
                      <span>Value Studies Guide</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="text-gray-300 hover:text-white text-base font-semibold transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link href="/blog" className="text-gray-300 hover:text-white text-base font-semibold transition-all duration-300 hover:scale-105 relative group">
              Blog
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right - CTA Section (Enhanced with better spacing) */}
          <div className="flex items-center gap-6">
            {/* Support CTA - Refined design */}
            <a 
              href="https://buymeacoffee.com/srajeevan" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://buymeacoffee.com/srajeevan', '_blank', 'noopener,noreferrer');
              }}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 px-5 py-2.5 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">☕</span>
              <span>Buy me a coffee</span>
            </a>
            
            {/* Mobile/Tablet menu button - Enhanced */}
            <button className="lg:hidden p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area with Sidebar */}
      <div className="flex-1 flex min-h-0">
        {/* Left Sidebar Navigation */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-gray-800 border-r border-gray-700 flex flex-col transition-all duration-300`}>
        {/* Sidebar Header with Collapse Button */}
        <div className={`${sidebarCollapsed ? 'p-3' : 'p-6'} border-b border-gray-700 relative`}>
          <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!sidebarCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">🎨</span>
                </div>
                <div>
                  <h2 className="text-white font-semibold text-sm">Tools</h2>
                  <p className="text-gray-400 text-xs">Analysis Panel</p>
                </div>
              </div>
            )}
            
            {/* Collapse Toggle Button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className={`p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 flex-shrink-0 ${
                sidebarCollapsed ? 'w-8 h-8' : ''
              }`}
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sidebarCollapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {/* Upload Button */}
            <div className="mb-6">
              <button
                onClick={() => {
                  const input = document.querySelector('input[type="file"]') as HTMLInputElement
                  if (input) input.click()
                }}
                className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 group`}
                title={sidebarCollapsed ? 'Upload Image' : ''}
              >
                <div className="w-5 h-5 text-gray-400 group-hover:text-white">📁</div>
                {!sidebarCollapsed && <span className="font-medium">Upload Image</span>}
              </button>
            </div>

            {/* Analysis Tools - Always visible */}
            <div className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${sidebarCollapsed ? 'text-center' : 'px-4'}`}>
              {sidebarCollapsed ? '•••' : 'Analysis Tools'}
            </div>
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isDisabled = !analysis
              return (
                <button
                  key={tab.id}
                  onClick={() => analysis && handleTabChange(tab.id)}
                  disabled={isDisabled}
                  className={`
                    w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3 rounded-lg text-left font-medium transition-all duration-200 group
                    ${isDisabled 
                      ? 'text-gray-500 cursor-not-allowed opacity-50' 
                      : activeTab === tab.id && analysis
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }
                  `}
                  title={sidebarCollapsed ? (isDisabled ? `${tab.name} (Upload image first)` : tab.name) : ''}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!sidebarCollapsed && (
                    <div className="flex-1">
                      <div className="font-medium">{tab.name}</div>
                      <div className="text-xs opacity-75 mt-0.5">
                        {isDisabled 
                          ? 'Upload image first' 
                          : activeTab === tab.id && analysis 
                            ? 'Active' 
                            : 'Click to activate'
                        }
                      </div>
                    </div>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Quick Actions at bottom */}
          {analysis && !sidebarCollapsed && (
            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="space-y-2">
                <button
                  onClick={exportPalette}
                  className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200"
                >
                  <span className="text-green-400">📥</span>
                  <span className="text-sm font-medium">Export Palette</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Info */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-gray-700">
            <div className="text-xs text-gray-400">
              <div className="font-semibold text-gray-300 mb-1">Free Artist Tool</div>
              <div>Professional color analysis for painters</div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Main Content */}
        <main className="flex-1 bg-gray-900 overflow-hidden min-h-0">
          {!analysis ? (
            /* Upload Screen */
            <div className="h-full overflow-auto">
              {/* Header Section - Compact */}
              <div className="relative bg-gray-900 border-b border-gray-700">
                <div className="relative max-w-6xl mx-auto px-8 py-6">
                  <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      🎨 Free Color Palette Generator & Value Map Analyzer for Artists
                    </h1>
                    <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
                      Professional <strong className="text-gray-300">color palette generator</strong> and <strong className="text-gray-300">value map analyzer</strong> for artists. 
                      Extract colors, analyze values, explore temperature relationships, and use our real-time color picker.
                    </p>
                  </div>
                </div>
              </div>

              {/* Upload Section */}
              <div className="flex items-center justify-center p-8 min-h-[50vh]">
                <div className="max-w-2xl w-full">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Upload Your Reference Image
                    </h2>
                    <p className="text-gray-400">
                      Get started by uploading your reference photo or painting study
                    </p>
                  </div>
                  
                  <ImageUploader 
                    onImageUpload={handleImageUpload}
                    isProcessing={isProcessing}
                  />

                  {/* Quick Features */}
                  <div className="grid md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-white font-semibold mb-3">🎨 Color Analysis</h3>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li>• Extract dominant colors with hex codes</li>
                        <li>• Real-time color picker tool</li>
                        <li>• Export color palettes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <h3 className="text-white font-semibold mb-3">👁️ Value Studies</h3>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li>• Grayscale value mapping</li>
                        <li>• 4-level squint analysis</li>
                        <li>• Temperature mapping (warm/cool)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Use Guide */}
              <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    🎨 How to Use This Professional Artist Color Analysis Tool
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center group">
                      <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-base">📸 Upload Reference Image</h3>
                      <p className="text-gray-400 text-sm">
                        Upload your <strong className="text-gray-300">reference photo</strong> or <strong className="text-gray-300">painting study</strong> using drag & drop or file browser. Supports JPEG, PNG, and WebP formats.
                      </p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-base">🎨 Extract Dominant Colors</h3>
                      <p className="text-gray-400 text-sm">
                        Get the 6 most <strong className="text-gray-300">dominant colors</strong> as <strong className="text-gray-300">paint swatches</strong> with hex codes and RGB values for accurate <strong className="text-gray-300">color mixing</strong>.
                      </p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-base">👁️ Analyze Light & Shadow</h3>
                      <p className="text-gray-400 text-sm">
                        Study <strong className="text-gray-300">light and shadow patterns</strong> with <strong className="text-gray-300">value maps</strong> and <strong className="text-gray-300">squint analysis</strong> to understand form and depth.
                      </p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-base">🖌️ Paint with Confidence</h3>
                      <p className="text-gray-400 text-sm">
                        Use <strong className="text-gray-300">color temperature analysis</strong> and <strong className="text-gray-300">real-time color picker</strong> to create more accurate and vibrant paintings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-base font-medium text-gray-300">
                      ✨ Perfect for <span className="text-gray-200">Oil Painters</span>, <span className="text-gray-200">Watercolor Artists</span>, <span className="text-gray-200">Acrylic Painters</span>, and <span className="text-gray-200">Traditional Artists</span> ✨
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      <strong className="text-gray-300">Free online tool</strong> • No registration required • Works on desktop and mobile • Export color palettes
                    </p>
                  </div>
                </div>
              </div>

              {/* SEO Content Section */}
              <div className="max-w-5xl mx-auto px-8 py-12 border-t border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Professional Color Analysis Tools for Artists
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-3">Color Palette Generator Features</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong className="text-white">K-means clustering algorithm</strong> for accurate color extraction</li>
                      <li>• <strong className="text-white">6 dominant colors</strong> with percentage dominance</li>
                      <li>• <strong className="text-white">Hex codes and RGB values</strong> for precise color matching</li>
                      <li>• <strong className="text-white">Export color swatches</strong> as PNG images</li>
                      <li>• <strong className="text-white">Copy color codes</strong> to clipboard instantly</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-3">Value Map & Analysis Tools</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong className="text-white">Grayscale value mapping</strong> for light/shadow study</li>
                      <li>• <strong className="text-white">4-level squint analysis</strong> for form simplification</li>
                      <li>• <strong className="text-white">Color temperature mapping</strong> (warm/cool zones)</li>
                      <li>• <strong className="text-white">Real-time color picker</strong> with crosshair precision</li>
                      <li>• <strong className="text-white">Side-by-side comparisons</strong> for better analysis</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">Why Artists Choose Our Color Analysis Tool</h3>
                  <p className="text-gray-400 text-sm">
                    Our <strong className="text-gray-300">free color palette generator</strong> uses advanced algorithms to provide accurate color analysis for <strong className="text-gray-300">oil painting</strong>, 
                    <strong className="text-gray-300"> watercolor</strong>, and <strong className="text-gray-300">acrylic painting</strong>. Whether you&apos;re a beginner learning <strong className="text-gray-300">color theory</strong> or a 
                    professional artist working on <strong className="text-gray-300">commissioned paintings</strong>, our tool helps you understand <strong className="text-gray-300">color relationships</strong>, 
                    <strong className="text-gray-300"> value structures</strong>, and <strong className="text-gray-300">temperature variations</strong> in your reference images.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-900 border-t border-gray-700 mt-12">
                <div className="max-w-6xl mx-auto px-8 py-8">
                  <div className="text-center">
                    <p className="text-base font-medium text-white">
                      Built with ❤️ for oil painters and traditional artists worldwide
                    </p>
                    <p className="text-gray-300 font-medium mt-2">
                      Free color analysis tools • Value mapping • Temperature analysis • Real-time color picker
                    </p>
                    <div className="mt-4 text-sm text-gray-400">
                      <span className="font-semibold">🎨 Paint • 👁️ Analyze • 🌡️ Explore • 🎯 Create • 📱 Mobile-Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Analysis Dashboard */
            <div className="h-full flex flex-col min-h-0">
              {/* Main Content Grid - Use conservative breakpoint for side-by-side layout */}
              <div className="flex-1 flex flex-col xl:flex-row gap-0 min-h-0">
                {/* Left - Image Display Area */}
                <div className="flex-1 xl:flex-[3] p-2 lg:p-3 min-w-0 min-h-0 w-full h-full">
                  <div className="bg-gray-800 rounded-xl border border-gray-700 p-2 lg:p-3 h-full w-full flex flex-col min-h-0">
                    <div className="flex items-center justify-between mb-1 flex-shrink-0">
                      <h2 className="text-white font-semibold text-sm lg:text-base truncate">
                        {activeTab === 'palette' && '🎨 Original Image'}
                        {activeTab === 'picker' && '🎯 Color Picker'}
                        {activeTab === 'squint' && `👁️ Squint Level ${squintLevel}`}
                        {activeTab === 'value' && '🔳 Value Map'}
                        {activeTab === 'temperature' && '🌡️ Temperature Map'}
                      </h2>
                      
                      {activeTab === 'picker' && (
                        <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full whitespace-nowrap">
                          Click to pick
                        </div>
                      )}
                    </div>

                    {/* Image Container - Full available space utilization */}
                    <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center min-h-0 w-full h-full">
                      {activeTab === 'picker' ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={originalImage}
                            alt="Reference Image for Color Picking"
                            className="object-contain"
                            style={{ maxWidth: '95%', maxHeight: '95%' }}
                          />
                          <ColorPickerCanvas
                            imageUrl={originalImage}
                            isActive={activeTab === 'picker'}
                            onColorSelect={setSelectedColor}
                          />
                        </div>
                      ) : activeTab === 'squint' ? (
                        <img
                          src={squintLevel === 0 ? originalImage : analysis.squintLevels[squintLevel - 1]}
                          alt="Squint Analysis"
                          className="object-contain"
                          style={{ maxWidth: '95%', maxHeight: '95%' }}
                        />
                      ) : activeTab === 'value' ? (
                        <img
                          src={analysis.valueMap}
                          alt="Value Map"
                          className="object-contain"
                          style={{ maxWidth: '95%', maxHeight: '95%' }}
                        />
                      ) : activeTab === 'temperature' ? (
                        <img
                          src={analysis.temperatureMap}
                          alt="Temperature Map"
                          className="object-contain"
                          style={{ maxWidth: '95%', maxHeight: '95%' }}
                        />
                      ) : (
                        <img
                          src={originalImage}
                          alt="Reference Image"
                          className="object-contain"
                          style={{ maxWidth: '95%', maxHeight: '95%' }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar - Analysis Results */}
                <div className="xl:w-80 xl:flex-shrink-0 bg-gray-800 border-t xl:border-t-0 xl:border-l border-gray-700 flex flex-col min-h-0 max-h-[50vh] xl:max-h-none">
                  <div className="p-3 lg:p-4 border-b border-gray-700 flex-shrink-0">
                    <h3 className="text-white font-semibold text-sm lg:text-base flex items-center gap-2">
                      📊 Results
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 truncate">
                      {tabs.find(tab => tab.id === activeTab)?.name} analysis
                    </p>
                  </div>
                  
                  <div className="flex-1 p-3 lg:p-4 overflow-y-auto min-h-0">
                    {activeTab === 'palette' && (
                      <ColorPalette 
                        colors={analysis.dominantColors}
                        onExport={exportPalette}
                      />
                    )}
                    
                    {activeTab === 'squint' && (
                      <SquintViewer 
                        squintLevels={analysis.squintLevels}
                        currentLevel={squintLevel}
                        onLevelChange={setSquintLevel}
                      />
                    )}
                    
                    {activeTab === 'value' && (
                      <ValueMap 
                        valueMap={analysis.valueMap}
                      />
                    )}
                    
                    {activeTab === 'temperature' && (
                      <TemperatureMap 
                        temperatureMap={analysis.temperatureMap}
                      />
                    )}
                    
                    {activeTab === 'picker' && (
                      <ColorPicker 
                        imageUrl={originalImage}
                        selectedColor={selectedColor}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hidden file input for new image uploads */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                handleImageUpload(file)
              }
            }}
            className="hidden"
          />
        </main>
      </div>
      </div>
    </div>
  )
}
