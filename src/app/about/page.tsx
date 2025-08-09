import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Artist Color Tools | Free Color Analysis Platform for Painters',
  description: 'Learn about our professional color palette generator and value map analyzer. Created by artists, for artists. Free tools for oil painters, watercolor artists, and traditional painters worldwide.',
  keywords: 'artist color tools, color palette generator, value map analyzer, oil painting tools, watercolor painting, traditional art, color theory, paint mixing, artist reference tools',
  openGraph: {
    title: 'About Artist Color Tools | Professional Color Analysis Platform',
    description: 'Free color analysis tools created by artists for artists. Professional-grade color palette generator and value mapping.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border-b border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-6">
              About Artist Color Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional <strong className="text-white">color analysis platform</strong> designed by artists, for artists. 
              Helping <strong className="text-white">oil painters</strong>, <strong className="text-white">watercolor artists</strong>, 
              and <strong className="text-white">traditional painters</strong> create better paintings through accurate color analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe every artist deserves access to professional-grade <strong className="text-white">color analysis tools</strong> 
                without breaking the bank. Our platform provides the same level of <strong className="text-white">color palette generation</strong> 
                and <strong className="text-white">value mapping</strong> that professional art studios use, completely free.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you&apos;re a beginner learning <strong className="text-white">color theory</strong> or a professional artist 
                working on commissioned pieces, our tools help you understand color relationships, value structures, 
                and temperature variations in your reference images.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white font-semibold">100% Free Forever</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-white font-semibold">No Registration Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-white font-semibold">Professional Quality Tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-white font-semibold">Built by Professional Artists</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Professional Artist Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Color Palette Generator</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Extract the 6 most <strong className="text-white">dominant colors</strong> from any reference image using 
                advanced K-means clustering algorithm. Perfect for <strong className="text-white">oil painting</strong> 
                and <strong className="text-white">acrylic painting</strong> color mixing.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">⚫</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Value Map Analysis</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Convert your reference images to <strong className="text-white">grayscale value maps</strong> to understand 
                light and shadow relationships. Essential for creating strong <strong className="text-white">value studies</strong> 
                and realistic paintings.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🌡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Temperature Mapping</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Analyze <strong className="text-white">warm and cool color relationships</strong> in your reference images. 
                Perfect for understanding <strong className="text-white">color temperature</strong> in portrait painting 
                and landscape art.
              </p>
            </div>
          </div>
        </section>

        {/* Artist Story Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-12 border border-gray-600">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Built by Artists, for Artists</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As working <strong className="text-white">professional artists</strong> ourselves, we understand the daily challenges 
                of color mixing, value studies, and reference analysis. We&apos;ve spent countless hours squinting at reference photos, 
                trying to identify the perfect colors for our <strong className="text-white">oil paintings</strong> and 
                <strong className="text-white"> watercolor studies</strong>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Traditional <strong className="text-white">color wheels</strong> and basic mixing guides only take you so far. 
                Real-world painting requires understanding the subtle relationships between colors in actual photographs and 
                reference materials. That&apos;s where our <strong className="text-white">color analysis tools</strong> excel.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We&apos;ve made these tools free because we believe that access to quality <strong className="text-white">artist resources</strong> 
                shouldn&apos;t be limited by budget. Whether you&apos;re painting <strong className="text-white">plein air landscapes</strong>, 
                <strong className="text-white"> portrait studies</strong>, or <strong className="text-white">still life compositions</strong>, 
                our tools will help you paint with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Join the Artist Community</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">For Art Students</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Perfect for <strong className="text-white">art school students</strong> learning color theory, 
                value studies, and traditional painting techniques. Our tools complement your formal art education 
                with practical, hands-on color analysis.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Learn color relationships through real examples</li>
                <li>• Practice value studies with instant feedback</li>
                <li>• Understand temperature mapping in masterworks</li>
                <li>• Build confidence in color mixing</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">For Professional Artists</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Streamline your <strong className="text-white">professional workflow</strong> with accurate color analysis. 
                Save time on commissioned work by quickly identifying dominant colors and value structures 
                in client reference photos.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Speed up color matching for commissions</li>
                <li>• Analyze reference photos professionally</li>
                <li>• Export color palettes for studio reference</li>
                <li>• Improve painting accuracy and client satisfaction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Paintings?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start using our professional <strong className="text-white">color analysis tools</strong> today. 
            Upload your reference image and discover the color relationships that will take your art to the next level.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Analyzing Colors
            </Link>
            <Link 
              href="/blog" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Read Our Tutorials
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}