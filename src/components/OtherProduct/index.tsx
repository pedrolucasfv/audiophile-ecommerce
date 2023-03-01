import Button from 'components/Button'
import * as S from './styles'

export type OtherProductProps = {
  name: string
  image: string
  slug: string
}

const OtherProduct = ({ image, name, slug }: OtherProductProps) => (
  <S.Wrapper>
    <S.Image src={image} role="img" aria-label="Product Image" />
    <S.NameProduct>{name}</S.NameProduct>
    <Button text="SEE PRODUCT" link={slug} />
  </S.Wrapper>
)

export default OtherProduct
