import Home, { HomeProps } from 'templates/Home'
import HomeMock from 'templates/Home/mock'

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      mainBanner: HomeMock[0],
      secondBanner: HomeMock[1],
      thirdBanner: HomeMock[2],
      simpleBanner: HomeMock[3]
    }
  }
}
