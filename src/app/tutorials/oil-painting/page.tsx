import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oil Painting Techniques for Beginners | Complete Guide to Oil Paint Mixing',
  description: 'Master essential oil painting techniques, color mixing, brush handling, and paint application. Learn professional methods for realistic oil paintings with step-by-step tutorials.',
  keywords: 'oil painting, oil painting techniques, color mixing, paint mixing, oil paint, brush techniques, painting methods, traditional painting, oil painting for beginners, color picker, squint technique',
  openGraph: {
    title: 'Oil Painting Techniques for Beginners | Professional Methods',
    description: 'Complete guide to oil painting techniques, color mixing, and brush handling for creating professional-quality paintings.',
    type: 'article',
  },
}

export default function OilPaintingPage() {
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
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Oil Painting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Essential Oil Painting Techniques for Beginners
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Master professional <strong className="text-white">oil painting techniques</strong>, 
            <strong className="text-white"> color mixing methods</strong>, and <strong className="text-white">brush handling</strong> 
            to create stunning, realistic paintings that rival those of professional artists.
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 text-gray-400 text-sm">
            <span>📖 18 min read</span>
            <span>🎨 Beginner to Advanced</span>
            <span>✅ Step-by-Step Methods</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">Complete Oil Painting Guide</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#essential-supplies" className="hover:text-blue-400 transition-colors">1. Essential Oil Painting Supplies</a></li>
            <li><a href="#brush-techniques" className="hover:text-blue-400 transition-colors">2. Professional Brush Techniques</a></li>
            <li><a href="#color-mixing-oil" className="hover:text-blue-400 transition-colors">3. Advanced Color Mixing for Oil Paint</a></li>
            <li><a href="#paint-application" className="hover:text-blue-400 transition-colors">4. Paint Application Methods</a></li>
            <li><a href="#light-shadow-oil" className="hover:text-blue-400 transition-colors">5. Capturing Light and Shadow</a></li>
            <li><a href="#squint-technique" className="hover:text-blue-400 transition-colors">6. Using the Squint Technique</a></li>
            <li><a href="#common-mistakes" className="hover:text-blue-400 transition-colors">7. Avoiding Common Beginner Mistakes</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Essential Supplies */}
          <section id="essential-supplies" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Essential Oil Painting Supplies</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Starting your <strong className="text-white">oil painting journey</strong> with the right supplies makes all the difference. 
              Quality materials not only improve your results but also make the learning process more enjoyable and less frustrating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">🎨 Essential Oil Paints</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Titanium White</strong> - Most used color in oil painting</li>
                  <li>• <strong className="text-white">Cadmium Red Medium</strong> - Warm, vibrant red</li>
                  <li>• <strong className="text-white">Cadmium Yellow Light</strong> - Clean, bright yellow</li>
                  <li>• <strong className="text-white">Ultramarine Blue</strong> - Perfect cool blue</li>
                  <li>• <strong className="text-white">Burnt Umber</strong> - Warm, natural brown</li>
                  <li>• <strong className="text-white">Raw Umber</strong> - Cool, neutral brown</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">🖌️ Professional Brushes</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Flat brushes</strong> - Sizes 2, 6, 10, 14</li>
                  <li>• <strong className="text-white">Round brushes</strong> - Sizes 2, 6, 10</li>
                  <li>• <strong className="text-white">Filbert brushes</strong> - Size 8 (versatile shape)</li>
                  <li>• <strong className="text-white">Detail brush</strong> - Size 0 or 1</li>
                  <li>• <strong className="text-white">Fan brush</strong> - For textures and blending</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-8">
              <h4 className="text-blue-300 font-bold mb-2">💡 Budget-Friendly Tip</h4>
              <p className="text-gray-300">
                Start with <strong className="text-white">student-grade paints</strong> to learn <strong className="text-white">color mixing</strong> 
                fundamentals, then upgrade to professional-grade paints as your skills develop. The most important investment is 
                <strong className="text-white"> quality brushes</strong> - they&apos;ll last years with proper care.
              </p>
            </div>
          </section>

          {/* Section 2: Brush Techniques */}
          <section id="brush-techniques" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Professional Brush Techniques</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Mastering <strong className="text-white">brush techniques</strong> is fundamental to successful oil painting. 
              Different brush strokes create various textures and effects, allowing you to capture everything from smooth skin 
              tones to rough tree bark.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">1. Loading and Holding the Brush</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Proper Loading</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Load paint on the side of the brush, not the tip</li>
                      <li>• Use about 1/3 to 1/2 of the brush length</li>
                      <li>• Test consistency on the palette first</li>
                      <li>• Clean brush between color changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Brush Grip</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Hold brush like a pencil for detail work</li>
                      <li>• Use overhand grip for loose, expressive strokes</li>
                      <li>• Keep wrist flexible for smooth movement</li>
                      <li>• Stand while painting for better arm movement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">2. Essential Brush Strokes</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded mb-3"></div>
                    <h4 className="text-white font-semibold">Block-In Stroke</h4>
                    <p className="text-gray-300 text-sm">Flat brush, firm pressure. Perfect for establishing basic shapes and <strong className="text-white">color mixing</strong> large areas.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded mb-3"></div>
                    <h4 className="text-white font-semibold">Scumbling</h4>
                    <p className="text-gray-300 text-sm">Light, broken strokes. Creates texture and allows underlayers to show through.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-4 rounded mb-3"></div>
                    <h4 className="text-white font-semibold">Glazing Stroke</h4>
                    <p className="text-gray-300 text-sm">Thin, transparent layers. Perfect for adjusting color temperature and creating depth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-green-300 font-bold mb-2">🖌️ Practice Exercise</h4>
              <p className="text-gray-300">
                Create a <strong className="text-white">brush stroke practice sheet</strong>. Paint different strokes using various brushes 
                and pressures. This helps you understand how each brush behaves and builds muscle memory for <strong className="text-white">paint application</strong>.
              </p>
            </div>
          </section>

          {/* Section 3: Color Mixing for Oil */}
          <section id="color-mixing-oil" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Color Mixing for Oil Paint</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Oil paint color mixing</strong> offers unique advantages over other mediums. The slow drying time 
              allows for extensive blending, and the rich pigments create vibrant, luminous colors that are perfect for realistic paintings.
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Understanding Oil Paint Properties</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-3">Transparency vs Opacity</h4>
                    <p className="text-gray-300 mb-3">
                      Different pigments have varying levels of transparency. <strong className="text-white">Transparent colors</strong> 
                      like Alizarin Crimson are perfect for glazing, while <strong className="text-white">opaque colors</strong> 
                      like Cadmium Red provide solid coverage.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Transparent: Alizarin Crimson, Prussian Blue, Quinacridone Violet</li>
                      <li>• Semi-transparent: Ultramarine Blue, Raw Sienna</li>
                      <li>• Opaque: Cadmium colors, Titanium White, Naples Yellow</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">Drying Rates</h4>
                    <p className="text-gray-300 mb-3">
                      Understanding drying rates helps with <strong className="text-white">paint mixing</strong> and layering techniques. 
                      Fast-drying colors can be used for underpainting, while slow-drying colors allow extended working time.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Fast: Earth colors (Burnt Umber, Raw Sienna)</li>
                      <li>• Medium: Most Cadmium colors, Ultramarine Blue</li>
                      <li>• Slow: Alizarin Crimson, Ivory Black, Zinc White</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Professional Color Mixing Techniques</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-red-400 font-semibold mb-2">1. Gradual Addition Method</h4>
                    <p className="text-gray-300">
                      Always add the <strong className="text-white">stronger color to the weaker</strong>. For example, add Cadmium Red 
                      gradually to Titanium White rather than trying to lighten red with large amounts of white.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-blue-400 font-semibold mb-2">2. Temperature-Conscious Mixing</h4>
                    <p className="text-gray-300">
                      Consider <strong className="text-white">color temperature</strong> when mixing. Adding a warm yellow to create green 
                      will result in a warmer green than adding a cool yellow. Use a <strong className="text-white">color picker</strong> 
                      tool to analyze the temperature of colors in your reference images.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-green-400 font-semibold mb-2">3. Optical vs Physical Mixing</h4>
                    <p className="text-gray-300">
                      <strong className="text-white">Physical mixing</strong> on the palette gives you precise control, while 
                      <strong className="text-white"> optical mixing</strong> on the canvas creates vibrant, luminous effects. 
                      Professional artists use both techniques strategically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Paint Application */}
          <section id="paint-application" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Paint Application Methods</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              How you apply <strong className="text-white">oil paint</strong> dramatically affects the final appearance of your painting. 
              Different application methods create various textures, lighting effects, and visual impacts.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">🎯 Alla Prima (Wet-on-Wet)</h3>
                <p className="text-gray-300 mb-4">
                  Paint applied wet into wet paint, allowing colors to blend naturally. Perfect for <strong className="text-white">color mixing</strong> 
                  directly on the canvas and creating soft transitions.
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-blue-300 font-semibold text-sm mb-2">Best for:</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Plein air painting</li>
                    <li>• Portrait sessions</li>
                    <li>• Quick color studies</li>
                    <li>• Capturing fleeting light effects</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">⏳ Layered Approach</h3>
                <p className="text-gray-300 mb-4">
                  Building up the painting in multiple layers, allowing each to dry before applying the next. Provides maximum control 
                  over <strong className="text-white">light and shadow</strong> relationships.
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-green-300 font-semibold text-sm mb-2">Best for:</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Detailed studio paintings</li>
                    <li>• Complex compositions</li>
                    <li>• Photorealistic work</li>
                    <li>• Fine art commissions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Step-by-Step Application Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Block In Major Shapes</h4>
                    <p className="text-gray-300 text-sm">Use thin paint to establish basic shapes and proportions. This is your roadmap for the painting.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Establish Value Structure</h4>
                    <p className="text-gray-300 text-sm">Focus on <strong className="text-white">light and shadow</strong> patterns. Use the <strong className="text-white">squint technique</strong> to simplify values.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Refine Colors and Forms</h4>
                    <p className="text-gray-300 text-sm">Develop local colors while maintaining the established value structure. Pay attention to color temperature shifts.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Add Details and Accents</h4>
                    <p className="text-gray-300 text-sm">Final details, highlights, and refined edges. Less is more - don&apos;t overwork the painting.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Light and Shadow */}
          <section id="light-shadow-oil" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Capturing Light and Shadow in Oil Paint</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Understanding <strong className="text-white">light and shadow</strong> is crucial for creating convincing, three-dimensional 
              paintings. Oil paint&apos;s blending capabilities make it perfect for capturing subtle light transitions and dramatic shadow effects.
            </p>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">The Five Elements of Light</h3>
              
              <div className="grid md:grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-2 border-2 border-gray-600"></div>
                  <h4 className="text-white font-semibold text-sm">Highlight</h4>
                  <p className="text-gray-400 text-xs">Brightest point</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 border-2 border-gray-600"></div>
                  <h4 className="text-white font-semibold text-sm">Light</h4>
                  <p className="text-gray-400 text-xs">Planes facing light</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2 border-2 border-gray-600"></div>
                  <h4 className="text-white font-semibold text-sm">Halftone</h4>
                  <p className="text-gray-400 text-xs">Transition area</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-2 border-2 border-gray-600"></div>
                  <h4 className="text-white font-semibold text-sm">Core Shadow</h4>
                  <p className="text-gray-400 text-xs">Darkest shadow</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-2 border-2 border-gray-600"></div>
                  <h4 className="text-white font-semibold text-sm">Reflected Light</h4>
                  <p className="text-gray-400 text-xs">Light bouncing back</p>
                </div>
              </div>

              <p className="text-gray-300">
                Each element has its own <strong className="text-white">color temperature</strong> and intensity. Generally, 
                lights are warmer and shadows are cooler, but this can vary based on the light source and surrounding environment.
              </p>
            </div>

            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-8">
              <h4 className="text-purple-300 font-bold mb-2">🔍 Pro Technique: Color Temperature in Light and Shadow</h4>
              <p className="text-gray-300">
                Use a <strong className="text-white">digital color picker</strong> to analyze reference photos and identify the exact 
                color temperatures in light and shadow areas. This helps train your eye to see subtle temperature shifts that make 
                paintings more convincing and professional.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-orange-400 font-semibold mb-3">Painting Warm Light Effects</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Use <strong className="text-white">Cadmium Yellow Light</strong> mixed with white for bright sunlight highlights</li>
                  <li>• Add <strong className="text-white">Cadmium Orange</strong> to warm up midtones in sunny conditions</li>
                  <li>• <strong className="text-white">Color mixing</strong> tip: Warm highlights often need a touch of red or orange</li>
                  <li>• Shadows under warm light tend to be cooler (add blues or purples)</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-blue-400 font-semibold mb-3">Painting Cool Light Effects</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Use <strong className="text-white">Ultramarine Blue</strong> mixed with white for overcast sky lighting</li>
                  <li>• Add <strong className="text-white">Cerulean Blue</strong> to create atmospheric perspective</li>
                  <li>• Cool light creates warmer shadows (add yellows and oranges to shadow mixtures)</li>
                  <li>• Perfect for indoor scenes with window light or early morning paintings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Squint Technique */}
          <section id="squint-technique" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Mastering the Squint Technique</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <strong className="text-white">squint technique</strong> is one of the most powerful tools in an artist&apos;s arsenal. 
              By squinting at your subject, you simplify complex details and focus on the most important <strong className="text-white">light and shadow</strong> 
              patterns that create form and depth.
            </p>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Why Squinting Works</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Visual Benefits</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Simplifies values</strong> - Eliminates distracting details</li>
                    <li>• <strong className="text-white">Reveals patterns</strong> - Shows major light and dark shapes</li>
                    <li>• <strong className="text-white">Improves composition</strong> - Highlights the most important elements</li>
                    <li>• <strong className="text-white">Reduces color complexity</strong> - Focuses on temperature relationships</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-3">Practical Applications</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Initial composition</strong> - Plan your painting&apos;s structure</li>
                    <li>• <strong className="text-white">Color checking</strong> - Compare mixed colors to the subject</li>
                    <li>• <strong className="text-white">Problem solving</strong> - Fix areas that don&apos;t look right</li>
                    <li>• <strong className="text-white">Final assessment</strong> - Evaluate the overall impact</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-xl p-8 border border-yellow-500/20">
                <h3 className="text-yellow-300 font-bold text-xl mb-4">Step-by-Step Squint Analysis</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Initial Squint Assessment</h4>
                      <p className="text-gray-300 text-sm">
                        Squint at your reference and identify 3-4 major value shapes. Ignore all details and focus only on the 
                        biggest <strong className="text-white">light and shadow</strong> patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Block in Major Shapes</h4>
                      <p className="text-gray-300 text-sm">
                        Using thin paint, block in these major shapes on your canvas. Don&apos;t worry about local colors yet - 
                        focus on getting the <strong className="text-white">value relationships</strong> correct.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Continuous Checking</h4>
                      <p className="text-gray-300 text-sm">
                        Throughout the painting process, regularly <strong className="text-white">squint</strong> at both your 
                        reference and your painting to ensure the major patterns remain strong and clear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-purple-400 font-semibold mb-3">🖥️ Digital Squint Analysis</h4>
                <p className="text-gray-300">
                  Use digital tools like our <strong className="text-white">squint analysis feature</strong> to see exactly what 
                  squinting reveals in your reference images. This helps train your eye to see value patterns more clearly and 
                  speeds up your learning process significantly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Common Mistakes */}
          <section id="common-mistakes" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Avoiding Common Beginner Mistakes</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Learning from common mistakes can accelerate your progress in <strong className="text-white">oil painting</strong>. 
              Here are the most frequent issues beginners encounter and how to avoid them.
            </p>

            <div className="space-y-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
                <h3 className="text-red-300 font-bold text-xl mb-6">❌ Color Mixing Mistakes</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Muddy Colors from Overmixing</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-red-400">Problem:</strong> Colors become dull and gray from mixing too many pigments together.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-green-400">Solution:</strong> Limit your <strong className="text-white">color mixing</strong> to 2-3 pigments maximum. 
                      Use a limited palette to force clean mixtures.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Using Black for Shadows</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-red-400">Problem:</strong> Shadows look flat and lifeless when painted with black.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-green-400">Solution:</strong> Mix rich shadow colors using complementary colors. 
                      Add the complement of your light color to create natural-looking shadows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-8">
                <h3 className="text-blue-300 font-bold text-xl mb-6">❌ Value and Light Mistakes</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Ignoring the Squint Test</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-red-400">Problem:</strong> Getting lost in details without establishing strong value patterns.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-green-400">Solution:</strong> Use the <strong className="text-white">squint technique</strong> regularly 
                      throughout your painting process. Establish major <strong className="text-white">light and shadow</strong> patterns first.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Inconsistent Light Source</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-red-400">Problem:</strong> Objects in the painting appear lit from different directions.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-green-400">Solution:</strong> Establish your light source direction early and stick to it. 
                      Use a <strong className="text-white">color picker</strong> tool to analyze consistent lighting in reference photos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8">
                <h3 className="text-green-300 font-bold text-xl mb-6">❌ Technical Application Mistakes</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Overworking the Paint</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-red-400">Problem:</strong> Continuously working into wet paint until it becomes muddy.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-green-400">Solution:</strong> Make decisive brush strokes and leave them alone. 
                      Learn when to stop and let the paint do the work.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Wrong Paint Consistency</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <strong className="text-red-400">Problem:</strong> Paint is either too thick and unworkable or too thin and lacks body.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-green-400">Solution:</strong> Adjust consistency with medium or solvent. 
                      Thick for textural areas, thin for glazing and initial blocking in.
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Practice These Techniques?</h3>
            <p className="text-gray-300 mb-6">
              Use our free <strong className="text-white">color analysis tools</strong> to analyze reference images, practice 
              <strong className="text-white"> color mixing</strong>, and study <strong className="text-white">light and shadow</strong> 
              patterns in real photographs.
            </p>
            <Link 
              href="/" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Try Our Color Analysis Tools
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-700">
            <div>
              <h4 className="text-white font-bold mb-3">Related Oil Painting Tutorials</h4>
              <ul className="space-y-2">
                <li><a href="/tutorials/color-theory" className="text-blue-400 hover:text-blue-300 transition-colors">Color Theory for Oil Painters</a></li>
                <li><a href="/tutorials/value-studies" className="text-blue-400 hover:text-blue-300 transition-colors">Mastering Light and Shadow</a></li>
                <li><a href="/tutorials/portrait-painting" className="text-blue-400 hover:text-blue-300 transition-colors">Portrait Painting Techniques</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Practice Tools</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-green-400 hover:text-green-300 transition-colors">Color Picker Tool</Link></li>
                <li><Link href="/" className="text-green-400 hover:text-green-300 transition-colors">Squint Analysis Feature</Link></li>
                <li><Link href="/" className="text-green-400 hover:text-green-300 transition-colors">Value Map Generator</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}