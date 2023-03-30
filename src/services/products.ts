import Api from './api'

export type ProductProps = {
  name: string
  price: number
  description: string
  productID: string
  image: string
  category: string
}

const getProducts = {
  produtos: () => Api.get('/produtos').catch(() => null),
  adicionar: (produto: ProductProps) =>
    Api.post('/produtos', produto).catch((error) => {
      console.log(error)
      return
    })
}

export default getProducts
