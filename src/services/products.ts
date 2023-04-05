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
  adicionar: (product: ProductProps) =>
    Api.post('/products', product).catch((error) => {
      console.log(error)
      return
    }),
  deletar: (productID: string) =>
    Api.delete(`/products/?productID=${productID}`).catch((error) => {
      console.log(error)
      return
    }),
  modificar: (productID: string, product: ProductProps) =>
    Api.put(`/products/?productID=${productID}`, product).catch((error) => {
      console.log(error)
      return
    })
}

export default getProducts
