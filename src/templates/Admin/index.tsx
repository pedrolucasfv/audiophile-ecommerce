import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import ProductList from 'components/ProductList'
import { useEffect, useState } from 'react'
import getProducts, { ProductProps } from 'services/products'
import * as S from './styles'

const Admin = () => {
  const initialProduct: ProductProps = {
    name: 'ZX7 SPEAKER',
    description:
      'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    price: 350,
    image: '/img/product-zx7-speaker/desktop/image-product.jpg',
    productID: 'price_1MmdjeC8ZSL4Yw9IR7pF76ZI',
    category: 'speakers'
  }
  const [products, setProducts] = useState([initialProduct])
  const [handleChange, setHandleChange] = useState(false)

  const footer = {
    text: 'Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.',
    socialNetworks: {
      facebook: '/',
      instagram: '/',
      twitter: '/'
    }
  }

  useEffect(() => {
    async function Api() {
      const allProducts = (await getProducts)
        ? await getProducts.produtos()
        : undefined
      await console.log(allProducts)
      await setProducts(allProducts?.data)
    }
    Api()
  }, [handleChange])

  const onChange = () => {
    setHandleChange(!handleChange)
  }
  return (
    <S.Wrapper>
      <S.BlackContent>
        <Container>
          <Menu />
          <S.Title>ADMIN</S.Title>
        </Container>
      </S.BlackContent>
      <Container>
        <S.ProductList>
          <ProductList products={products} onChange={onChange} />
        </S.ProductList>
      </Container>
      <S.BlackContent>
        <Container>
          <Footer {...footer} />
        </Container>
      </S.BlackContent>
    </S.Wrapper>
  )
}
export default Admin
