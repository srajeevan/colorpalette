import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watercolor Color Mixing Guide | Professional Techniques for Artists',
  description: 'Master watercolor color mixing with professional techniques. Learn wet-on-wet, wet-on-dry, glazing, and pigment properties for vibrant watercolor paintings.',
  keywords: 'watercolor mixing, watercolor techniques, wet on wet, wet on dry, watercolor glazing, pigment properties, transparent colors, watercolor painting, color theory watercolor',
  openGraph: {
    title: 'Watercolor Color Mixing | Professional Techniques Guide',
    description: 'Complete guide to watercolor color mixing techniques for artists. Master wet-on-wet, glazing, and pigment properties.',
    type: 'article',
  },
}

export default function WatercolorMixingPage() {
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
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Watercolor</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Watercolor Color Mixing Mastery
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Unlock the secrets of <strong className="text-white">transparent watercolor mixing</strong>. Learn professional techniques 
            for creating <strong className="text-white">luminous, vibrant paintings</strong> through proper 
            <strong className="text-white"> color mixing</strong> and water control methods.
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 text-gray-400 text-sm">
            <span>📖 14 min read</span>
            <span>💧 Watercolor Focus</span>
            <span>✅ Mixing Techniques</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">Watercolor Mixing Guide</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#transparent-theory" className="hover:text-blue-400 transition-colors">1. Transparent Color Theory</a></li>
            <li><a href="#watercolor-properties" className="hover:text-blue-400 transition-colors">2. Understanding Watercolor Properties</a></li>
            <li><a href="#mixing-techniques" className="hover:text-blue-400 transition-colors">3. Professional Mixing Techniques</a></li>
            <li><a href="#wet-techniques" className="hover:text-blue-400 transition-colors">4. Wet-on-Wet vs Wet-on-Dry</a></li>
            <li><a href="#luminous-effects" className="hover:text-blue-400 transition-colors">5. Creating Luminous Effects</a></li>
            <li><a href="#color-temperature-watercolor" className="hover:text-blue-400 transition-colors">6. Temperature in Watercolor</a></li>
            <li><a href="#practical-exercises-wc" className="hover:text-blue-400 transition-colors">7. Hands-On Mixing Exercises</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Transparent Theory */}
          <section id="transparent-theory" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Transparent Color Theory</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Watercolor mixing</strong> is fundamentally different from oil or acrylic painting 
              because watercolors are <strong className="text-white">transparent pigments</strong>. This transparency creates 
              unique mixing behaviors and allows for luminous effects impossible in opaque mediums.
            </p>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">The Magic of Transparency</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-3">How Transparent Mixing Works</h4>
                  <p className="text-gray-300 mb-4">
                    When <strong className="text-white">transparent colors</strong> are layered, light passes through each layer, 
                    reflects off the white paper, and travels back through the paint layers to your eye. This creates depth 
                    and luminosity that can&apos;t be achieved with opaque paints.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-blue-300 text-sm">
                      <strong>Key Principle:</strong> The white paper is your light source. Preserve it for maximum luminosity.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Optical vs Physical Mixing</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Physical mixing:</strong> Colors blended on palette or paper while wet</li>
                    <li>• <strong className="text-white">Optical mixing:</strong> Transparent layers creating new colors visually</li>
                    <li>• <strong className="text-white">Granulation:</strong> Pigments separating to create texture</li>
                    <li>• <strong className="text-white">Backruns:</strong> Water movement creating organic shapes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-xl p-6 border border-cyan-500/20">
                <h4 className="text-cyan-300 font-bold mb-3">💧 The Three Pillars of Watercolor Mixing</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-3 opacity-70"></div>
                    <h5 className="text-white font-semibold">Pigment Quality</h5>
                    <p className="text-gray-300 text-sm">Professional-grade transparent pigments with high tinting strength</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-3 opacity-50"></div>
                    <h5 className="text-white font-semibold">Water Control</h5>
                    <p className="text-gray-300 text-sm">Managing water content for predictable <strong className="text-white">color mixing</strong></p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-cyan-500 rounded-full mx-auto mb-3 opacity-30"></div>
                    <h5 className="text-white font-semibold">Paper Interaction</h5>
                    <p className="text-gray-300 text-sm">Understanding how different papers affect transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Watercolor Properties */}
          <section id="watercolor-properties" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Watercolor Paint Properties</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Not all <strong className="text-white">watercolor paints</strong> behave the same way. Understanding pigment 
              properties helps you make informed decisions about <strong className="text-white">color mixing</strong> and 
              achieve predictable results in your paintings.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Pigment Transparency Levels</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-lg border-2 border-gray-600" style={{background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))'}}>
                    </div>
                    <h4 className="text-blue-400 font-semibold">Transparent</h4>
                    <p className="text-gray-300 text-sm">Maximum luminosity, perfect for glazing and <strong className="text-white">luminous effects</strong></p>
                    <div className="mt-2 text-xs text-gray-400">
                      Examples: Quinacridone Rose, Phthalo Blue, Dioxazine Purple
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-lg border-2 border-gray-600" style={{background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.7), rgba(168, 85, 247, 0.7))'}}>
                    </div>
                    <h4 className="text-green-400 font-semibold">Semi-Transparent</h4>
                    <p className="text-gray-300 text-sm">Good mixing colors, maintain some transparency</p>
                    <div className="mt-2 text-xs text-gray-400">
                      Examples: Ultramarine Blue, Raw Sienna, Quinacridone Gold
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-lg border-2 border-gray-600" style={{background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.9), rgba(245, 101, 101, 0.9))'}}>
                    </div>
                    <h4 className="text-red-400 font-semibold">Opaque/Semi-Opaque</h4>
                    <p className="text-gray-300 text-sm">Strong covering power, can muddy transparent mixes</p>
                    <div className="mt-2 text-xs text-gray-400">
                      Examples: Cadmium colors, Cerulean Blue, Naples Yellow
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-yellow-300 font-bold mb-2">🎨 Mixing Strategy</h4>
                  <p className="text-gray-300">
                    For <strong className="text-white">luminous watercolor mixing</strong>, start with transparent pigments as your 
                    foundation. Use semi-transparent colors for body and warmth, and add opaque colors sparingly for specific 
                    effects. A <strong className="text-white">color picker</strong> tool can help you analyze the transparency 
                    levels in reference images.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Staining vs Non-Staining Pigments</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h4 className="text-red-400 font-semibold mb-3">🔴 Staining Colors</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Penetrate deep into paper fibers and resist lifting. Permanent once dry, perfect for underpainting.
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Phthalo Blue and Green</li>
                      <li>• Quinacridone colors</li>
                      <li>• Dioxazine Purple</li>
                      <li>• Winsor Red (Naphthol)</li>
                    </ul>
                    <div className="mt-3 p-2 bg-red-800/20 rounded">
                      <p className="text-red-200 text-xs"><strong>Best for:</strong> Underpainting, permanent washes, intense darks</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-blue-400 font-semibold mb-3">🔵 Non-Staining Colors</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Sit on paper surface and can be lifted or modified even when dry. Excellent for corrections and soft effects.
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Ultramarine Blue</li>
                      <li>• Cerulean Blue</li>
                      <li>• Most earth colors</li>
                      <li>• Cadmium colors</li>
                    </ul>
                    <div className="mt-3 p-2 bg-blue-800/20 rounded">
                      <p className="text-blue-200 text-xs"><strong>Best for:</strong> Cloud effects, corrections, gentle washes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Granulating vs Smooth Pigments</h3>
                
                <p className="text-gray-300 mb-6">
                  Some watercolor pigments separate and create texture as they dry, while others remain smooth. 
                  Understanding this behavior is crucial for <strong className="text-white">watercolor mixing</strong> success.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">Granulating Colors</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Heavy pigment particles settle into paper texture, creating natural-looking textures perfect for 
                      skies, rocks, and organic surfaces.
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• French Ultramarine</li>
                      <li>• Cerulean Blue</li>
                      <li>• Raw Umber</li>
                      <li>• Manganese Violet</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3">Smooth Colors</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Fine pigment particles create even, smooth washes. Perfect for clean <strong className="text-white">color mixing</strong> 
                      and precise gradations.
                    </p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Phthalo colors</li>
                      <li>• Quinacridone colors</li>
                      <li>• Winsor colors</li>
                      <li>• Most synthetic pigments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Mixing Techniques */}
          <section id="mixing-techniques" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Professional Watercolor Mixing Techniques</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Mastering <strong className="text-white">watercolor mixing</strong> requires understanding various techniques 
              and when to use each one. The key is controlling water content and timing to achieve predictable, 
              <strong className="text-white"> luminous results</strong>.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-blue-300 font-bold text-xl mb-6">Palette Mixing Techniques</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">1. The Puddle Method</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Create separate puddles of each color on your palette, then gradually introduce one color into another. 
                      This method gives maximum control over <strong className="text-white">color mixing</strong> intensity.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-400">
                      <div>
                        <strong className="text-blue-300">Step 1:</strong> Create main color puddle
                      </div>
                      <div>
                        <strong className="text-green-300">Step 2:</strong> Add second color gradually
                      </div>
                      <div>
                        <strong className="text-purple-300">Step 3:</strong> Test mixture on scrap paper
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">2. The Charging Method</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Load your brush with one color, then touch the tip to a different color. The colors mix on the brush, 
                      creating beautiful gradations when applied to paper.
                    </p>
                    <div className="bg-orange-900/30 border border-orange-500/30 rounded p-3 mt-3">
                      <p className="text-orange-200 text-xs">
                        <strong>Pro Tip:</strong> Perfect for creating natural color variations in single brush strokes, 
                        ideal for flower petals and organic forms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">3. The Gradual Introduction Method</h4>
                    <p className="text-gray-300 text-sm">
                      Start with your lighter color and gradually add stronger colors. This prevents overpowering and 
                      maintains the <strong className="text-white">luminous quality</strong> essential in watercolor work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Water-to-Paint Ratios</h3>
                
                <p className="text-gray-300 mb-6">
                  The ratio of water to paint determines not only the value (lightness/darkness) of your mixture but also 
                  how it will behave and mix with other colors on the paper.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg border-2 border-gray-600" 
                         style={{background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))'}}>
                    </div>
                    <h4 className="text-white font-semibold text-sm">10:1 Water</h4>
                    <p className="text-gray-400 text-xs">Tinting, very light washes</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg border-2 border-gray-600"
                         style={{background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.5))'}}>
                    </div>
                    <h4 className="text-white font-semibold text-sm">5:1 Water</h4>
                    <p className="text-gray-400 text-xs">Light washes, glazing</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg border-2 border-gray-600"
                         style={{background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.8))'}}>
                    </div>
                    <h4 className="text-white font-semibold text-sm">2:1 Water</h4>
                    <p className="text-gray-400 text-xs">Medium strength, good for most work</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg border-2 border-gray-600"
                         style={{background: 'rgba(59, 130, 246, 1)'}}>
                    </div>
                    <h4 className="text-white font-semibold text-sm">1:1 or Less</h4>
                    <p className="text-gray-400 text-xs">Strong color, details</p>
                  </div>
                </div>

                <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6">
                  <h4 className="text-cyan-300 font-bold mb-2">💧 Consistency Guidelines</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• <strong className="text-white">Milk consistency:</strong> Perfect for most washes and mixing</li>
                    <li>• <strong className="text-white">Cream consistency:</strong> Strong color for details and accents</li>
                    <li>• <strong className="text-white">Tea consistency:</strong> Glazing and subtle color adjustments</li>
                    <li>• <strong className="text-white">Tinted water:</strong> Very light tints and atmospheric effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Wet Techniques */}
          <section id="wet-techniques" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Wet-on-Wet vs Wet-on-Dry Mixing</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              These two fundamental techniques create completely different effects in <strong className="text-white">watercolor mixing</strong>. 
              Understanding when and how to use each technique is essential for achieving professional results.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-cyan-300 font-bold text-xl mb-6">🌊 Wet-on-Wet Techniques</h3>
                
                <p className="text-gray-300 mb-6">
                  Applying wet paint to wet paper or wet paint creates soft, flowing effects with natural 
                  <strong className="text-white"> color mixing</strong> that&apos;s impossible to achieve any other way.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Classic Wet-on-Wet Process</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-cyan-300 font-semibold mb-2">Preparation Steps</h5>
                        <ol className="text-gray-300 text-sm space-y-1">
                          <li>1. <strong className="text-white">Wet the paper</strong> - Use clean water with large brush</li>
                          <li>2. <strong className="text-white">Check dampness</strong> - Should be moist, not soaking</li>
                          <li>3. <strong className="text-white">Load brush</strong> - Creamy paint consistency</li>
                          <li>4. <strong className="text-white">Apply color</strong> - Let it flow naturally</li>
                        </ol>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-2">Mixing on Wet Surface</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Colors blend softly at edges</li>
                          <li>• <strong className="text-white">Backruns</strong> create organic textures</li>
                          <li>• No hard edges possible</li>
                          <li>• Perfect for skies, water, soft backgrounds</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Advanced Wet-on-Wet Mixing</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h6 className="text-blue-300 font-semibold">Charging Colors</h6>
                        <p className="text-gray-300 text-sm">
                          While first color is still wet, introduce a second color. They&apos;ll mix naturally, creating 
                          beautiful gradations perfect for <strong className="text-white">luminous effects</strong>.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h6 className="text-green-300 font-semibold">Controlled Bleeding</h6>
                        <p className="text-gray-300 text-sm">
                          Touch strong color to damp (not soaking) areas for controlled spread. Essential for 
                          natural-looking flower petals and organic forms.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h6 className="text-purple-300 font-semibold">Variegated Washes</h6>
                        <p className="text-gray-300 text-sm">
                          Apply different colors while paper is evenly damp. Colors will mingle to create 
                          complex, natural-looking color variations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-orange-300 font-bold text-xl mb-6">🔥 Wet-on-Dry Techniques</h3>
                
                <p className="text-gray-300 mb-6">
                  Applying wet paint to completely dry paper or paint creates sharp, controlled effects with 
                  precise <strong className="text-white">color mixing</strong> possibilities.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Precise Control Benefits</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-lg border-2 border-orange-500"
                             style={{background: 'linear-gradient(to right, transparent, rgba(249, 115, 22, 0.8))'}}>
                        </div>
                        <h5 className="text-white font-semibold text-sm">Sharp Edges</h5>
                        <p className="text-gray-300 text-xs">Perfect for architectural elements and defined shapes</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-lg border-2 border-orange-500"
                             style={{background: 'repeating-linear-gradient(45deg, rgba(249, 115, 22, 0.3), rgba(249, 115, 22, 0.3) 4px, rgba(249, 115, 22, 0.8) 4px, rgba(249, 115, 22, 0.8) 8px)'}}>
                        </div>
                        <h5 className="text-white font-semibold text-sm">Layered Glazing</h5>
                        <p className="text-gray-300 text-xs">Build up <strong className="text-white">transparent colors</strong> for depth</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-lg border-2 border-orange-500"
                             style={{background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.1))'}}>
                        </div>
                        <h5 className="text-white font-semibold text-sm">Controlled Blending</h5>
                        <p className="text-gray-300 text-xs">Precise gradations and color transitions</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Glazing for Luminosity</h4>
                    <p className="text-gray-300 mb-4">
                      Glazing is the technique that makes <strong className="text-white">watercolor mixing</strong> unique. 
                      By layering transparent colors over completely dry previous layers, you create optical mixing 
                      that maintains maximum <strong className="text-white">luminous quality</strong>.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="text-orange-300 font-semibold mb-2">Glazing Rules</h6>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Previous layer must be completely dry</li>
                          <li>• Use <strong className="text-white">transparent pigments</strong> only</li>
                          <li>• Light touch - don&apos;t disturb underlayer</li>
                          <li>• Build gradually with thin layers</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="text-red-300 font-semibold mb-2">Perfect Glazing Colors</h6>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Quinacridone Rose</li>
                          <li>• Phthalo Blue</li>
                          <li>• Winsor Yellow</li>
                          <li>• Dioxazine Purple</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Luminous Effects */}
          <section id="luminous-effects" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Creating Luminous Watercolor Effects</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The hallmark of masterful <strong className="text-white">watercolor painting</strong> is achieving luminosity - 
              that inner glow that makes colors appear to emit light. This quality comes from proper 
              <strong className="text-white"> transparent color mixing</strong> and preserving the white paper&apos;s reflective power.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-xl p-8 border border-yellow-500/20">
                <h3 className="text-yellow-300 font-bold text-xl mb-6">✨ The Science of Luminosity</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">How Light Creates Luminosity</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      In <strong className="text-white">transparent watercolor</strong>, light travels through the paint layers, 
                      reflects off the white paper, and returns through the paint to your eye. This creates depth and 
                      intensity impossible in opaque mediums.
                    </p>
                    <div className="bg-yellow-900/30 border border-yellow-500/30 rounded p-3">
                      <p className="text-yellow-200 text-xs">
                        <strong>Key Principle:</strong> The more you preserve the white paper, the more luminous your painting becomes.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Luminosity Killers</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong className="text-red-400">Opaque pigments</strong> - Block light transmission</li>
                      <li>• <strong className="text-red-400">Overworking</strong> - Muddies transparent layers</li>
                      <li>• <strong className="text-red-400">Too many layers</strong> - Builds up opacity</li>
                      <li>• <strong className="text-red-400">Dirty water</strong> - Contaminates clean colors</li>
                      <li>• <strong className="text-red-400">Wrong paper</strong> - Rough textures scatter light</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-yellow-300 font-semibold mb-3">🌟 Luminosity Techniques</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-black font-bold text-xs">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Preserve White Paper</h5>
                        <p className="text-gray-300 text-sm">Use masking fluid or careful brushwork to preserve white areas for maximum light reflection.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Clean Color Mixing</h5>
                        <p className="text-gray-300 text-sm">Use only 2-3 <strong className="text-white">transparent pigments</strong> per mixture to maintain color purity.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Strategic Glazing</h5>
                        <p className="text-gray-300 text-sm">Build up colors with thin, transparent layers rather than trying to achieve intensity in one application.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Advanced Luminosity Methods</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-500 pl-6">
                    <h4 className="text-cyan-400 font-semibold mb-2">Negative Painting Technique</h4>
                    <p className="text-gray-300 text-sm">
                      Paint around light areas rather than painting the light areas themselves. This preserves the 
                      paper&apos;s luminosity while defining forms through surrounding darks. Use a <strong className="text-white">color picker</strong> 
                      tool to analyze which areas in reference photos should remain light.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-purple-400 font-semibold mb-2">Granulation Effects</h4>
                    <p className="text-gray-300 text-sm">
                      Combine granulating pigments (like French Ultramarine) with smooth pigments (like Phthalo Blue) to create 
                      natural texture that enhances luminosity by varying the light reflection across the surface.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-green-400 font-semibold mb-2">Temperature Shifts for Glow</h4>
                    <p className="text-gray-300 text-sm">
                      Use warm colors in light areas and cool colors in shadow areas. The temperature contrast creates 
                      the illusion of light emanating from within the painting, essential for <strong className="text-white">luminous effects</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Temperature in Watercolor */}
          <section id="color-temperature-watercolor" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Color Temperature in Watercolor Mixing</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Understanding <strong className="text-white">color temperature</strong> is crucial for successful 
              <strong className="text-white"> watercolor mixing</strong>. Temperature creates mood, depth, and the illusion 
              of light in transparent painting more dramatically than in any other medium.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Warm vs Cool Pigments</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-lg p-6 border border-red-500/20">
                    <h4 className="text-red-400 font-bold mb-4">🔥 Warm Watercolor Pigments</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-white font-semibold">Warm Reds</h5>
                        <p className="text-gray-300 text-sm">Cadmium Red, Quinacridone Rose, Winsor Red</p>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Warm Yellows</h5>
                        <p className="text-gray-300 text-sm">Cadmium Yellow, New Gamboge, Indian Yellow</p>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Warm Blues</h5>
                        <p className="text-gray-300 text-sm">Ultramarine Blue, Dioxazine Purple</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-red-900/20 rounded">
                      <p className="text-red-200 text-xs">
                        <strong>Effect:</strong> Advance forward, create energy, suggest sunlight and warmth
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-lg p-6 border border-blue-500/20">
                    <h4 className="text-blue-400 font-bold mb-4">❄️ Cool Watercolor Pigments</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-white font-semibold">Cool Blues</h5>
                        <p className="text-gray-300 text-sm">Phthalo Blue, Cerulean Blue, Prussian Blue</p>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Cool Yellows</h5>
                        <p className="text-gray-300 text-sm">Lemon Yellow, Winsor Yellow, Hansa Yellow Light</p>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Cool Reds</h5>
                        <p className="text-gray-300 text-sm">Quinacridone Magenta, Alizarin Crimson</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-900/20 rounded">
                      <p className="text-blue-200 text-xs">
                        <strong>Effect:</strong> Recede backward, create calm, suggest shadow and coolness
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-purple-300 font-bold mb-2">🎨 Temperature Mixing Strategy</h4>
                  <p className="text-gray-300">
                    For vibrant <strong className="text-white">watercolor mixing</strong>, combine pigments of similar temperature. 
                    Warm + Warm = clean, intense mixture. Cool + Cool = clean, intense mixture. 
                    Warm + Cool = muted, natural mixture. Use digital <strong className="text-white">color picker</strong> tools 
                    to analyze temperature relationships in your reference images.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-600/10 to-green-600/10 rounded-xl p-8 border border-teal-500/20">
                <h3 className="text-teal-300 font-bold text-xl mb-6">Atmospheric Temperature Effects</h3>
                
                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Watercolor&apos;s transparency</strong> makes it perfect for creating atmospheric 
                  effects through temperature relationships. Understanding these principles elevates your paintings 
                  from flat color studies to convincing illusions of space and light.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Atmospheric Perspective Rules</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-green-300 font-semibold mb-2">Foreground (Close)</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Warmer temperatures dominate</li>
                          <li>• Higher contrast values</li>
                          <li>• More intense, saturated colors</li>
                          <li>• Sharp, defined edges</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-blue-300 font-semibold mb-2">Background (Distant)</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Cooler temperatures dominate</li>
                          <li>• Lower contrast values</li>
                          <li>• Muted, grayed colors</li>
                          <li>• Soft, lost edges</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Light Source Temperature Effects</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h6 className="text-yellow-300 font-semibold">Warm Light (Sunlight, Incandescent)</h6>
                        <p className="text-gray-300 text-sm">
                          Creates warm-tinted highlights and cool shadows. Mix warm colors for lit areas, 
                          cool colors for shadow areas. Perfect for golden hour and interior scenes.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h6 className="text-blue-300 font-semibold">Cool Light (Overcast, North Window)</h6>
                        <p className="text-gray-300 text-sm">
                          Creates cool-tinted highlights and warm shadows. Mix cool colors for lit areas, 
                          warm colors for shadow areas. Ideal for moody, atmospheric paintings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Practical Exercises */}
          <section id="practical-exercises-wc" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Hands-On Watercolor Mixing Exercises</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              These progressive exercises are designed to build your <strong className="text-white">watercolor mixing</strong> 
              skills systematically. Practice each exercise multiple times with different color combinations to develop 
              intuitive understanding of <strong className="text-white">transparent color behavior</strong>.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-blue-300 font-bold text-xl mb-6">Exercise 1: Pure Transparency Chart</h3>
                
                <p className="text-gray-300 mb-6">
                  Create a chart showing how different pigments behave at various dilutions. This exercise teaches 
                  you the transparency characteristics of your palette and how to achieve consistent results.
                </p>

                <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                  <h4 className="text-blue-300 font-semibold mb-3">Materials Needed</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Watercolor paper (140lb minimum)</li>
                    <li>• 6-8 <strong className="text-white">transparent pigments</strong></li>
                    <li>• Clean water containers</li>
                    <li>• Round brushes sizes 8, 12</li>
                    <li>• Ruler and pencil</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">Create Grid</h5>
                      <p className="text-gray-300 text-sm">
                        Draw a grid with pigment names on one axis and dilution ratios (1:1, 1:3, 1:5, 1:10) on the other.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">Paint Samples</h5>
                      <p className="text-gray-300 text-sm">
                        Fill each square with the appropriate dilution. Work quickly to maintain consistent wetness.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">Analyze Results</h5>
                      <p className="text-gray-300 text-sm">
                        When dry, note which pigments maintain <strong className="text-white">luminous quality</strong> at different dilutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-green-300 font-bold text-xl mb-6">Exercise 2: Temperature Mixing Wheel</h3>
                
                <p className="text-gray-300 mb-6">
                  Create mixing wheels that show warm and cool versions of each primary and secondary color. 
                  This exercise develops your eye for temperature relationships in <strong className="text-white">watercolor mixing</strong>.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-green-300 font-semibold mb-3">Warm Wheel Setup</h4>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-2"></div>
                        <h5 className="text-white font-semibold text-sm">Warm Red</h5>
                        <p className="text-gray-300 text-xs">Cadmium Red Medium</p>
                      </div>
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-2"></div>
                        <h5 className="text-white font-semibold text-sm">Warm Yellow</h5>
                        <p className="text-gray-300 text-xs">New Gamboge</p>
                      </div>
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-2"></div>
                        <h5 className="text-white font-semibold text-sm">Warm Blue</h5>
                        <p className="text-gray-300 text-xs">Ultramarine Blue</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Cool Wheel Setup</h4>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-2"></div>
                        <h5 className="text-white font-semibold text-sm">Cool Red</h5>
                        <p className="text-gray-300 text-xs">Quinacridone Rose</p>
                      </div>
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-green-400 rounded-full mx-auto mb-2"></div>
                        <h5 className="text-white font-semibold text-sm">Cool Yellow</h5>
                        <p className="text-gray-300 text-xs">Lemon Yellow</p>
                      </div>
                      <div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-2"></div>
                        <h5 className="text-white font-semibold text-sm">Cool Blue</h5>
                        <p className="text-gray-300 text-xs">Phthalo Blue</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4">
                    <h5 className="text-teal-300 font-semibold mb-2">🎯 Learning Objectives</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• See how temperature affects secondary color mixing</li>
                      <li>• Understand why some mixtures are muddy while others are clean</li>
                      <li>• Develop intuitive sense of pigment temperature</li>
                      <li>• Practice creating <strong className="text-white">luminous mixtures</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-orange-300 font-bold text-xl mb-6">Exercise 3: Wet-on-Wet Sky Study</h3>
                
                <p className="text-gray-300 mb-6">
                  Practice controlled <strong className="text-white">wet-on-wet mixing</strong> by painting a sky with 
                  natural color gradations. This exercise teaches timing, water control, and color behavior in 
                  <strong className="text-white"> watercolor mixing</strong>.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-orange-300 font-semibold mb-3">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">1</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Prepare Colors</h5>
                          <p className="text-gray-300 text-sm">Mix three sky colors: warm light (yellow + tiny red), cool middle (blue + tiny yellow), deep blue (pure blue + tiny purple)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-black font-bold text-xs">2</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Wet the Paper</h5>
                          <p className="text-gray-300 text-sm">Use clean water to wet the sky area evenly. Paper should be damp but not pooling.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">3</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Apply Colors</h5>
                          <p className="text-gray-300 text-sm">Start with lightest color at horizon, gradually introduce cooler colors toward the top. Let them blend naturally.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">4</span>
                        </div>
                        <div>
                          <h5 className="text-white font-semibold">Control the Flow</h5>
                          <p className="text-gray-300 text-sm">If colors blend too much, tilt paper. If they don&apos;t blend enough, add tiny amounts of clean water.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h4 className="text-red-300 font-semibold mb-3">Troubleshooting Common Issues</h4>
                    <div className="space-y-2">
                      <div className="border-l-4 border-red-500 pl-3">
                        <h6 className="text-red-300 font-semibold text-sm">Colors Won&apos;t Blend</h6>
                        <p className="text-gray-300 text-xs">Paper too dry. Re-wet lightly or work faster next time.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-3">
                        <h6 className="text-blue-300 font-semibold text-sm">Colors Bleed Too Much</h6>
                        <p className="text-gray-300 text-xs">Paper too wet. Use less water or stronger paint mixtures.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-3">
                        <h6 className="text-green-300 font-semibold text-sm">Muddy Results</h6>
                        <p className="text-gray-300 text-xs">Too many colors mixing. Limit to 2-3 colors maximum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-700 pt-12 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Master Watercolor Mixing Today</h3>
            <p className="text-gray-300 mb-6">
              Use our free <strong className="text-white">color analysis tools</strong> to study transparency levels, 
              analyze <strong className="text-white">color temperature</strong> in reference images, and practice 
              creating <strong className="text-white">luminous watercolor mixtures</strong>.
            </p>
            <Link 
              href="/" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Try Color Analysis Tools
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-700">
            <div>
              <h4 className="text-white font-bold mb-3">Related Watercolor Tutorials</h4>
              <ul className="space-y-2">
                <li><a href="/tutorials/color-theory" className="text-blue-400 hover:text-blue-300 transition-colors">Color Theory for Watercolor</a></li>
                <li><a href="/tutorials/value-studies" className="text-blue-400 hover:text-blue-300 transition-colors">Watercolor Value Studies</a></li>
                <li><a href="/tutorials/portrait-painting" className="text-blue-400 hover:text-blue-300 transition-colors">Watercolor Portrait Techniques</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Practice Tools</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-green-400 hover:text-green-300 transition-colors">Transparency Analyzer</Link></li>
                <li><Link href="/" className="text-green-400 hover:text-green-300 transition-colors">Color Temperature Tool</Link></li>
                <li><Link href="/" className="text-green-400 hover:text-green-300 transition-colors">Watercolor Palette Generator</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}