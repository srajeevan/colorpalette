import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portrait Painting Skin Tones Guide | Color Mixing for Realistic Portraits',
  description: 'Master realistic skin tone color mixing for portrait painting. Learn flesh tone recipes, undertones, lighting effects, and professional techniques for oil and acrylic portraits.',
  keywords: 'portrait painting, skin tones, flesh colors, color mixing portraits, skin tone painting, portrait color theory, flesh tone recipes, skin undertones, portrait lighting',
  openGraph: {
    title: 'Portrait Painting Skin Tones | Professional Color Guide',
    description: 'Complete guide to mixing realistic skin tones for portrait painting. Master flesh colors and lighting effects.',
    type: 'article',
  },
}

export default function PortraitPaintingPage() {
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
            <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Portrait Techniques</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Portrait Painting Skin Tones: Mastering Realistic Flesh Colors
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Master the art of mixing <strong className="text-white">realistic skin tones</strong> for portrait painting. 
            Learn professional <strong className="text-white">flesh color recipes</strong>, understand 
            <strong className="text-white"> skin undertones</strong>, and create lifelike portraits with proper color theory.
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 text-gray-400 text-sm">
            <span>📖 18 min read</span>
            <span>🎨 Portrait Focus</span>
            <span>👤 Skin Tone Mastery</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">Portrait Color Mastery</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#skin-tone-fundamentals" className="hover:text-blue-400 transition-colors">1. Skin Tone Color Theory</a></li>
            <li><a href="#flesh-color-recipes" className="hover:text-blue-400 transition-colors">2. Professional Flesh Color Recipes</a></li>
            <li><a href="#undertones-analysis" className="hover:text-blue-400 transition-colors">3. Understanding Skin Undertones</a></li>
            <li><a href="#lighting-effects" className="hover:text-blue-400 transition-colors">4. Lighting & Temperature Effects</a></li>
            <li><a href="#ethnic-diversity" className="hover:text-blue-400 transition-colors">5. Diverse Skin Tone Approaches</a></li>
            <li><a href="#portrait-anatomy" className="hover:text-blue-400 transition-colors">6. Facial Color Mapping</a></li>
            <li><a href="#practical-techniques" className="hover:text-blue-400 transition-colors">7. Advanced Portrait Techniques</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Skin Tone Fundamentals */}
          <section id="skin-tone-fundamentals" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Skin Tone Color Theory</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Creating convincing <strong className="text-white">skin tones</strong> in portrait painting requires understanding 
              that flesh colors are complex mixtures involving multiple hues, values, and temperatures. 
              Unlike simple color mixing, <strong className="text-white">realistic flesh colors</strong> contain subtle 
              variations that bring portraits to life.
            </p>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">The Science of Skin Color</h3>
              
              <p className="text-gray-300 mb-6">
                Human skin contains multiple layers with different optical properties. Understanding these layers 
                helps you create more <strong className="text-white">realistic skin tones</strong> in your portrait painting.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-b from-red-300 to-red-400"></div>
                  <h4 className="text-red-400 font-semibold">Blood Flow</h4>
                  <p className="text-gray-300 text-sm">Creates warm red undertones, especially visible in areas with thin skin</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-b from-yellow-300 to-orange-300"></div>
                  <h4 className="text-yellow-400 font-semibold">Melanin</h4>
                  <p className="text-gray-300 text-sm">Determines base skin color ranging from pale yellow to deep brown</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-b from-blue-200 to-blue-300"></div>
                  <h4 className="text-blue-400 font-semibold">Subsurface Scattering</h4>
                  <p className="text-gray-300 text-sm">Light bouncing beneath skin surface creates subtle blue-gray tones</p>
                </div>
              </div>

              <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg p-6">
                <h4 className="text-amber-300 font-bold mb-2">🎨 Key Principle for Portrait Painting</h4>
                <p className="text-gray-300">
                  Never mix <strong className="text-white">skin tones</strong> with a single formula. Real flesh colors contain 
                  multiple color temperatures and subtle hue variations that change based on lighting, blood flow, 
                  and individual characteristics. Use <strong className="text-white">color analysis</strong> tools to study 
                  reference photos and identify these subtle variations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-orange-300 font-bold text-xl mb-6">🌡️ Temperature Relationships in Skin</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h4 className="text-red-400 font-semibold mb-3">🔥 Warm Areas</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• <strong className="text-white">Forehead</strong> - Direct light, blood vessels close to surface</li>
                      <li>• <strong className="text-white">Nose bridge</strong> - Prominent, catches direct light</li>
                      <li>• <strong className="text-white">Cheekbones</strong> - High points that receive most light</li>
                      <li>• <strong className="text-white">Chin</strong> - Forward-facing, well-lit areas</li>
                      <li>• <strong className="text-white">Ear edges</strong> - Thin skin with visible blood flow</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-800/20 rounded">
                      <p className="text-red-200 text-xs">
                        <strong>Color bias:</strong> Add yellow, orange, and warm reds to base <strong className="text-white">flesh colors</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-blue-400 font-semibold mb-3">❄️ Cool Areas</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• <strong className="text-white">Eye sockets</strong> - Receded areas in shadow</li>
                      <li>• <strong className="text-white">Under nose</strong> - Natural shadow area</li>
                      <li>• <strong className="text-white">Jaw line shadows</strong> - Areas turned away from light</li>
                      <li>• <strong className="text-white">Neck shadows</strong> - Reflected cool light from surroundings</li>
                      <li>• <strong className="text-white">Temple areas</strong> - Often in partial shadow</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-800/20 rounded">
                      <p className="text-blue-200 text-xs">
                        <strong>Color bias:</strong> Add blue, purple, and cool grays to base <strong className="text-white">skin tones</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Flesh Color Recipes */}
          <section id="flesh-color-recipes" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Professional Flesh Color Recipes</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              These time-tested <strong className="text-white">flesh color recipes</strong> provide reliable starting points 
              for <strong className="text-white">portrait painting</strong>. Remember to adjust these base mixtures 
              according to individual characteristics, lighting conditions, and desired mood.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Basic Flesh Tone Foundations</h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-lg p-6 border border-yellow-500/20">
                    <h4 className="text-yellow-300 font-bold text-lg mb-4">🎨 The Zorn Palette Method</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Based on Anders Zorn&apos;s limited palette approach, this method uses only four colors to create 
                      a full range of <strong className="text-white">realistic skin tones</strong>.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-white font-semibold mb-3">Zorn Palette Colors:</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded" style={{backgroundColor: '#8B4513'}}></div>
                            <span className="text-gray-300 text-sm"><strong className="text-white">Burnt Sienna</strong> - Warm base</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded" style={{backgroundColor: '#FFD700'}}></div>
                            <span className="text-gray-300 text-sm"><strong className="text-white">Cadmium Yellow Light</strong> - Warmth & light</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded" style={{backgroundColor: '#FF0000'}}></div>
                            <span className="text-gray-300 text-sm"><strong className="text-white">Cadmium Red Light</strong> - Blood tones</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded border border-gray-600" style={{backgroundColor: '#FFFFFF'}}></div>
                            <span className="text-gray-300 text-sm"><strong className="text-white">Titanium White</strong> - Mixing & highlights</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-3">Basic Mixing Ratios:</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Base flesh:</strong> 3 parts Burnt Sienna + 1 part Yellow + touch Red</li>
                          <li>• <strong className="text-white">Light flesh:</strong> Base + White to desired value</li>
                          <li>• <strong className="text-white">Shadow flesh:</strong> Base + tiny amount of Red</li>
                          <li>• <strong className="text-white">Cool shadows:</strong> Base + White (creates gray-purple)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-600/10 to-pink-600/10 rounded-lg p-6 border border-red-500/20">
                    <h4 className="text-red-300 font-bold text-lg mb-4">🔴 Extended Palette Approach</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      For more complex <strong className="text-white">portrait painting</strong> projects, an extended palette 
                      offers greater flexibility and more nuanced <strong className="text-white">skin tone</strong> possibilities.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="text-red-300 font-semibold mb-2">Warm Colors</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Cadmium Red Light</li>
                          <li>• Cadmium Yellow Light</li>
                          <li>• Yellow Ochre</li>
                          <li>• Burnt Sienna</li>
                          <li>• Raw Sienna</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-2">Cool Colors</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Ultramarine Blue</li>
                          <li>• Ivory Black</li>
                          <li>• Raw Umber</li>
                          <li>• Payne&apos;s Gray</li>
                          <li>• Alizarin Crimson</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-2">Mixing Tips</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Start with warm base</li>
                          <li>• Add cool colors sparingly</li>
                          <li>• Test on neutral gray</li>
                          <li>• Match temperature to light</li>
                          <li>• Keep colors relatively muted</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Specific Flesh Tone Recipes</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Light Caucasian Skin Tones</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-pink-300 font-semibold mb-3">Basic Light Flesh</h5>
                        <div className="bg-pink-900/20 border border-pink-500/30 rounded p-4">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• 3 parts Titanium White</li>
                            <li>• 1 part Yellow Ochre</li>
                            <li>• Small amount Cadmium Red Light</li>
                            <li>• Tiny touch Raw Umber</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-3">Light Skin Shadows</h5>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded p-4">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Base light flesh mixture</li>
                            <li>• Add Raw Umber for depth</li>
                            <li>• Touch of Ultramarine Blue</li>
                            <li>• Small amount Alizarin Crimson</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Medium Skin Tones</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-orange-300 font-semibold mb-3">Warm Medium Flesh</h5>
                        <div className="bg-orange-900/20 border border-orange-500/30 rounded p-4">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• 2 parts Yellow Ochre</li>
                            <li>• 1 part Burnt Sienna</li>
                            <li>• 1 part Cadmium Red Light</li>
                            <li>• White to desired lightness</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-purple-300 font-semibold mb-3">Medium Skin Shadows</h5>
                        <div className="bg-purple-900/20 border border-purple-500/30 rounded p-4">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Base medium flesh mixture</li>
                            <li>• Add Burnt Umber for depth</li>
                            <li>• Touch of Raw Umber</li>
                            <li>• Small amount Ultramarine Blue</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Deep Skin Tones</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-amber-300 font-semibold mb-3">Rich Deep Flesh</h5>
                        <div className="bg-amber-900/20 border border-amber-500/30 rounded p-4">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• 2 parts Burnt Umber</li>
                            <li>• 1 part Raw Sienna</li>
                            <li>• 1 part Cadmium Red Medium</li>
                            <li>• Touch of Yellow Ochre</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-indigo-300 font-semibold mb-3">Deep Skin Highlights</h5>
                        <div className="bg-indigo-900/20 border border-indigo-500/30 rounded p-4">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Base deep flesh mixture</li>
                            <li>• Add Yellow Ochre for warmth</li>
                            <li>• Small amount Cadmium Yellow</li>
                            <li>• Touch of White (use sparingly)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Undertones Analysis */}
          <section id="undertones-analysis" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding and Painting Skin Undertones</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Skin undertones</strong> are the subtle colors that influence the overall 
              appearance of flesh tones. Mastering undertones is crucial for creating convincing 
              <strong className="text-white"> portrait painting</strong> that captures individual characteristics and 
              responds correctly to different lighting conditions.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-pink-600/10 to-rose-600/10 rounded-xl p-8 border border-pink-500/20">
                <h3 className="text-pink-300 font-bold text-xl mb-6">🌈 The Three Primary Undertones</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Identifying Undertones in Reference Photos</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Use digital <strong className="text-white">color analysis</strong> tools to sample skin colors from 
                      reference photos. Look at multiple areas to identify the consistent underlying color bias.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300"></div>
                        <h5 className="text-yellow-400 font-semibold">🟡 Warm Undertones</h5>
                        <p className="text-gray-300 text-sm mb-2">Yellow, peach, or golden base colors</p>
                        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3">
                          <p className="text-yellow-200 text-xs">
                            <strong>Mixing approach:</strong> Base flesh colors on yellow ochre, add warm reds and oranges
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-pink-300 to-red-300"></div>
                        <h5 className="text-pink-400 font-semibold">🔴 Cool Undertones</h5>
                        <p className="text-gray-300 text-sm mb-2">Pink, red, or blue base colors</p>
                        <div className="bg-pink-900/20 border border-pink-500/30 rounded p-3">
                          <p className="text-pink-200 text-xs">
                            <strong>Mixing approach:</strong> Add alizarin crimson, cool reds, and subtle blues to flesh base
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-300 to-yellow-300"></div>
                        <h5 className="text-green-400 font-semibold">🟢 Neutral Undertones</h5>
                        <p className="text-gray-300 text-sm mb-2">Balanced mix of warm and cool</p>
                        <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                          <p className="text-green-200 text-xs">
                            <strong>Mixing approach:</strong> Balance warm and cool colors, use earth tones as base
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Undertone Mixing Strategies</h4>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="text-yellow-300 font-semibold">For Warm Undertoned Skin</h5>
                        <p className="text-gray-300 text-sm">
                          Start with <strong className="text-white">yellow ochre</strong> and <strong className="text-white">raw sienna</strong> 
                          as your base. Add <strong className="text-white">cadmium red light</strong> for blood tones and 
                          <strong className="text-white"> cadmium yellow</strong> for the warmest highlight areas.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h5 className="text-pink-300 font-semibold">For Cool Undertoned Skin</h5>
                        <p className="text-gray-300 text-sm">
                          Build from a base of <strong className="text-white">raw umber</strong> mixed with 
                          <strong className="text-white"> titanium white</strong>. Add <strong className="text-white">alizarin crimson</strong> 
                          and small amounts of <strong className="text-white">ultramarine blue</strong> for the pink-blue cast.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="text-green-300 font-semibold">For Neutral Undertoned Skin</h5>
                        <p className="text-gray-300 text-sm">
                          Create a balanced base using <strong className="text-white">burnt sienna</strong>, 
                          <strong className="text-white"> yellow ochre</strong>, and small amounts of both warm and cool colors. 
                          Adjust temperature based on lighting conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Cultural and Individual Variations</h3>
                
                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Skin undertones</strong> vary significantly across different ethnicities and 
                  individuals. Understanding these variations helps create more authentic and respectful 
                  <strong className="text-white"> portrait paintings</strong>.
                </p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-3">Common Undertone Patterns</h4>
                      <div className="space-y-3">
                        <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
                          <h5 className="text-orange-300 font-semibold text-sm">Mediterranean/Hispanic</h5>
                          <p className="text-gray-300 text-xs">Often golden-yellow undertones with olive influences</p>
                        </div>
                        
                        <div className="bg-red-900/20 border border-red-500/30 rounded p-3">
                          <h5 className="text-red-300 font-semibold text-sm">East Asian</h5>
                          <p className="text-gray-300 text-xs">Typically yellow-based with peachy or neutral variations</p>
                        </div>
                        
                        <div className="bg-amber-900/20 border border-amber-500/30 rounded p-3">
                          <h5 className="text-amber-300 font-semibold text-sm">African/African-American</h5>
                          <p className="text-gray-300 text-xs">Wide range from red-brown to yellow-brown to cool-brown</p>
                        </div>
                        
                        <div className="bg-pink-900/20 border border-pink-500/30 rounded p-3">
                          <h5 className="text-pink-300 font-semibold text-sm">Northern European</h5>
                          <p className="text-gray-300 text-xs">Often pink or red undertones, can have blue influences</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-3">Individual Assessment</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• <strong className="text-white">Never assume</strong> undertones based solely on ethnicity</li>
                        <li>• <strong className="text-white">Observe carefully</strong> using reference photos in neutral lighting</li>
                        <li>• <strong className="text-white">Look at multiple areas</strong> - neck, inner arm, forehead</li>
                        <li>• <strong className="text-white">Consider age factors</strong> - undertones can shift with age</li>
                        <li>• <strong className="text-white">Account for health</strong> - illness can affect skin color</li>
                        <li>• <strong className="text-white">Use digital tools</strong> to analyze and compare color samples</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
                    <h4 className="text-purple-300 font-bold mb-2">🔍 Digital Color Analysis for Undertones</h4>
                    <p className="text-gray-300">
                      Use <strong className="text-white">color picker</strong> tools to sample skin colors from different 
                      areas of your reference photo. Compare the hue values to identify consistent color biases. 
                      Look for patterns in the HSL values—warm undertones will show higher values in the yellow-red 
                      range, while cool undertones lean toward the blue-purple range.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Lighting Effects */}
          <section id="lighting-effects" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Lighting & Temperature Effects on Skin</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Different lighting conditions dramatically affect how <strong className="text-white">skin tones</strong> appear 
              in portrait painting. Understanding these effects helps you create consistent, believable flesh colors 
              that respond appropriately to their environment.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-xl p-8 border border-yellow-500/20">
                <h3 className="text-yellow-300 font-bold text-xl mb-6">☀️ Natural Lighting Conditions</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Golden Hour Portrait Lighting</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Warm, low-angle sunlight creates dramatic temperature contrasts in <strong className="text-white">skin tones</strong>. 
                      This is one of the most flattering lighting conditions for portrait painting.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-yellow-300 font-semibold mb-2">🔥 Light Side Effects</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Enhanced warm undertones</strong> - yellows and oranges dominate</li>
                          <li>• <strong className="text-white">Glowing highlights</strong> - add extra yellow and white to flesh tones</li>
                          <li>• <strong className="text-white">Rim lighting</strong> - warm, bright edges where light catches form</li>
                          <li>• <strong className="text-white">Saturated colors</strong> - skin appears more vibrant and alive</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-2">❄️ Shadow Side Effects</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Cool reflected light</strong> - blues and purples in shadows</li>
                          <li>• <strong className="text-white">Atmospheric perspective</strong> - cooler, grayer tones</li>
                          <li>• <strong className="text-white">Reduced saturation</strong> - colors appear more muted</li>
                          <li>• <strong className="text-white">Color temperature shift</strong> - warm to cool transition</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded">
                      <h6 className="text-yellow-200 font-semibold mb-2">Mixing Strategy for Golden Hour</h6>
                      <p className="text-gray-300 text-sm">
                        Start with your standard <strong className="text-white">flesh color recipe</strong>, then push the 
                        lit areas toward cadmium yellow and orange. For shadows, add ultramarine blue and alizarin 
                        crimson to create complementary purple-grays.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Overcast Sky Lighting</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Soft, even lighting from overcast conditions creates subtle, naturally muted 
                      <strong className="text-white"> skin tones</strong> with gentle transitions between light and shadow.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h5 className="text-cyan-300 font-semibold">Overall Cool Cast</h5>
                        <p className="text-gray-300 text-sm">
                          Add small amounts of ultramarine blue or payne&apos;s gray to your entire <strong className="text-white">flesh palette</strong>. 
                          This creates the overall cool feeling of overcast lighting.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="text-green-300 font-semibold">Reduced Contrast</h5>
                        <p className="text-gray-300 text-sm">
                          Compress your value range—shadows aren&apos;t as dark, highlights aren&apos;t as bright. 
                          Mix intermediate tones between your lightest and darkest <strong className="text-white">skin colors</strong>.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h5 className="text-teal-300 font-semibold">Warm Reflected Light</h5>
                        <p className="text-gray-300 text-sm">
                          Despite the overall cool cast, some shadows may pick up warm reflected light from 
                          surroundings—clothing, walls, or natural elements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-purple-300 font-bold text-xl mb-6">💡 Artificial Lighting Effects</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Studio Portrait Lighting</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-purple-300 font-semibold mb-3">Tungsten/Warm LED (3000K)</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Overall warm cast</strong> - enhance yellow/orange in all flesh tones</li>
                          <li>• <strong className="text-white">Rich shadows</strong> - warm browns and deep oranges</li>
                          <li>• <strong className="text-white">Golden highlights</strong> - add extra yellow to light areas</li>
                          <li>• <strong className="text-white">Enhanced warm undertones</strong> - yellow-based skin glows</li>
                        </ul>
                        
                        <div className="mt-3 p-3 bg-orange-900/20 rounded">
                          <p className="text-orange-200 text-xs">
                            <strong>Mixing tip:</strong> Add raw sienna and cadmium yellow to your base flesh mixtures
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-3">Daylight LED/Flash (5500K+)</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Neutral to cool cast</strong> - more accurate color representation</li>
                          <li>• <strong className="text-white">Clean highlights</strong> - use titanium white with minimal tinting</li>
                          <li>• <strong className="text-white">True skin tones</strong> - undertones appear natural</li>
                          <li>• <strong className="text-white">Cool shadows</strong> - subtle blue-gray influences</li>
                        </ul>
                        
                        <div className="mt-3 p-3 bg-blue-900/20 rounded">
                          <p className="text-blue-200 text-xs">
                            <strong>Mixing tip:</strong> Use your standard flesh recipes with minimal temperature adjustment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Environmental Color Influence</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      <strong className="text-white">Skin tones</strong> are dramatically affected by surrounding colors 
                      through reflected light. This is crucial for creating believable <strong className="text-white">portrait paintings</strong> 
                      that feel integrated with their environment.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">🌿</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Green Environment (Foliage, Green Walls)</h5>
                          <p className="text-gray-300 text-sm">
                            Adds subtle green cast to shadows and mid-tones. Mix tiny amounts of viridian or 
                            sap green into shadow flesh tones. This can make skin appear sickly if overdone.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">🌊</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Blue Environment (Sky, Water)</h5>
                          <p className="text-gray-300 text-sm">
                            Creates cool, refreshing feel in shadows. Add ultramarine blue or cerulean blue 
                            to shadow mixtures. Enhances the contrast with warm lit areas.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">🧱</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Warm Environment (Brick, Wood, Sand)</h5>
                          <p className="text-gray-300 text-sm">
                            Reflects warm light into shadows, reducing overall contrast. Add burnt sienna 
                            or raw sienna to shadow areas for natural, harmonious results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Ethnic Diversity */}
          <section id="ethnic-diversity" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Diverse Skin Tone Approaches</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Creating authentic <strong className="text-white">portrait paintings</strong> of people from diverse backgrounds 
              requires understanding the wide range of <strong className="text-white">skin tones</strong> and color 
              characteristics found across different ethnicities and individuals. Respectful, accurate representation 
              is both an artistic and ethical responsibility.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-xl p-8 border border-amber-500/20">
                <h3 className="text-amber-300 font-bold text-xl mb-6">🌍 Understanding Global Skin Tone Diversity</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Moving Beyond Stereotypes</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Avoid assumptions based on ethnicity or geographic origin. <strong className="text-white">Skin tones</strong> 
                      vary enormously within any population group, and individual characteristics always take precedence 
                      over generalized patterns.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-amber-300 font-semibold mb-2">Key Principles</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Observe individuals</strong> - every person is unique</li>
                          <li>• <strong className="text-white">Use reference photos</strong> - don&apos;t rely on memory</li>
                          <li>• <strong className="text-white">Study carefully</strong> - use digital color analysis tools</li>
                          <li>• <strong className="text-white">Practice regularly</strong> - build experience with diverse subjects</li>
                          <li>• <strong className="text-white">Seek feedback</strong> - ask for input from diverse communities</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-orange-300 font-semibold mb-2">Common Mistakes to Avoid</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-red-400">Generic formulas</strong> - one-size-fits-all color recipes</li>
                          <li>• <strong className="text-red-400">Muddy mixing</strong> - overcomplicating color mixtures</li>
                          <li>• <strong className="text-red-400">Ignoring undertones</strong> - missing subtle color biases</li>
                          <li>• <strong className="text-red-400">Poor lighting analysis</strong> - not considering environmental effects</li>
                          <li>• <strong className="text-red-400">Cultural insensitivity</strong> - stereotypical representation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-xl p-8 border border-teal-500/20">
                <h3 className="text-teal-300 font-bold text-xl mb-6">🎨 Advanced Mixing Approaches</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Rich, Deep Skin Tones</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Deep <strong className="text-white">skin tones</strong> require sophisticated color mixing to avoid 
                      muddy, lifeless results. Focus on maintaining color temperature relationships and luminosity.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h5 className="text-teal-300 font-semibold">Foundation Colors</h5>
                        <p className="text-gray-300 text-sm mb-2">
                          Build from transparent base colors: <strong className="text-white">burnt umber</strong>, 
                          <strong className="text-white"> raw umber</strong>, <strong className="text-white">burnt sienna</strong>, 
                          and <strong className="text-white">raw sienna</strong>. These maintain richness better than opaque mixtures.
                        </p>
                        <div className="bg-teal-900/20 rounded p-2">
                          <p className="text-teal-200 text-xs">
                            Avoid black - it deadens skin tones. Use dark transparent colors instead.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h5 className="text-cyan-300 font-semibold">Warm Accents</h5>
                        <p className="text-gray-300 text-sm mb-2">
                          Add warmth with <strong className="text-white">cadmium red deep</strong>, 
                          <strong className="text-white"> quinacridone gold</strong>, or <strong className="text-white">transparent red oxide</strong>. 
                          These colors enhance natural warmth without muddying.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="text-blue-300 font-semibold">Highlight Strategy</h5>
                        <p className="text-gray-300 text-sm">
                          For highlights, add <strong className="text-white">cadmium yellow light</strong> or 
                          <strong className="text-white"> naples yellow</strong> rather than white alone. This maintains 
                          the warm, living quality of skin.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Olive and Mediterranean Tones</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Olive-toned skin requires balancing warm and cool influences, often with subtle green undertones 
                      that distinguish it from purely warm or cool <strong className="text-white">skin types</strong>.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-green-300 font-semibold mb-2">Base Mixture</h5>
                        <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• 2 parts Yellow Ochre</li>
                            <li>• 1 part Raw Umber</li>
                            <li>• Small amount Burnt Sienna</li>
                            <li>• Tiny touch of Viridian or Sap Green</li>
                            <li>• Titanium White to desired value</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-yellow-300 font-semibold mb-2">Adjustment Tips</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Too green?</strong> Add tiny amount of cadmium red</li>
                          <li>• <strong className="text-white">Too warm?</strong> Add more raw umber</li>
                          <li>• <strong className="text-white">Too cool?</strong> Add more yellow ochre</li>
                          <li>• <strong className="text-white">Need richness?</strong> Add burnt sienna</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Asian Skin Tone Variations</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Asian <strong className="text-white">skin tones</strong> encompass an enormous range from very pale 
                      to deep brown, with various undertone characteristics. Avoid oversimplified approaches.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="text-yellow-300 font-semibold">East Asian Pale Tones</h5>
                        <p className="text-gray-300 text-sm">
                          Often have yellow undertones with peach influences. Base on <strong className="text-white">naples yellow</strong> 
                          or <strong className="text-white">yellow ochre</strong> mixed with white, add tiny amounts of 
                          <strong className="text-white"> cadmium red light</strong> for warmth.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h5 className="text-orange-300 font-semibold">Southeast Asian Golden Tones</h5>
                        <p className="text-gray-300 text-sm">
                          Rich golden undertones with warm brown influences. Mix <strong className="text-white">raw sienna</strong>, 
                          <strong className="text-white"> cadmium yellow medium</strong>, and <strong className="text-white">burnt sienna</strong> 
                          for the base, adjust with white and red as needed.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="text-red-300 font-semibold">South Asian Rich Tones</h5>
                        <p className="text-gray-300 text-sm">
                          Wide range from golden to deep brown with warm undertones. Use <strong className="text-white">burnt sienna</strong> 
                          and <strong className="text-white">raw sienna</strong> as foundation colors, vary with yellow ochre, 
                          red, and umber based on individual characteristics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Digital Color Analysis for Diverse Subjects</h3>
                
                <p className="text-gray-300 mb-6">
                  Use <strong className="text-white">digital color tools</strong> to analyze <strong className="text-white">skin tones</strong> 
                  objectively. This helps overcome unconscious biases and creates more accurate color mixing approaches.
                </p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3">Analysis Workflow</h4>
                      <ol className="text-gray-300 text-sm space-y-2">
                        <li>1. <strong className="text-white">Sample multiple areas</strong> - forehead, cheek, neck, arm</li>
                        <li>2. <strong className="text-white">Record color values</strong> - HSL, RGB, and HEX codes</li>
                        <li>3. <strong className="text-white">Identify patterns</strong> - consistent hue biases and temperature trends</li>
                        <li>4. <strong className="text-white">Create base palette</strong> - build custom color swatches</li>
                        <li>5. <strong className="text-white">Test mixtures</strong> - paint small swatches to verify accuracy</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-3">Documentation Benefits</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• <strong className="text-white">Build color library</strong> - save successful mixtures for future use</li>
                        <li>• <strong className="text-white">Track variations</strong> - understand individual differences</li>
                        <li>• <strong className="text-white">Improve accuracy</strong> - compare digital analysis to painted results</li>
                        <li>• <strong className="text-white">Share knowledge</strong> - help others learn diverse color approaches</li>
                        <li>• <strong className="text-white">Cultural sensitivity</strong> - approach subjects with respect and accuracy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-indigo-300 font-bold mb-2">🎯 Professional Development</h4>
                    <p className="text-gray-300 text-sm">
                      Continuously expand your experience with diverse subjects. Seek out reference photos from various 
                      ethnicities and lighting conditions. Practice regularly and document your color mixing discoveries. 
                      Consider taking workshops or classes focused on <strong className="text-white">portrait painting</strong> 
                      diversity to improve both your technical skills and cultural sensitivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Facial Color Mapping */}
          <section id="portrait-anatomy" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Facial Color Mapping & Anatomy</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Understanding how <strong className="text-white">skin tones</strong> vary across different areas of the face 
              is crucial for creating convincing <strong className="text-white">portrait paintings</strong>. Each facial 
              region has unique characteristics based on anatomy, blood flow, and light interaction.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-rose-600/10 to-pink-600/10 rounded-xl p-8 border border-rose-500/20">
                <h3 className="text-rose-300 font-bold text-xl mb-6">🎭 Facial Zone Color Analysis</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">The T-Zone (Forehead, Nose, Chin)</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      These prominent areas catch the most light and show the warmest <strong className="text-white">skin tones</strong> 
                      due to their forward position and rich blood supply.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-yellow-300 to-orange-400"></div>
                        <h5 className="text-yellow-400 font-semibold">Forehead</h5>
                        <ul className="text-gray-300 text-xs space-y-1 mt-2">
                          <li>• Warmest flesh tones</li>
                          <li>• Add extra yellow & orange</li>
                          <li>• Highest highlights</li>
                          <li>• Rich blood flow visible</li>
                        </ul>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-red-300 to-pink-400"></div>
                        <h5 className="text-red-400 font-semibold">Nose</h5>
                        <ul className="text-gray-300 text-xs space-y-1 mt-2">
                          <li>• Variable temperatures</li>
                          <li>• Bridge: warm highlights</li>
                          <li>• Nostrils: cool shadows</li>
                          <li>• Tip: often pinkish-red</li>
                        </ul>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-b from-orange-300 to-red-300"></div>
                        <h5 className="text-orange-400 font-semibold">Chin</h5>
                        <ul className="text-gray-300 text-xs space-y-1 mt-2">
                          <li>• Forward-facing warmth</li>
                          <li>• Catches reflected light</li>
                          <li>• Often has subtle variations</li>
                          <li>• Blends toward neck tones</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-rose-900/20 border border-rose-500/30 rounded">
                      <h6 className="text-rose-200 font-semibold mb-2">Mixing Strategy for T-Zone</h6>
                      <p className="text-gray-300 text-sm">
                        Start with your base <strong className="text-white">flesh color</strong> and add extra cadmium yellow light 
                        and tiny amounts of cadmium red. For the brightest highlights, add titanium white, but maintain 
                        some warmth—pure white highlights look artificial on skin.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Eye Area Complexities</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      The eye area presents unique color challenges with thin skin, various depths, and complex 
                      light interaction. Understanding these subtleties elevates your <strong className="text-white">portrait painting</strong>.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="text-purple-300 font-semibold">Upper Eyelids</h5>
                        <p className="text-gray-300 text-sm">
                          Often cooler due to thinner skin and orbital bone structure. Add subtle purple or blue-gray 
                          to your base <strong className="text-white">flesh mixture</strong>. Varies significantly with ethnicity and age.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h5 className="text-pink-300 font-semibold">Lower Eyelids & Under-Eye</h5>
                        <p className="text-gray-300 text-sm">
                          Very thin skin shows blood vessels and underlying structures. Often has pink or red undertones. 
                          Mix tiny amounts of alizarin crimson or quinacridone rose into base flesh colors.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="text-blue-300 font-semibold">Eye Socket Shadows</h5>
                        <p className="text-gray-300 text-sm">
                          Deep, recessed areas that remain in shadow. Use cooler flesh tones with added raw umber 
                          and ultramarine blue. Avoid making too dark—keep them colorful.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="text-yellow-300 font-semibold">Brow Bone Highlights</h5>
                        <p className="text-gray-300 text-sm">
                          Prominent bone catches direct light. Use warm flesh tones with added yellow and white. 
                          This area often shows the strongest highlights in the eye region.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Cheeks & Jawline Variations</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-red-300 font-semibold mb-3">Cheek Bone Area</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• High points catch direct light</li>
                          <li>• Often show natural flush/warmth</li>
                          <li>• Add pink or red undertones</li>
                          <li>• Blend smoothly into surrounding areas</li>
                          <li>• Age affects prominence and color</li>
                        </ul>
                        
                        <div className="mt-3 p-3 bg-red-900/20 rounded">
                          <p className="text-red-200 text-xs">
                            <strong>Natural flush:</strong> Mix cadmium red light or quinacridone rose into warm flesh base
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-3">Jawline & Lower Face</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Often in partial shadow</li>
                          <li>• Receives reflected light from neck/chest</li>
                          <li>• Cooler than upper face areas</li>
                          <li>• Shows beard shadow in male subjects</li>
                          <li>• Transitions toward neck tones</li>
                        </ul>
                        
                        <div className="mt-3 p-3 bg-blue-900/20 rounded">
                          <p className="text-blue-200 text-xs">
                            <strong>Shadow mixing:</strong> Add raw umber and ultramarine blue to base flesh tones
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-green-300 font-bold text-xl mb-6">🔍 Advanced Color Observation</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Using Digital Analysis for Face Mapping</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      <strong className="text-white">Color picker</strong> tools help you identify subtle color variations 
                      across facial areas that might be difficult to see with the naked eye. This systematic approach 
                      improves accuracy in your <strong className="text-white">portrait painting</strong>.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Systematic Sampling</h5>
                          <p className="text-gray-300 text-sm">
                            Use your <strong className="text-white">digital color tools</strong> to sample colors from at least 
                            8-10 different facial areas. Include forehead, cheeks, nose, chin, eye areas, and shadow zones.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Color Temperature Mapping</h5>
                          <p className="text-gray-300 text-sm">
                            Compare the hue values from your samples to identify temperature patterns. Create a visual map 
                            showing warm and cool zones across the face.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Value Range Analysis</h5>
                          <p className="text-gray-300 text-sm">
                            Examine the lightness values to understand the overall contrast range and identify 
                            the lightest highlights and darkest shadows in the facial structure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Age-Related Color Changes</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      <strong className="text-white">Skin tone</strong> characteristics change with age, affecting color mixing 
                      strategies in <strong className="text-white">portrait painting</strong>. Understanding these changes 
                      helps create more authentic representations.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="text-yellow-300 font-semibold mb-2">Youth (0-20 years)</h5>
                        <ul className="text-gray-300 text-xs space-y-1">
                          <li>• Higher overall saturation</li>
                          <li>• Smoother color transitions</li>
                          <li>• More uniform skin tone</li>
                          <li>• Pink undertones often prominent</li>
                          <li>• Clear, bright highlights</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-orange-300 font-semibold mb-2">Middle Age (20-60 years)</h5>
                        <ul className="text-gray-300 text-xs space-y-1">
                          <li>• More color variation across face</li>
                          <li>• Subtle texture changes</li>
                          <li>• Warmer overall tones</li>
                          <li>• Beginning of uneven pigmentation</li>
                          <li>• Slightly reduced saturation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-red-300 font-semibold mb-2">Mature Age (60+ years)</h5>
                        <ul className="text-gray-300 text-xs space-y-1">
                          <li>• Lower overall saturation</li>
                          <li>• More varied color patches</li>
                          <li>• Cooler undertones common</li>
                          <li>• Texture affects light reflection</li>
                          <li>• Softer, diffused highlights</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Advanced Techniques */}
          <section id="practical-techniques" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Portrait Painting Techniques</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Master-level <strong className="text-white">portrait painting</strong> requires sophisticated approaches to 
              <strong className="text-white"> skin tone</strong> application, color temperature control, and paint handling. 
              These advanced techniques separate professional-quality work from amateur attempts.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-8 border border-indigo-500/20">
                <h3 className="text-indigo-300 font-bold text-xl mb-6">🎨 Professional Paint Application</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Layered Color Building</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Professional <strong className="text-white">portrait painters</strong> build <strong className="text-white">skin tones</strong> 
                      through multiple transparent and semi-transparent layers rather than trying to achieve the final color in one application.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Underpainting Layer</h5>
                          <p className="text-gray-300 text-sm">
                            Establish the overall temperature and value structure with a thin underpainting. Use a slightly 
                            cooler or complementary color to the final <strong className="text-white">skin tone</strong> to create vibrant optical mixing.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Base Flesh Layer</h5>
                          <p className="text-gray-300 text-sm">
                            Apply your primary <strong className="text-white">flesh colors</strong> in medium opacity, allowing 
                            the underpainting to show through in places. This creates depth and luminosity.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Temperature Adjustments</h5>
                          <p className="text-gray-300 text-sm">
                            Add warm and cool accents using glazes and scumbles. Build up the temperature variations 
                            gradually to maintain control over the final color relationships.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Final Details & Refinements</h5>
                          <p className="text-gray-300 text-sm">
                            Add the brightest highlights and deepest shadows last. Use relatively opaque paint for 
                            highlights and maintain color richness in shadow areas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Brushwork for Skin Texture</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-indigo-300 font-semibold mb-3">Smooth Skin Techniques</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Soft blending brushes</strong> - fan brushes, soft flats</li>
                          <li>• <strong className="text-white">Cross-hatching strokes</strong> - multiple directions for smoothness</li>
                          <li>• <strong className="text-white">Gradual transitions</strong> - avoid harsh edges between colors</li>
                          <li>• <strong className="text-white">Light pressure</strong> - let the brush do the work</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-purple-300 font-semibold mb-3">Textured Skin Approaches</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• <strong className="text-white">Broken color technique</strong> - let brushstrokes show</li>
                          <li>• <strong className="text-white">Dry brush work</strong> - minimal paint, textured application</li>
                          <li>• <strong className="text-white">Stippling effects</strong> - for beard shadow, skin texture</li>
                          <li>• <strong className="text-white">Palette knife work</strong> - for rough, weathered skin</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-orange-300 font-bold text-xl mb-6">🔧 Problem-Solving Techniques</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Common Skin Tone Problems & Solutions</h4>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="text-red-300 font-semibold">Problem: Muddy, Lifeless Skin Colors</h5>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Causes:</strong> Overmixing colors, using too many pigments, adding black to darken
                        </p>
                        <p className="text-green-300 text-sm">
                          <strong>Solutions:</strong> Use fewer, cleaner pigments; darken with transparent colors like burnt umber; 
                          add complementary colors instead of black; build colors through glazing
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 className="text-yellow-300 font-semibold">Problem: Artificial-Looking Highlights</h5>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Causes:</strong> Using pure white, ignoring skin&apos;s natural warmth, incorrect placement
                        </p>
                        <p className="text-green-300 text-sm">
                          <strong>Solutions:</strong> Warm white with tiny amounts of yellow or pink; study light direction carefully; 
                          make highlights follow the form of the face
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="text-blue-300 font-semibold">Problem: Flat, Monochromatic Skin</h5>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Causes:</strong> Using one skin tone throughout, ignoring temperature variations
                        </p>
                        <p className="text-green-300 text-sm">
                          <strong>Solutions:</strong> Map warm and cool zones; use <strong className="text-white">color analysis</strong> 
                          tools to identify subtle variations; add reflected colors from environment
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="text-purple-300 font-semibold">Problem: Incorrect Ethnic Representation</h5>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Causes:</strong> Stereotypical color assumptions, limited color mixing knowledge
                        </p>
                        <p className="text-green-300 text-sm">
                          <strong>Solutions:</strong> Study individual references carefully; use digital <strong className="text-white">color picker</strong> 
                          tools; practice with diverse subjects; seek feedback from relevant communities
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Advanced Color Correction</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      When <strong className="text-white">skin tones</strong> go wrong, professional painters know how to 
                      correct them without starting over completely.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">1</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Glazing Corrections</h5>
                          <p className="text-gray-300 text-sm">
                            Apply thin, transparent glazes to adjust color temperature without completely repainting. 
                            Use complementary colors to neutralize unwanted color casts.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">2</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Scumbling Adjustments</h5>
                          <p className="text-gray-300 text-sm">
                            Use semi-opaque, broken color applications to modify underlying colors while maintaining 
                            texture and luminosity.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-black font-bold text-xs">3</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Strategic Repainting</h5>
                          <p className="text-gray-300 text-sm">
                            Identify the most problematic areas and repaint them while blending carefully into 
                            successful surrounding areas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Digital Integration Workflow</h3>
                
                <p className="text-gray-300 mb-6">
                  Combine traditional <strong className="text-white">portrait painting</strong> techniques with modern 
                  <strong className="text-white"> digital color analysis</strong> for the most accurate and efficient workflow.
                </p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3">Pre-Painting Analysis</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Use <strong className="text-white">color picker</strong> tools on reference photos</li>
                        <li>• Create digital color swatches for comparison</li>
                        <li>• Analyze lighting conditions and temperature patterns</li>
                        <li>• Map facial color zones digitally</li>
                        <li>• Plan color mixing strategy based on analysis</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3">During Painting Process</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Keep digital reference and color analysis visible</li>
                        <li>• Mix colors on palette and compare to screen</li>
                        <li>• Use mobile <strong className="text-white">color analysis</strong> apps for quick checks</li>
                        <li>• Photograph work in progress for color accuracy</li>
                        <li>• Make adjustments based on digital comparison</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-teal-300 font-bold mb-2">🎯 Professional Results</h4>
                    <p className="text-gray-300 text-sm">
                      This integrated approach—combining traditional painting skills with digital <strong className="text-white">color analysis</strong>—
                      produces more accurate, convincing <strong className="text-white">portrait paintings</strong> while reducing 
                      guesswork and improving efficiency. Master both traditional color mixing and digital analysis 
                      to achieve professional-level results in your portrait work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-700 pt-12 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Master Portrait Skin Tones Today</h3>
            <p className="text-gray-300 mb-6">
              Apply these professional techniques using our <strong className="text-white">color analysis tools</strong>. 
              Upload portrait references, extract accurate <strong className="text-white">skin tone palettes</strong>, 
              and create your own <strong className="text-white">flesh color recipes</strong> for realistic portrait painting.
            </p>
            <Link 
              href="/" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Analyze Portrait Colors
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-700">
            <div>
              <h4 className="text-white font-bold mb-3">Related Portrait Tutorials</h4>
              <ul className="space-y-2">
                <li><a href="/tutorials/color-theory" className="text-blue-400 hover:text-blue-300 transition-colors">Color Theory for Portraits</a></li>
                <li><a href="/tutorials/oil-painting" className="text-blue-400 hover:text-blue-300 transition-colors">Oil Painting Portrait Techniques</a></li>
                <li><a href="/tutorials/value-studies" className="text-blue-400 hover:text-blue-300 transition-colors">Portrait Value Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Portrait Color Tools</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">Skin Tone Color Picker</Link></li>
                <li><Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">Flesh Color Recipe Generator</Link></li>
                <li><Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">Portrait Reference Analysis</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}