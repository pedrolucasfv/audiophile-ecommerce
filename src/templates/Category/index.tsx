import Banner from 'components/Banner'
import CategoryCard from 'components/CategoryCard'
import { Container } from 'components/Container'
import ContentInfo from 'components/ContentInfo'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useRouter } from 'next/router'
import * as S from './styles'
import bannerMock from 'templates/Category/mock'

const Category = () => {
  const router = useRouter()
  const categoryCard1 = {
    image: '/img/image-headphones.png',
    link: '/',
    title: 'HEADPHONES'
  }
  const contentInfo = {
    image: '/img/image-best-gear.jpg',
    title: 'BRINGING YOU THE <span>BEST</span> AUDIO GEAR',
    text: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
  }

  const footer = {
    text: 'Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.',
    socialNetworks: {
      facebook: '/',
      instagram: '/',
      twitter: '/'
    }
  }
  return (
    <S.Wrapper>
      <S.BlackContent>
        <Container>
          <Menu />
          <S.Title>{router?.query.slug}</S.Title>
        </Container>
      </S.BlackContent>
      <Container>
        <S.BannerContent>
          <Banner {...bannerMock[0].banners[0]} invert />
          <Banner {...bannerMock[0].banners[1]} />
          <Banner {...bannerMock[0].banners[2]} invert />
        </S.BannerContent>
        <S.CategoryCard>
          <CategoryCard {...categoryCard1} />
          <CategoryCard {...categoryCard1} />
          <CategoryCard {...categoryCard1} />
        </S.CategoryCard>
        <S.Content>
          <ContentInfo {...contentInfo} />
        </S.Content>
      </Container>
      <S.BlackContent>
        <Container>
          <Footer {...footer} />
        </Container>
      </S.BlackContent>
    </S.Wrapper>
  )
}
export default Category
