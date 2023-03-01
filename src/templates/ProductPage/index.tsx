import CategoryCard from 'components/CategoryCard'
import { Container } from 'components/Container'
import ContentInfo from 'components/ContentInfo'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import OtherProduct from 'components/OtherProduct'
import Product, { ProductProps } from 'components/Product'
import ProductInfo, { ProductInfoProps } from 'components/ProductInfo'

import categoryCardMock from 'components/CategoryCard/mock'

import * as S from './styles'

export type ProductPageProps = {
  product: ProductProps
  productInfo: ProductInfoProps
}

const ProductPage = ({ product, productInfo }: ProductPageProps) => {
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
  const otherProduct = {
    nameProduct: 'XX99 MARK ll',
    image: '/img/image-product.jpg',
    link: '/'
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
        <S.OtherProductContent>
          <S.OtherProductTitle>YOU MAY ALSO LIKE</S.OtherProductTitle>
          <S.OtherProduct>
            <OtherProduct {...otherProduct} />
            <OtherProduct {...otherProduct} />
            <OtherProduct {...otherProduct} />
          </S.OtherProduct>
        </S.OtherProductContent>
        <S.CategoryCard>
          <CategoryCard {...categoryCardMock[0]} />
          <CategoryCard {...categoryCardMock[1]} />
          <CategoryCard {...categoryCardMock[2]} />
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
