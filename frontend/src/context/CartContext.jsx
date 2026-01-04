import React from 'react'

// Lightweight cart context to support a slide-in cart drawer across pages
// UX: Centralizes state so Add to Cart can open the drawer and reflect updates immediately
const CartContext = React.createContext(null)

export const CartProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [items, setItems] = React.useState([])

  // Calculate total in a memo to avoid unnecessary work on re-renders
  const total = React.useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items]
  )

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)
  const toggleDrawer = () => setIsDrawerOpen(v => !v)

  // Add item with merge-if-exists to reduce duplicates and decision fatigue
  const addItem = (product, quantity = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(it => it._id === product._id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity }
        return next
      }
      return [
        ...prev,
        {
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.image?.[0],
          quantity: quantity,
        },
      ]
    })
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(it => it._id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setItems(prev =>
      prev.map(it =>
        it._id === id ? { ...it, quantity: Math.max(1, quantity) } : it
      )
    )
  }

  const value = {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    items,
    addItem,
    removeItem,
    updateQuantity,
    total,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = React.useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


