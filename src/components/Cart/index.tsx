import Button from 'components/Button'
import UnitSelector from 'components/UnitSelector'
import { useCart } from 'hooks'

import * as S from './styles'

const Cart = () => {
  const total = 0

  const { items } = useCart()

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>CART ({items?.length})</S.Title>
        <S.RemoveAll>Remove All</S.RemoveAll>
      </S.Header>
      {items?.map((value) => (
        <>
          <S.Item>
            <S.Image src={value.image} />
            <S.ContentItem>
              <S.NameProduct>{value.name}</S.NameProduct>
              <S.Price>R$ {value.price}</S.Price>
            </S.ContentItem>
            <UnitSelector unit={1} />
          </S.Item>
        </>
      ))}
      <S.TotalContent>
        <S.Total>TOTAL</S.Total>
        <S.PriceTotal>R${total}</S.PriceTotal>
      </S.TotalContent>
      <Button text="CHECKOUT" />
    </S.Wrapper>
  )
}
export default Cart
