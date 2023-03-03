import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from '../../utils/localStorage/index'

const CART_KEY = 'AUDIOPHILE'

export type CartContextData = {
  items: string[]
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
}

export const CartContextDefaultValues = {
  items: [],
  isInCart: () => false,
  addToCart: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)
export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const addToCart = (id: string) => {
    const newItems = [...cartItems, id]
    setCartItems(newItems)
    setStorageItem(CART_KEY, cartItems)
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        isInCart,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
