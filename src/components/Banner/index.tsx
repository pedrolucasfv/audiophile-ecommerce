import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  nameProduct: string
  title?: string
  description?: string
  image?: string
  invert?: boolean
  color?: 'primary' | 'white' | 'black'
}

const Banner = ({
  nameProduct,
  description,
  image,
  title,
  invert = false,
  color = 'black'
}: BannerProps) => (
  <S.Wrapper color={color}>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.NameProduct>{nameProduct}</S.NameProduct>
      <S.Description>{description}</S.Description>
      <Button text="SEE PRODUCT" />
    </S.Info>
    <S.Image src={image} />
  </S.Wrapper>
)

export default Banner
