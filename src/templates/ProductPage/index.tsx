import CategoryCard from 'components/CategoryCard'
import { Container } from 'components/Container'
import ContentInfo from 'components/ContentInfo'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Product from 'components/Product'
import ProductInfo from 'components/ProductInfo'
import * as S from './styles'

const ProductPage = () => {
  const product = {
    title: 'new product',
    name: 'XX99 MARK ll HEADPHONES',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2.999,
    image: '/img/image-product.jpg'
  }
  const productInfo = {
    text: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
    items: [
      {
        item: 'Headphone Unit',
        quantity: 1
      },
      {
        item: 'Replacement Earcups',
        quantity: 2
      },
      {
        item: 'User Manual',
        quantity: 1
      },
      {
        item: '3.5mm 5m Audio Cable',
        quantity: 1
      },
      {
        item: 'Travel Bag',
        quantity: 1
      }
    ]
  }
  const categoryCard1 = {
    image: '/img/image-headphones.png',
    link: '/',
    title: 'HEADPHONES'
  }
  const footer = {
    text: 'Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.',
    socialNetworks: {
      facebook: '/',
      instagram: '/',
      twitter: '/'
    }
  }
  const contentInfo = {
    image: '/img/image-best-gear.jpg',
    title: 'BRINGING YOU THE <span>BEST</span> AUDIO GEAR',
    text: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
  }
  return (
    <S.Wrapper>
      <S.BlackContent>
        <Container>
          <Menu />
        </Container>
      </S.BlackContent>
      <Container>
        <S.Button>
          <a>Go Back</a>
        </S.Button>
        <Product {...product} />
        <S.ProductInfo>
          <ProductInfo {...productInfo} />
        </S.ProductInfo>
        <S.CategoryCard>
          <CategoryCard {...categoryCard1} />
          <CategoryCard {...categoryCard1} />
          <CategoryCard {...categoryCard1} />
        </S.CategoryCard>
        <S.ContentInfo>
          <ContentInfo {...contentInfo} />
        </S.ContentInfo>
      </Container>
      <S.BlackContent>
        <Container>
          <Footer {...footer} />
        </Container>
      </S.BlackContent>
    </S.Wrapper>
  )
}
export default ProductPage
