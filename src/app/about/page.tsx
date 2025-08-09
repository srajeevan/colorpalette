import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Artist Color Tools | Free Color Analysis Platform for Painters',
  description: 'Learn about our free color palette generator and value map analyzer. A helpful tool for oil painters, watercolor artists, and traditional painters worldwide.',
  keywords: 'artist color tools, color palette generator, value map analyzer, oil painting tools, watercolor painting, traditional art, color theory, paint mixing, artist reference tools',
  openGraph: {
    title: 'About Artist Color Tools | Professional Color Analysis Platform',
    description: 'Free color analysis tools for artists. High-quality color palette generator and value mapping.',
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
              A free <strong className="text-white">color analysis platform</strong> to help artists create better paintings. 
              Useful for <strong className="text-white">oil painters</strong>, <strong className="text-white">watercolor artists</strong>, 
              and <strong className="text-white">traditional painters</strong> who want accurate color analysis tools.
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
                I believe every artist deserves access to quality <strong className="text-white">color analysis tools</strong> 
                without barriers. This platform provides <strong className="text-white">color palette generation</strong> 
                and <strong className="text-white">value mapping</strong> tools that can help with your art. If you find them useful, 
                consider supporting the project to keep it running.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you&apos;re a beginner learning <strong className="text-white">color theory</strong> or an experienced artist 
                working on personal projects, these tools can help you understand color relationships, value structures, 
                and temperature variations in your reference images.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white font-semibold">Free to Use</span>
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
                  <span className="text-white font-semibold">Built by an Artist</span>
                </div>
              </div>
              
              {/* Buy Me a Coffee Support */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-4">
                  If these tools help your art, consider supporting their development:
                </p>
                <a 
                  href="https://buymeacoffee.com/srajeevan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://buymeacoffee.com/srajeevan', '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                >
                  <span>☕</span>
                  <span>Buy me a coffee</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Artist Tools</h2>
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
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why I Built This</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As an <strong className="text-white">artist</strong> myself, I understand the challenges 
                of color mixing, value studies, and reference analysis. I&apos;ve spent countless hours squinting at reference photos, 
                trying to identify the perfect colors for <strong className="text-white">oil paintings</strong> and 
                <strong className="text-white"> watercolor studies</strong>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Traditional <strong className="text-white">color wheels</strong> and basic mixing guides only take you so far. 
                Real-world painting requires understanding the subtle relationships between colors in actual photographs and 
                reference materials. That&apos;s where these <strong className="text-white">color analysis tools</strong> can help.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;ve made these tools free because I believe that access to quality <strong className="text-white">artist resources</strong> 
                shouldn&apos;t be limited by budget. Whether you&apos;re painting <strong className="text-white">landscapes</strong>, 
                <strong className="text-white"> portraits</strong>, or <strong className="text-white">still life compositions</strong>, 
                these tools can help you paint with more confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Who Can Use This Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Who Can Use These Tools</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">For Art Students & Beginners</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Great for <strong className="text-white">art students</strong> learning color theory, 
                value studies, and traditional painting techniques. These tools can complement your learning 
                with practical, hands-on color analysis.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Learn color relationships through real examples</li>
                <li>• Practice value studies with instant feedback</li>
                <li>• Understand temperature mapping in reference images</li>
                <li>• Build confidence in color mixing</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">For Hobbyist & Serious Artists</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Useful for artists working on <strong className="text-white">personal projects</strong> who want accurate color analysis. 
                Save time by quickly identifying dominant colors and value structures 
                in your reference photos.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Speed up color matching process</li>
                <li>• Analyze reference photos effectively</li>
                <li>• Export color palettes for future reference</li>
                <li>• Improve painting accuracy and understanding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Paintings?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start using these free <strong className="text-white">color analysis tools</strong> today. 
            Upload your reference image and discover the color relationships that can help improve your art.
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