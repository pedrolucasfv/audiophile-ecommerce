import Button from 'components/Button'
import * as S from './styles'

export type OtherProductProps = {
  nameProduct: string
  image: string
}

const OtherProduct = ({ image, nameProduct }: OtherProductProps) => (
  <S.Wrapper>
    <S.Image src={image} />
    <S.NameProduct>{nameProduct}</S.NameProduct>
    <Button text="SEE PRODUCT" />
  </S.Wrapper>
)

export default OtherProduct
