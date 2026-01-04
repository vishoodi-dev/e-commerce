import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/assets'

const Product = () => {
  // Extract product id from URL to fetch corresponding data from sample assets
  const { id } = useParams()
  const product = products.find(p => p._id === id)

  // Basic guard if product not found (kept simple for demo)
  if (!product) {
    return (
      <section className="py-10">
        <p className="text-center text-sm text-gray-600">Product not found.</p>
      </section>
    )
  }

  // Gallery state kept minimal: show first image as active by default
  const [activeIndex, setActiveIndex] = React.useState(0)
  const images = product.image ?? []
  const activeSrc = images[activeIndex] ?? images[0]
  const [quantity, setQuantity] = React.useState(1)

  return (
    // Two-column layout:
    // - Left: image gallery for visual evaluation (reduces decision fatigue by surfacing imagery)
    // - Right: product information with a sticky CTA to keep the action visible
    <section className="py-6 md:py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* LEFT: IMAGE GALLERY */}
        <div>
          {/* Main image uses a stable aspect and rounded corners to align with card aesthetics */}
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            <img
              src={activeSrc}
              alt={product.name}
              className="h-[360px] w-full object-cover md:h-[520px]"
              loading="lazy"
            />
          </div>

          {/* Thumbnails: compact row for quick comparison without overwhelming the user */}
          <div className="mt-3 grid grid-cols-5 gap-2">
            {images.map((src, idx) => (
              <button
                key={idx}
                type="button"
                // Small hit targets with clear focus styles to aid keyboard users
                className={`overflow-hidden rounded-lg border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${idx === activeIndex ? 'border-black' : 'border-black/10'}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={src} alt="" className="h-16 w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO + STICKY CTA */}
        <div className="space-y-4 md:space-y-5">
          {/* TYPOGRAPHY HIERARCHY:
              - Name prominent yet concise
              - Price emphasized for clarity
              - Supporting meta below to avoid clutter */}
          <div className="space-y-2">
            <h1 className="text-lg font-semibold text-gray-900 md:text-xl">{product.name}</h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <span className="text-xs text-amber-600">★ 4.5</span>
            </div>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>

          {/* Quantity selector: simple and explicit to reduce cognitive load */}
          <div className="space-y-1">
            <label htmlFor="qty" className="block text-xs font-medium text-gray-700">
              Quantity
            </label>
            <div className="inline-flex items-center rounded-lg border border-black/10 bg-white">
              <button
                type="button"
                className="px-3 py-2 text-sm disabled:opacity-40"
                aria-label="Decrease quantity"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                −
              </button>
              <input
                id="qty"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                className="w-14 border-l border-r border-black/10 py-2 text-center text-sm outline-none"
                aria-live="polite"
              />
              <button
                type="button"
                className="px-3 py-2 text-sm"
                aria-label="Increase quantity"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Sticky CTA:
              The container sticks on larger screens to keep the primary action persistently available,
              highlighting the Add to Cart and minimizing scrolling friction */}
          <div className="md:sticky md:top-6">
            <button
              type="button"
              className="w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              aria-label={`Add ${product.name} to cart`}
              onClick={() => console.log('Add to Cart:', product._id, 'qty:', quantity)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
