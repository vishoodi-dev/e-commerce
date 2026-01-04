import React from 'react'
import { useCart } from '../context/CartContext'

// Slide-in cart drawer from the right
// UX rationale:
// - Non-blocking panel preserves page context while enabling quick cart edits
// - Persistent totals + prominent checkout CTA reduce decision fatigue
// - Inline quantity controls minimize steps and cognitive load
const CartDrawer = () => {
  const { isDrawerOpen, closeDrawer, items, updateQuantity, removeItem, total } = useCart()

  // Format currency simply for demo; real app would localize
  const formatPrice = (n) => `$${n.toFixed(2)}`

  return (
    // Backdrop: click-to-dismiss to provide an easy escape hatch without hunting controls
    <div
      className={`
        fixed inset-0 z-[70]
        ${isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}
      `}
      aria-hidden={!isDrawerOpen}
    >
      <div
        className={`
          absolute inset-0 bg-black/40 transition-opacity
          ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={closeDrawer}
      />

      {/* Panel: anchored to right, slide-in for spatial continuity */}
      <aside
        className={`
          absolute right-0 top-0 h-full w-full sm:w-[28rem]
          bg-white shadow-xl transition-transform duration-300
          ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col
        `}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header with simple title and a clear close affordance */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <h2 className="text-base font-semibold text-gray-900">Your Cart</h2>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            onClick={closeDrawer}
            aria-label="Close cart"
          >
            Close
          </button>
        </div>

        {/* Scrollable items area keeps footer visible to highlight checkout path */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item._id} className="flex gap-3 rounded-lg border border-black/10 p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 flex-none rounded-md object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    {/* Minimal hierarchy: name first, then price; keeps decision info prominent */}
                    <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{formatPrice(item.price)}</p>

                    {/* Inline quantity controls reduce navigation cost and keep context */}
                    <div className="mt-2 inline-flex items-center rounded-lg border border-black/10">
                      <button
                        type="button"
                        className="px-3 py-1.5 text-sm disabled:opacity-40"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="w-10 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-3 py-1.5 text-sm"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove option remains visible but lightweight to avoid accidental clicks */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      type="button"
                      className="text-xs text-gray-500 hover:text-red-600"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item._id)}
                    >
                      Remove
                    </button>
                    <div className="text-sm font-semibold text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer: sticky summary keeps the total and CTA persistently in view */}
        <div className="border-t border-black/10 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">Total</span>
            <span className="text-lg font-bold text-gray-900">{formatPrice(total)}</span>
          </div>
          {/* Highlighted CTA: high-contrast, full-width, and keyboard-accessible */}
          <button
            type="button"
            className="w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 disabled:opacity-60"
            disabled={items.length === 0}
            aria-disabled={items.length === 0}
            aria-label="Proceed to checkout"
            onClick={() => console.log('Checkout')}
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer


