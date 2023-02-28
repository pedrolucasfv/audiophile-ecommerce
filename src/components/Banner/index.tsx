import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type BannerProps = {
  slug?: string
  nameProduct: string
  title?: string
  description?: string
  image?: string
  invert?: boolean
  color?: 'primary' | 'white' | 'black' | 'none'
}

const Banner = ({
  slug,
  nameProduct,
  description,
  image = '/',
  title,
  invert = false,
  color = 'black'
}: BannerProps) => (
  <S.Wrapper color={color} invert={invert}>
    <S.Info>
      <S.Title color={color}>{title}</S.Title>
      <S.NameProduct>{nameProduct}</S.NameProduct>
      <S.Description>{description}</S.Description>
      <Link href={`/product/${slug}`} passHref>
        <a>
          <Button text="SEE PRODUCT" />
        </a>
      </Link>
    </S.Info>
    <S.ImageBox>
      <Image src={image} width={650} height={650} />
    </S.ImageBox>
  </S.Wrapper>
)

export default Banner
