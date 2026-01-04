import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Card for a single product focused on fast scannability and a clear CTA
// SPACING: Compact and consistent spacing to enable rapid comparison and reduce visual noise
// TYPOGRAPHY: Clear hierarchy — name (secondary), price (primary), rating (supporting)
// HOVER: Subtle elevation on hover to indicate interactivity without causing layout shift
const ProductCard = ({ product, onAddToCart }) => {
  const cart = (() => {
    try { return useCart() } catch { return null }
  })()
  // Fallbacks for robustness (assets data should be present, but we guard just in case)
  const imageSrc = product?.image?.[0]
  const name = product?.name ?? 'Product'
  const price = product?.price ?? 0
  // Simple static rating for demo purposes since dataset lacks ratings
  const ratingLabel = '★ 4.5'

  return (
    // Card container:
    // - Rounded corners for a softer, approachable surface area
    // - Border + base shadow to clearly separate modules for fast scanning
    // - Hover: slight translate + stronger shadow for tactile elevation; transition smooths the change
    <div
      className="group rounded-xl border border-black/10 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-within:shadow-lg"
      role="article"
    >
      {/* Make image/name clickable to reduce friction when seeking details */}
      <Link to={`/product/${product?._id}`} className="block">
        {/* Media first: image at the top anchors the card and speeds recognition
            The fixed height keeps rows visually balanced across the grid */}
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={imageSrc}
            alt={name}
            className="h-48 w-full object-cover transition duration-200 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Content:
          p-4 provides comfortable breathing room; space-y-2 maintains a consistent vertical rhythm */}
      <div className="p-4 space-y-2">
        {/* TYPOGRAPHY HIERARCHY:
            - Name: text-sm + semibold = readable but secondary to price */}
        <Link to={`/product/${product?._id}`} className="block">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Horizontal meta row: compact density improves side-by-side comparison */}
        <div className="flex items-center justify-between">
          {/* Price (primary): larger size + bold to emphasize decision-critical information */}
          <span className="text-base font-bold text-gray-900">${price}</span>
          {/* Rating (supporting): smaller, subdued to avoid competing with price */}
          <span className="text-xs text-amber-600">{ratingLabel}</span>
        </div>

        {/* CTA:
            - Full-width button increases hit area and scannability
            - Accessible label announces action + product name to screen readers
            - Focus-visible ring ensures clear keyboard focus indication */}
        <button
          type="button"
          className="mt-2 w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          aria-label={`Add ${name} to cart`}
          onClick={() => {
            if (onAddToCart) {
              onAddToCart(product)
            } else if (cart) {
              cart.addItem(product, 1)
              cart.openDrawer()
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard


