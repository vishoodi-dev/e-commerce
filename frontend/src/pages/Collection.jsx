import React from 'react'
import { products } from '../assets/assets'
import ProductGrid from '../components/ProductGrid'

const Collection = () => {
  return (
    // Page container with reasonable horizontal padding handled by parent App container.
    // We add vertical spacing here to separate the grid from surrounding content.
    <section className="py-6 md:py-8">
      {/* Heading kept minimal to keep the focus on the product grid */}
      <h2 className="mb-4 text-lg font-semibold text-gray-900">All Products</h2>

      {/* Product listing grid using sample data from assets.js */}
      <ProductGrid products={products} />
    </section>
  )
}

export default Collection
