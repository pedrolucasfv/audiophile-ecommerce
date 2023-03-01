import Home, { HomeProps } from 'templates/Home'
import HomeMock from 'templates/Home/mock'

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      mainBanner: HomeMock[0].mainBanner,
      secondBanner: HomeMock[0].secondBanner,
      thirdBanner: HomeMock[0].thirdBanner,
      simpleBanner: HomeMock[0].simpleBanner
    }
  }
}
