import { getLuminance, isWarmColor, rgbToHex } from './utils'

export interface ColorInfo {
  hex: string
  rgb: { r: number; g: number; b: number }
  count: number
}

export interface ImageAnalysis {
  dominantColors: ColorInfo[]
  valueMap: string
  temperatureMap: string
  squintLevels: string[]
}

export class ImageProcessor {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')!
  }

  async processImage(imageFile: File): Promise<ImageAnalysis> {
    const img = await this.loadImage(imageFile)
    
    // Resize image for processing (max 800px width)
    const { canvas, ctx } = this.resizeImage(img, 800)
    this.canvas = canvas
    this.ctx = ctx

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    
    return {
      dominantColors: this.extractDominantColors(imageData, 6),
      valueMap: this.createValueMap(imageData),
      temperatureMap: this.createTemperatureMap(imageData),
      squintLevels: this.createSquintLevels(img)
    }
  }

  private loadImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = URL.createObjectURL(file)
    })
  }

  private resizeImage(img: HTMLImageElement, maxWidth: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    
    const ratio = Math.min(maxWidth / img.width, maxWidth / img.height)
    canvas.width = img.width * ratio
    canvas.height = img.height * ratio
    
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    return { canvas, ctx }
  }

  extractDominantColors(imageData: ImageData, numColors: number): ColorInfo[] {
    const pixels = imageData.data
    const colors: { r: number; g: number; b: number }[] = []
    
    // Sample pixels (every 8th pixel for better performance while maintaining quality)
    for (let i = 0; i < pixels.length; i += 32) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const alpha = pixels[i + 3]
      
      if (alpha < 128) continue // Skip transparent pixels
      
      colors.push({ r, g, b })
    }
    
    if (colors.length === 0) return []
    
    // Use k-means clustering to find dominant colors
    const clusters = this.kMeansCluster(colors, numColors)
    
    return clusters.map((cluster) => {
      const centroid = cluster.centroid
      const hex = rgbToHex(
        Math.round(centroid.r),
        Math.round(centroid.g),
        Math.round(centroid.b)
      )
      
      return {
        hex,
        rgb: {
          r: Math.round(centroid.r),
          g: Math.round(centroid.g),
          b: Math.round(centroid.b)
        },
        count: cluster.points.length
      }
    }).sort((a, b) => b.count - a.count) // Sort by frequency
  }

  private kMeansCluster(colors: { r: number; g: number; b: number }[], k: number, maxIterations: number = 20) {
    if (colors.length <= k) {
      return colors.map(color => ({
        centroid: color,
        points: [color]
      }))
    }

    // Initialize centroids using k-means++ for better initial placement
    const centroids = this.initializeCentroids(colors, k)
    
    for (let iteration = 0; iteration < maxIterations; iteration++) {
      // Assign points to nearest centroid
      const clusters = centroids.map(centroid => ({
        centroid,
        points: [] as { r: number; g: number; b: number }[]
      }))
      
      for (const color of colors) {
        let minDistance = Infinity
        let closestClusterIndex = 0
        
        for (let i = 0; i < centroids.length; i++) {
          const distance = this.colorDistance(color, centroids[i])
          if (distance < minDistance) {
            minDistance = distance
            closestClusterIndex = i
          }
        }
        
        clusters[closestClusterIndex].points.push(color)
      }
      
      // Update centroids
      let converged = true
      for (let i = 0; i < clusters.length; i++) {
        if (clusters[i].points.length === 0) continue
        
        const newCentroid = this.calculateCentroid(clusters[i].points)
        const distance = this.colorDistance(centroids[i], newCentroid)
        
        if (distance > 1) { // Threshold for convergence
          converged = false
        }
        
        centroids[i] = newCentroid
        clusters[i].centroid = newCentroid
      }
      
      if (converged) break
    }
    
    // Final assignment
    const finalClusters = centroids.map(centroid => ({
      centroid,
      points: [] as { r: number; g: number; b: number }[]
    }))
    
    for (const color of colors) {
      let minDistance = Infinity
      let closestClusterIndex = 0
      
      for (let i = 0; i < centroids.length; i++) {
        const distance = this.colorDistance(color, centroids[i])
        if (distance < minDistance) {
          minDistance = distance
          closestClusterIndex = i
        }
      }
      
      finalClusters[closestClusterIndex].points.push(color)
    }
    
    // Filter out empty clusters and return non-empty ones
    return finalClusters.filter(cluster => cluster.points.length > 0)
  }

  private initializeCentroids(colors: { r: number; g: number; b: number }[], k: number) {
    const centroids: { r: number; g: number; b: number }[] = []
    
    // Choose first centroid randomly
    centroids.push(colors[Math.floor(Math.random() * colors.length)])
    
    // Choose remaining centroids using k-means++ method
    for (let i = 1; i < k; i++) {
      const distances = colors.map(color => {
        let minDistance = Infinity
        for (const centroid of centroids) {
          const distance = this.colorDistance(color, centroid)
          minDistance = Math.min(minDistance, distance)
        }
        return minDistance * minDistance // Square the distance for k-means++
      })
      
      const totalDistance = distances.reduce((sum, d) => sum + d, 0)
      const random = Math.random() * totalDistance
      
      let cumulativeDistance = 0
      for (let j = 0; j < colors.length; j++) {
        cumulativeDistance += distances[j]
        if (cumulativeDistance >= random) {
          centroids.push(colors[j])
          break
        }
      }
    }
    
    return centroids
  }

  private colorDistance(color1: { r: number; g: number; b: number }, color2: { r: number; g: number; b: number }): number {
    // Use weighted Euclidean distance that considers human color perception
    const dr = color1.r - color2.r
    const dg = color1.g - color2.g
    const db = color1.b - color2.b
    
    // Weights based on human eye sensitivity (more sensitive to green)
    return Math.sqrt(0.3 * dr * dr + 0.59 * dg * dg + 0.11 * db * db)
  }

  private calculateCentroid(points: { r: number; g: number; b: number }[]): { r: number; g: number; b: number } {
    if (points.length === 0) return { r: 0, g: 0, b: 0 }
    
    const sum = points.reduce(
      (acc, point) => ({
        r: acc.r + point.r,
        g: acc.g + point.g,
        b: acc.b + point.b
      }),
      { r: 0, g: 0, b: 0 }
    )
    
    return {
      r: sum.r / points.length,
      g: sum.g / points.length,
      b: sum.b / points.length
    }
  }

  private createValueMap(imageData: ImageData): string {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.width = imageData.width
    canvas.height = imageData.height
    
    const newImageData = ctx.createImageData(imageData.width, imageData.height)
    const pixels = imageData.data
    const newPixels = newImageData.data
    
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const alpha = pixels[i + 3]
      
      const luminance = getLuminance(r, g, b)
      
      newPixels[i] = luminance     // R
      newPixels[i + 1] = luminance // G
      newPixels[i + 2] = luminance // B
      newPixels[i + 3] = alpha     // A
    }
    
    ctx.putImageData(newImageData, 0, 0)
    return canvas.toDataURL()
  }

  private createTemperatureMap(imageData: ImageData): string {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.width = imageData.width
    canvas.height = imageData.height
    
    const newImageData = ctx.createImageData(imageData.width, imageData.height)
    const pixels = imageData.data
    const newPixels = newImageData.data
    
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const alpha = pixels[i + 3]
      
      const isWarm = isWarmColor(r, g, b)
      
      if (isWarm) {
        // Warm overlay (reddish)
        newPixels[i] = Math.min(255, r + 50)     // R
        newPixels[i + 1] = Math.max(0, g - 20)   // G
        newPixels[i + 2] = Math.max(0, b - 20)   // B
      } else {
        // Cool overlay (bluish)
        newPixels[i] = Math.max(0, r - 20)       // R
        newPixels[i + 1] = Math.max(0, g - 10)   // G
        newPixels[i + 2] = Math.min(255, b + 50) // B
      }
      newPixels[i + 3] = alpha // A
    }
    
    ctx.putImageData(newImageData, 0, 0)
    return canvas.toDataURL()
  }

  private createSquintLevels(img: HTMLImageElement): string[] {
    const isMobile = this.detectMobile()
    
    if (isMobile) {
      return this.createSquintLevelsMobile(img)
    } else {
      return this.createSquintLevelsDesktop(img)
    }
  }

  private detectMobile(): boolean {
    // Check for mobile user agents
    const userAgent = navigator.userAgent.toLowerCase()
    const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone']
    const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword))
    
    // Check for touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    // Check screen size (mobile-like dimensions)
    const isSmallScreen = window.innerWidth <= 768
    
    return isMobileUA || (isTouchDevice && isSmallScreen)
  }

  private createSquintLevelsDesktop(img: HTMLImageElement): string[] {
    const levels = []
    const blurRadii = [16, 32, 48, 64]
    
    for (const radius of blurRadii) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      canvas.width = img.width
      canvas.height = img.height
      
      ctx.filter = `blur(${radius}px)`
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      levels.push(canvas.toDataURL())
    }
    
    return levels
  }

  private createSquintLevelsMobile(img: HTMLImageElement): string[] {
    const levels = []
    const blurRadii = [4, 8, 12, 16] // Conservative blur values for mobile
    
    for (const radius of blurRadii) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      
      // Use smaller canvas size for mobile performance
      const scale = Math.min(1, 400 / Math.max(img.width, img.height))
      canvas.width = img.width * scale
      canvas.height = img.height * scale
      
      // Try CSS filter first (simpler approach)
      try {
        ctx.filter = `blur(${radius}px)`
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        
        // Test if the filter worked by checking if canvas has content
        const testData = ctx.getImageData(0, 0, 1, 1)
        if (testData.data[3] === 0) {
          throw new Error('CSS filter failed')
        }
        
        levels.push(canvas.toDataURL())
      } catch (error) {
        // Fallback: Create a simple blur effect by drawing multiple times with opacity
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 0.3
        
        // Draw the image multiple times with slight offsets to create blur effect
        const iterations = Math.min(radius, 8)
        for (let i = 0; i < iterations; i++) {
          const offset = i * 0.5
          ctx.drawImage(img, -offset, -offset, canvas.width + offset * 2, canvas.height + offset * 2)
          ctx.drawImage(img, offset, -offset, canvas.width - offset * 2, canvas.height + offset * 2)
          ctx.drawImage(img, -offset, offset, canvas.width + offset * 2, canvas.height - offset * 2)
          ctx.drawImage(img, offset, offset, canvas.width - offset * 2, canvas.height - offset * 2)
        }
        
        ctx.globalAlpha = 1.0
        levels.push(canvas.toDataURL())
      }
    }
    
    return levels
  }

  private applyBoxBlur(imageData: ImageData, radius: number): ImageData {
    const { width, height, data } = imageData
    const output = new ImageData(width, height)
    const outputData = output.data
    
    // Copy original data
    for (let i = 0; i < data.length; i++) {
      outputData[i] = data[i]
    }
    
    // Apply horizontal blur
    this.boxBlurHorizontal(outputData, width, height, radius)
    
    // Apply vertical blur
    this.boxBlurVertical(outputData, width, height, radius)
    
    return output
  }

  private boxBlurHorizontal(data: Uint8ClampedArray, width: number, height: number, radius: number): void {
    const temp = new Uint8ClampedArray(data.length)
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0
        
        for (let dx = -radius; dx <= radius; dx++) {
          const nx = Math.max(0, Math.min(width - 1, x + dx))
          const idx = (y * width + nx) * 4
          
          r += data[idx]
          g += data[idx + 1]
          b += data[idx + 2]
          a += data[idx + 3]
          count++
        }
        
        const idx = (y * width + x) * 4
        temp[idx] = r / count
        temp[idx + 1] = g / count
        temp[idx + 2] = b / count
        temp[idx + 3] = a / count
      }
    }
    
    // Copy back to original data
    for (let i = 0; i < data.length; i++) {
      data[i] = temp[i]
    }
  }

  private boxBlurVertical(data: Uint8ClampedArray, width: number, height: number, radius: number): void {
    const temp = new Uint8ClampedArray(data.length)
    
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0
        
        for (let dy = -radius; dy <= radius; dy++) {
          const ny = Math.max(0, Math.min(height - 1, y + dy))
          const idx = (ny * width + x) * 4
          
          r += data[idx]
          g += data[idx + 1]
          b += data[idx + 2]
          a += data[idx + 3]
          count++
        }
        
        const idx = (y * width + x) * 4
        temp[idx] = r / count
        temp[idx + 1] = g / count
        temp[idx + 2] = b / count
        temp[idx + 3] = a / count
      }
    }
    
    // Copy back to original data
    for (let i = 0; i < data.length; i++) {
      data[i] = temp[i]
    }
  }
}
