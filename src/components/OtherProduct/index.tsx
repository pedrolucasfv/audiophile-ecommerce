import Button from 'components/Button'
import * as S from './styles'

export type OtherProductProps = {
  nameProduct: string
  image: string
  link: string
}

const OtherProduct = ({ image, nameProduct, link }: OtherProductProps) => (
  <S.Wrapper>
    <S.Image src={image} role="img" aria-label="Product Image" />
    <S.NameProduct>{nameProduct}</S.NameProduct>
    <Button text="SEE PRODUCT" link={link} />
  </S.Wrapper>
)

export default OtherProduct
