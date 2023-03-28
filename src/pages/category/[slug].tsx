import { GetStaticProps } from 'next'
import Category, { CategoryPageProps } from 'templates/Category'
import PagesMock from 'templates/Category/mock'
import getProdutos from '../../../utils/services/produtos'

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
  const pageApi = (await getProdutos) ? await getProdutos.produtos() : undefined
  await console.log(pageApi)
  return {
    props: {
      banners: pageApi
        ? pageApi.data?.map((produto) => {
            const banner = {
              nameProduct: produto.name,
              description: produto.description,
              image: produto.image,
              slug: produto.productID,
              color: 'none'
            }
            return banner
          })
        : page[0].banners
    }
  }
}
