import { GetStaticProps } from 'next'
import ProductPage, { ProductPageProps } from 'templates/ProductPage'
import PagesMock from 'templates/ProductPage/mock'

export const slugs = [
  'XX99-MARK-II-HEADPHONES',
  'XX59-HEADPHONES',
  'XX99-MARK-I-HEADPHONES',
  'ZX9-SPEAKER',
  'ZX7-SPEAKER',
  'YX1-WIRELESS-EARPHONES'
]

export default function Index(props: ProductPageProps) {
  return <ProductPage {...props} />
}

export async function getStaticPaths() {
  const paths = slugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = PagesMock.filter((pageMock) => {
    if (pageMock.slug == params?.slug) return pageMock
  })
  return {
    props: {
      product: page[0].product,
      productInfo: page[0].productInfo
    }
  }
}
