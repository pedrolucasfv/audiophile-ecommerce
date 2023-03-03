import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from '../../utils/localStorage/index'

const CART_KEY = 'AUDIOPHILE'

export type ItemProps = {
  name: string
  price: number
  image: string
}

export type CartContextData = {
  items: ItemProps[]
  isInCart: (item: ItemProps) => boolean
  addToCart: (item: ItemProps) => void
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
  const [cartItems, setCartItems] = useState<ItemProps[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    const dataObject = data.map((item: string) => {
      const itemAux = item.split(',')

      const itemFinal = itemAux.map((item) => {
        const aux = item.split(':')
        return aux[1]
      })

      return {
        name: `${itemFinal[0]}`,
        image: `${itemFinal[1]}`,
        price: `${itemFinal[2]}`
      }
    })

    if (dataObject) {
      setCartItems(dataObject)
    }
  }, [])

  const isInCart = (item: ItemProps) =>
    item ? cartItems.includes(item) : false

  const addToCart = (item: ItemProps) => {
    const newItems = [...cartItems, item]
    setCartItems(newItems)
    const newItemsString = newItems.map((item) => {
      return (
        `name:${item.name},` + `image:${item.image},` + `price:${item.price}`
      )
    })
    setStorageItem(CART_KEY, newItemsString)
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
