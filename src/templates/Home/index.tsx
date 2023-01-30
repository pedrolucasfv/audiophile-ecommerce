import Banner from 'components/Banner'
import { Container } from 'components/Container'
import Menu from 'components/Menu'
import * as S from './styles'

const Home = () => {
  const banner = {
    title: 'new product',
    nameProduct: 'XX99 MARK II HEADPHONES',
    color: 'black' as 'black' | 'primary' | 'white',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    image: '/img/image-hero.jpg'
  }
  return (
    <S.Wrapper>
      <S.ContainerTop>
        <Container>
          <Menu />
          <Banner
            nameProduct={banner.nameProduct}
            color={banner.color}
            description={banner.description}
            image={banner.image}
            title={banner.title}
          />
        </Container>
      </S.ContainerTop>
    </S.Wrapper>
  )
}
export default Home
