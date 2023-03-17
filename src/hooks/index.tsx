import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from '../../utils/localStorage/index'

const CART_KEY = 'AUDIOPHILE'

export type ItemProps = {
  name: string
  price: number
  image: string
  quantity: number
  productID: string
}

export type CartContextData = {
  items: ItemProps[]
  totalQuantity: number
  totalPrice: number
  isInCart: (itemName: string) => boolean
  addToCart: (item: ItemProps) => void
  removeFromCart: (itemName: string) => void
  updateItemQuantity: (itemName: string, quantity: number) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  updateItemQuantity: () => null,
  clearCart: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)
export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ItemProps[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    const dataObject = data?.map((item: string) => {
      const itemAux = item.split(',')

      const itemFinal = itemAux.map((item) => {
        const aux = item.split(':')
        return aux[1]
      })

      return {
        name: itemFinal[0],
        image: itemFinal[1],
        price: parseInt(itemFinal[2]),
        quantity: parseInt(itemFinal[3]),
        productID: itemFinal[4]
      }
    })

    if (dataObject) {
      setCartItems(dataObject)
    }
  }, [])

  const isInCart = (itemName: string) => {
    const cartItemsName = cartItems.map((itemMap) => {
      return itemMap.name
    })
    return cartItemsName.includes(itemName)
  }

  const saveCart = (items: ItemProps[]) => {
    setCartItems(items)
    const newItemsString = items?.map((item) => {
      return (
        `name:${item.name},` +
        `image:${item.image},` +
        `price:${item.price},` +
        `quantity:${item.quantity},` +
        `productID:${item.productID}`
      )
    })
    setStorageItem(CART_KEY, newItemsString)
  }

  const addToCart = (item: ItemProps) => {
    saveCart([...cartItems, item])
  }

  const removeFromCart = (itemName: string) => {
    const newCartItems = cartItems.filter(
      (itemMap) => itemMap.name !== itemName
    )
    saveCart(newCartItems)
  }

  const updateItemQuantity = (itemName: string, quantity: number) => {
    const newCartItems = cartItems.map((itemMap) => {
      if (itemMap.name == itemName) {
        itemMap.quantity = quantity
      }
      return itemMap
    })
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  const totalQuantity =
    cartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const totalPrice =
    cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0) || 0

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        isInCart,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
