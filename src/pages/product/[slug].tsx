import { GetStaticProps } from 'next'
import ProductPage, { ProductPageProps } from 'templates/ProductPage'
import PagesMock from 'templates/ProductPage/mock'

export default function Index(props: ProductPageProps) {
  return <ProductPage {...props} />
}

export async function getStaticPaths() {
  const slugs = PagesMock.map((pageMock) => {
    return pageMock.slug
  })
  console.log(slugs)
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
      productInfo: page[0].productInfo,
      otherProduct: page[0].otherProduct,
      gallery: page[0].gallery
    }
  }
}
