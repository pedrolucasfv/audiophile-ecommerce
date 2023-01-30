import Button from 'components/Button'
import UnitSelector from 'components/UnitSelector'
import * as S from './styles'

export type ProductProps = {
  title?: string
  name: string
  description: string
  price: number
  image: string
}

const Product = ({ description, name, price, title, image }: ProductProps) => (
  <S.Wrapper>
    <S.Image src={image} />
    <S.Content>
      {!!title && <S.Title>{title}</S.Title>}
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.Price>$ {price}</S.Price>
      <S.Buttons>
        <S.UnitSelector>
          <UnitSelector />
        </S.UnitSelector>
        <Button text="ADD TO CART" />
      </S.Buttons>
    </S.Content>
  </S.Wrapper>
)

export default Product
