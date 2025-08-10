import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Color Theory Basics for Artists | Complete Guide to Color Mixing',
  description: 'Master color theory fundamentals for oil painting and watercolor. Learn about primary colors, color temperature, complementary colors, and professional color mixing techniques.',
  keywords: 'color theory, color mixing, primary colors, complementary colors, color temperature, warm cool colors, oil painting colors, watercolor mixing, color wheel, color harmony',
  openGraph: {
    title: 'Color Theory Basics | Complete Guide for Artists',
    description: 'Professional color theory guide for oil painters and watercolor artists. Master color mixing and color relationships.',
    type: 'article',
  },
}

export default function ColorTheoryPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">Color Palette</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Color Tool
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Tutorials
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-8 py-16">
        <header className="mb-12 text-center">
          <div className="mb-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Color Theory</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Color Theory Basics for Oil Painters and Watercolor Artists
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Master the fundamentals of <strong className="text-white">color relationships</strong>, 
            <strong className="text-white"> temperature</strong>, and <strong className="text-white">mixing techniques</strong> 
            essential for creating professional-quality paintings.
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 text-gray-400 text-sm">
            <span>📖 15 min read</span>
            <span>🎨 Beginner to Intermediate</span>
            <span>✅ Practical Exercises</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">What You&apos;ll Learn</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#primary-colors" className="hover:text-blue-400 transition-colors">1. Understanding Primary Colors</a></li>
            <li><a href="#color-wheel" className="hover:text-blue-400 transition-colors">2. The Artist&apos;s Color Wheel</a></li>
            <li><a href="#color-temperature" className="hover:text-blue-400 transition-colors">3. Warm vs Cool Colors</a></li>
            <li><a href="#complementary-colors" className="hover:text-blue-400 transition-colors">4. Complementary Color Relationships</a></li>
            <li><a href="#color-mixing" className="hover:text-blue-400 transition-colors">5. Professional Color Mixing Techniques</a></li>
            <li><a href="#practical-exercises" className="hover:text-blue-400 transition-colors">6. Hands-On Practice Exercises</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Primary Colors */}
          <section id="primary-colors" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Primary Colors</h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-3"></div>
                  <h3 className="text-white font-bold">Red</h3>
                  <p className="text-gray-300 text-sm">Cadmium Red, Alizarin Crimson</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-3"></div>
                  <h3 className="text-white font-bold">Blue</h3>
                  <p className="text-gray-300 text-sm">Ultramarine Blue, Cerulean Blue</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-3"></div>
                  <h3 className="text-white font-bold">Yellow</h3>
                  <p className="text-gray-300 text-sm">Cadmium Yellow, Lemon Yellow</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Primary colors</strong> are the foundation of all color mixing in traditional painting. 
              These colors cannot be created by mixing other colors together, making them essential for every artist&apos;s palette. 
              Understanding the properties of different primary pigments is crucial for <strong className="text-white">oil painting</strong> 
              and <strong className="text-white">watercolor work</strong>.
            </p>

            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-blue-300 font-bold mb-2">🎨 Pro Tip for Oil Painters</h4>
              <p className="text-gray-300">
                Use <strong className="text-white">Cadmium Red Medium</strong>, <strong className="text-white">Ultramarine Blue</strong>, 
                and <strong className="text-white">Cadmium Yellow Light</strong> as your primary triad. These pigments offer the best 
                mixing potential for creating vibrant secondary colors.
              </p>
            </div>
          </section>

          {/* Section 2: Color Wheel */}
          <section id="color-wheel" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Artist&apos;s Color Wheel</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <strong className="text-white">color wheel</strong> is more than just a theoretical concept—it&apos;s a practical tool 
              that helps artists understand color relationships and create <strong className="text-white">color harmony</strong> 
              in their paintings.
            </p>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Secondary Colors</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-3"></div>
                  <h4 className="text-white font-semibold">Orange</h4>
                  <p className="text-gray-300 text-sm">Red + Yellow</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3"></div>
                  <h4 className="text-white font-semibold">Green</h4>
                  <p className="text-gray-300 text-sm">Blue + Yellow</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-3"></div>
                  <h4 className="text-white font-semibold">Violet</h4>
                  <p className="text-gray-300 text-sm">Red + Blue</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Secondary colors</strong> are created by mixing two primary colors in equal proportions. 
              However, the exact hue you achieve depends on which specific primary pigments you use. This is why understanding 
              your paint properties is crucial for <strong className="text-white">successful color mixing</strong>.
            </p>
          </section>

          {/* Section 3: Color Temperature */}
          <section id="color-temperature" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Color Temperature</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-red-300 font-bold text-xl mb-4">🔥 Warm Colors</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Reds</strong> - Create energy and advance forward</li>
                  <li>• <strong className="text-white">Oranges</strong> - Suggest warmth and light</li>
                  <li>• <strong className="text-white">Yellows</strong> - Evoke sunshine and happiness</li>
                  <li>• <strong className="text-white">Warm violets</strong> - Reds with hints of purple</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-blue-300 font-bold text-xl mb-4">❄️ Cool Colors</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Blues</strong> - Suggest depth and recession</li>
                  <li>• <strong className="text-white">Greens</strong> - Evoke nature and tranquility</li>
                  <li>• <strong className="text-white">Cool violets</strong> - Blues with purple hints</li>
                  <li>• <strong className="text-white">Blue-grays</strong> - Perfect for shadows</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Color temperature</strong> is one of the most powerful tools in an artist&apos;s arsenal. 
              Understanding how to use warm and cool colors creates <strong className="text-white">spatial depth</strong>, 
              <strong className="text-white"> atmospheric perspective</strong>, and <strong className="text-white">emotional impact</strong> 
              in your paintings.
            </p>

            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-green-300 font-bold mb-2">🌡️ Temperature in Portrait Painting</h4>
              <p className="text-gray-300">
                In <strong className="text-white">portrait painting</strong>, warm colors typically appear in areas hit by light 
                (forehead, nose, cheeks), while cool colors dominate shadow areas. This temperature shift creates the illusion 
                of <strong className="text-white">three-dimensional form</strong>.
              </p>
            </div>
          </section>

          {/* Section 4: Complementary Colors */}
          <section id="complementary-colors" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Complementary Color Relationships</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Complementary colors</strong> sit opposite each other on the color wheel and create 
              the strongest contrast possible. When placed next to each other, they make each other appear more vibrant. 
              When mixed together, they create neutral grays and browns.
            </p>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Primary Complementary Pairs</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Red</span>
                  <span className="text-gray-500">complements</span>
                  <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Green</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Blue</span>
                  <span className="text-gray-500">complements</span>
                  <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Orange</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Yellow</span>
                  <span className="text-gray-500">complements</span>
                  <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Violet</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-purple-300 font-bold mb-2">🎯 Using Complements for Shadow Colors</h4>
              <p className="text-gray-300">
                Instead of using black for shadows, try mixing a color with its complement. For example, add a touch of 
                <strong className="text-white"> green to red skin tones</strong> in shadow areas, or mix 
                <strong className="text-white"> orange into blue</strong> for warm, natural-looking shadow colors.
              </p>
            </div>
          </section>

          {/* Section 5: Color Mixing */}
          <section id="color-mixing" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Professional Color Mixing Techniques</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Successful <strong className="text-white">color mixing</strong> requires both theoretical knowledge and practical experience. 
              Here are professional techniques used by working artists to achieve clean, vibrant mixtures.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-white font-bold mb-3">1. The Limited Palette Approach</h3>
                <p className="text-gray-300 mb-4">
                  Start with just <strong className="text-white">three primary colors plus white</strong>. This forces you to 
                  understand color relationships and prevents muddy paintings from overmixing.
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-blue-300 font-semibold">Recommended Limited Palette:</p>
                  <p className="text-gray-300 text-sm">Cadmium Red Medium • Ultramarine Blue • Cadmium Yellow Light • Titanium White</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-white font-bold mb-3">2. Clean Mixing Techniques</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Clean brush between colors</strong> - Even small amounts of contamination affect mixtures</li>
                  <li>• <strong className="text-white">Mix colors gradually</strong> - Add small amounts of the stronger color to the weaker</li>
                  <li>• <strong className="text-white">Test mixtures first</strong> - Always test on a separate area before applying</li>
                  <li>• <strong className="text-white">Mix enough paint</strong> - Running out mid-painting ruins color consistency</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-white font-bold mb-3">3. Optical vs Physical Mixing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-300 font-semibold mb-2">Physical Mixing</h4>
                    <p className="text-gray-300 text-sm">Colors blended on the palette before application. Gives precise control over hue and intensity.</p>
                  </div>
                  <div>
                    <h4 className="text-green-300 font-semibold mb-2">Optical Mixing</h4>
                    <p className="text-gray-300 text-sm">Colors applied separately but appear mixed when viewed from a distance. Creates vibrant, luminous effects.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Practical Exercises */}
          <section id="practical-exercises" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Hands-On Practice Exercises</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-white font-bold text-xl mb-4">Exercise 1: Color Wheel Creation</h3>
                <p className="text-gray-300 mb-4">
                  Create your own <strong className="text-white">12-color wheel</strong> using only primary colors plus white. 
                  This exercise teaches you exactly how your specific pigments behave.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-blue-300 font-semibold mb-2">Materials needed:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Canvas board or heavy paper</li>
                    <li>• Primary colors (Red, Blue, Yellow)</li>
                    <li>• Titanium White</li>
                    <li>• Clean brushes and palette knife</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-white font-bold text-xl mb-4">Exercise 2: Temperature Studies</h3>
                <p className="text-gray-300 mb-4">
                  Paint the same simple subject (like an apple) twice—once using only <strong className="text-white">warm colors</strong> 
                  and once using only <strong className="text-white">cool colors</strong>.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-green-300 font-semibold mb-2">Learning objectives:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Understand how temperature affects mood</li>
                    <li>• Practice creating form with limited palettes</li>
                    <li>• See how warm colors advance, cool colors recede</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-white font-bold text-xl mb-4">Exercise 3: Complementary Shadow Mixing</h3>
                <p className="text-gray-300 mb-4">
                  Set up a simple still life with colored objects. Practice mixing <strong className="text-white">shadow colors</strong> 
                  using complementary relationships instead of adding black.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-orange-300 font-semibold mb-2">Key concepts:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Shadows have color, not just darkness</li>
                    <li>• Complementary colors create natural-looking neutrals</li>
                    <li>• Temperature shifts occur from light to shadow</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-700 pt-12 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Practice Color Theory?</h3>
            <p className="text-gray-300 mb-6">
              Use our free <strong className="text-white">color analysis tools</strong> to analyze reference images and 
              practice identifying color relationships in real photographs.
            </p>
            <Link 
              href="/" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Try Color Analysis Tool
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-700">
            <div>
              <h4 className="text-white font-bold mb-3">Related Tutorials</h4>
              <ul className="space-y-2">
                <li><a href="/tutorials/oil-painting" className="text-blue-400 hover:text-blue-300 transition-colors">Oil Painting Techniques for Beginners</a></li>
                <li><a href="/tutorials/value-studies" className="text-blue-400 hover:text-blue-300 transition-colors">Mastering Value Studies</a></li>
                <li><a href="/tutorials/watercolor-mixing" className="text-blue-400 hover:text-blue-300 transition-colors">Watercolor Color Mixing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Share This Tutorial</h4>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}