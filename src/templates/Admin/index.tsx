import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Form from 'components/Form'
import Menu from 'components/Menu'
import * as S from './styles'

const Admin = () => {
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
          <S.Title>ADMIN</S.Title>
        </Container>
      </S.BlackContent>
      <Form />
      <S.BlackContent>
        <Container>
          <Footer {...footer} />
        </Container>
      </S.BlackContent>
    </S.Wrapper>
  )
}
export default Admin
