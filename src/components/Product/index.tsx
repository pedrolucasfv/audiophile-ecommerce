import Button from 'components/Button'
import UnitSelector from 'components/UnitSelector'
import { useCart } from 'hooks'
import * as S from './styles'

export type ProductProps = {
  title?: string
  name: string
  description: string
  price: number
  image: string
}

const Product = ({ description, name, price, title, image }: ProductProps) => {
  const { addToCart } = useCart()
  const addItemToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({ name: name, image: image, price: price })
  }
  return (
    <S.Wrapper>
      <S.Image src={image} />
      <S.Content>
        {!!title && <S.Title>{title}</S.Title>}
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <S.Price aria-label="price">$ {price}</S.Price>
        <S.Buttons>
          <S.UnitSelector>
            <UnitSelector />
          </S.UnitSelector>
          <S.Button onClick={(e) => addItemToCart(e)}>
            <Button text="ADD TO CART" />
          </S.Button>
        </S.Buttons>
      </S.Content>
    </S.Wrapper>
  )
}
export default Product
