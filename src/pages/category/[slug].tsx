import { GetStaticProps } from 'next'
import Category, { CategoryPageProps } from 'templates/Category'
import PagesMock from 'templates/Category/mock'

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
  return {
    props: {
      banners: page[0].banners
    }
  }
}
