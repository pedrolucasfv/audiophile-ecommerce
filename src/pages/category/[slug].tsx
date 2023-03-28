import { GetStaticProps } from 'next'
import Category, { CategoryPageProps } from 'templates/Category'
import PagesMock from 'templates/Category/mock'
import getProducts, { ProductProps } from '../../../utils/services/products'

export default function Index(props: CategoryPageProps) {
  return <Category {...props} />
}

export async function getStaticPaths() {
  const slugs = PagesMock.map((pageMock) => {
    return pageMock.slug
  })

  const paths = slugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = PagesMock.filter((pageMock) => {
    if (pageMock.slug == params?.slug) return pageMock
  })
  const allProducts = (await getProducts)
    ? await getProducts.produtos()
    : undefined
  await console.log(allProducts)
  const products = allProducts?.data.filter((product: ProductProps) => {
    if (product.category == params?.slug) return product
  })
  return {
    props: {
      banners: products
        ? products.map((product: ProductProps) => {
            const banner = {
              nameProduct: product.name,
              description: product.description,
              image: product.image,
              slug: product.productID,
              color: 'none'
            }
            return banner
          })
        : page[0].banners
    }
  }
}
