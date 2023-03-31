import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Form from 'components/Form'
import Menu from 'components/Menu'
import * as S from './styles'
import ProductList from 'components/ProductList'

const Admin = () => {
  const footer = {
    text: 'Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.',
    socialNetworks: {
      facebook: '/',
      instagram: '/',
      twitter: '/'
    }
  }
  const products = [
    {
      name: 'XX99 MARK ll HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      price: 2.999,
      image: '/img/image-product.jpg',
      productID: '124u81264712',
      category: 'headphones'
    },
    {
      name: 'XX99 MARK ll HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      price: 2.999,
      image: '/img/image-product.jpg',
      productID: '1247612456712',
      category: 'headphones'
    }
  ]
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
          <ProductList products={products} />
        </S.ProductList>
        <Form />
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
