import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Art Tutorials & Color Theory Blog | Free Painting Tips for Artists',
  description: 'Free art tutorials, color theory guides, oil painting tips, and watercolor techniques. Learn from professional artists with step-by-step painting tutorials and color analysis guides.',
  keywords: 'art tutorials, color theory, oil painting tips, watercolor techniques, painting tutorials, art blog, color mixing, value studies, painting guides, traditional art',
  openGraph: {
    title: 'Art Tutorials & Color Theory Blog | Professional Painting Tips',
    description: 'Free art tutorials and professional painting tips for oil painters, watercolor artists, and traditional painters.',
    type: 'website',
  },
}

export default function BlogPage() {
  const featuredArticles = [
    {
      title: "Color Theory Basics for Artists",
      description: "Master the fundamentals of color relationships, temperature, and mixing techniques essential for creating professional-quality paintings.",
      category: "Color Theory",
      readTime: "15 min read",
      image: "🎨",
      slug: "/tutorials/color-theory",
      excerpt: "Understanding color relationships is the foundation of successful painting. Learn how warm and cool colors interact, create harmonious color schemes, and master professional color mixing techniques.",
      keywords: "color theory, color mixing, warm cool colors, complementary colors"
    },
    {
      title: "Mastering Value Studies",
      description: "Learn how to create powerful value studies that form the foundation of professional-quality paintings.",
      category: "Fundamentals",
      readTime: "13 min read",
      image: "⚫",
      slug: "/tutorials/value-studies",
      excerpt: "Master the art of seeing and painting values correctly. Discover why value is more important than color and how to use value studies to create depth, form, and dramatic lighting in your paintings.",
      keywords: "value studies, painting values, light shadow, realistic painting"
    },
    {
      title: "Oil Painting Techniques for Artists",
      description: "Essential oil painting techniques every artist should master, from brush handling to advanced color mixing.",
      category: "Oil Painting",
      readTime: "16 min read",
      image: "🖌️",
      slug: "/tutorials/oil-painting",
      excerpt: "Master professional oil painting techniques used by master artists. Learn proper brush handling, color mixing fundamentals, glazing techniques, and essential painting methods.",
      keywords: "oil painting, painting techniques, glazing, brush techniques"
    },
    {
      title: "Watercolor Color Mixing Guide",
      description: "Professional watercolor color mixing techniques for creating vibrant, luminous paintings.",
      category: "Watercolor",
      readTime: "12 min read",
      image: "💧",
      slug: "/tutorials/watercolor-mixing",
      excerpt: "Unlock the secrets of transparent watercolor mixing. Learn wet-on-wet techniques, glazing methods, and how to achieve the luminous quality that makes watercolor paintings so captivating.",
      keywords: "watercolor painting, watercolor mixing, transparent colors, wet on wet"
    },
    {
      title: "Digital Color Tools for Artists",
      description: "How to use digital color analysis tools to improve your traditional and digital paintings.",
      category: "Digital Tools",
      readTime: "16 min read",
      image: "💻",
      slug: "/tutorials/digital-color-tools",
      excerpt: "Discover how modern color picker tools and digital analysis can revolutionize your art process. Learn to use digital references effectively while maintaining authentic artistic quality.",
      keywords: "digital color tools, color picker, color analysis, art technology"
    },
    {
      title: "Portrait Painting Skin Tones",
      description: "Master the complexities of painting realistic skin tones in portraits with professional color mixing techniques.",
      category: "Portrait Painting",
      readTime: "18 min read",
      image: "👤",
      slug: "/tutorials/portrait-painting",
      excerpt: "Painting convincing skin tones is one of the most challenging aspects of portraiture. Learn professional flesh color recipes, understand skin undertones, and master diverse representation.",
      keywords: "portrait painting, skin tones, flesh colors, portrait techniques"
    }
  ]

  const categories = [
    { name: "Color Theory", count: 12, color: "bg-red-500" },
    { name: "Oil Painting", count: 18, color: "bg-blue-500" },
    { name: "Watercolor", count: 14, color: "bg-green-500" },
    { name: "Value Studies", count: 8, color: "bg-purple-500" },
    { name: "Portrait Painting", count: 10, color: "bg-orange-500" },
    { name: "Digital Tools", count: 6, color: "bg-teal-500" }
  ]

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
              <Link href="/blog" className="text-blue-400 font-semibold">
                Tutorials
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border-b border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-green-500/5"></div>
        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Art Tutorials & Color Theory Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Free <strong className="text-white">art tutorials</strong>, <strong className="text-white">color theory guides</strong>, 
              and <strong className="text-white">professional painting tips</strong> for oil painters, watercolor artists, 
              and traditional painters. Learn from professional artists with step-by-step guides.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer group">
                <div className={`w-3 h-3 ${category.color} rounded-full mb-2`}></div>
                <h3 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} articles</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Art Tutorials</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <Link href={featuredArticles[0].slug} className="lg:col-span-2 block">
              <article className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden border border-gray-600 hover:border-gray-500 transition-all duration-300 group cursor-pointer h-full">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{featuredArticles[0].image}</span>
                    <div>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{featuredArticles[0].category}</span>
                      <p className="text-gray-400 text-sm mt-1">{featuredArticles[0].readTime}</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Keywords: <span className="text-blue-400">{featuredArticles[0].keywords}</span>
                    </div>
                    <span className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">Read More →</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Secondary Featured Articles */}
            {featuredArticles.slice(1, 3).map((article, index) => (
              <Link key={index} href={article.slug} className="block">
                <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{article.image}</span>
                      <div>
                        <span className={`${index === 0 ? 'bg-purple-500' : 'bg-blue-500'} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                          {article.category}
                        </span>
                        <p className="text-gray-400 text-xs mt-1">{article.readTime}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">Read More →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* All Articles Grid */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-12">All Painting Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(3).map((article, index) => (
              <Link key={index} href={article.slug} className="block">
                <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{article.image}</span>
                      <div>
                        <span className={`${
                          article.category === 'Watercolor' ? 'bg-green-500' :
                          article.category === 'Digital Tools' ? 'bg-teal-500' :
                          'bg-orange-500'
                        } text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                          {article.category}
                        </span>
                        <p className="text-gray-400 text-xs mt-1">{article.readTime}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {article.description}
                    </p>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-400 mb-2">Keywords: <span className="text-blue-400">{article.keywords}</span></p>
                      <span className="text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">Read Tutorial →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 border border-blue-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Weekly Art Tips</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join over 10,000 artists receiving weekly <strong className="text-white">color theory tips</strong>, 
            <strong className="text-white"> painting tutorials</strong>, and <strong className="text-white">professional techniques</strong> 
            delivered to your inbox.
          </p>
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-600 max-w-md w-full">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email for art tips" 
                  className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2">Free tutorials • Unsubscribe anytime • No spam</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}