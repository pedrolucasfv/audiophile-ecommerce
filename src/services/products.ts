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
  produtos: () => Api.get('/products').catch(() => null),
  adicionar: (produto: ProductProps) =>
    Api.post('/products', produto).catch((error) => {
      console.log(error)
      return
    }),
  deletar: (productID: string) =>
    Api.delete(`/products/?productID=${productID}`).catch((error) => {
      console.log(error)
      return
    })
}

export default getProducts
