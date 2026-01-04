import React from 'react'
import ProductCard from './ProductCard'

// Grid that adapts to device width:
// - 2 columns on small screens for readability and comfortable tap targets
// - 4 columns on desktop to increase information density and scannability
// - Uniform gaps maintain consistent rhythm and visual balance
const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div
      className="
        grid 
        grid-cols-2           /* 2 columns on mobile for readability */
        gap-4                 /* Tight but breathable spacing between cards */
        md:grid-cols-4        /* 4 columns on desktop to aid scanning */
        md:gap-6              /* Slightly larger gaps on wider screens */
      "
      role="list"
    >
      {products?.map((product) => (
        <div key={product._id} role="listitem">
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  )
}

export default ProductGrid


