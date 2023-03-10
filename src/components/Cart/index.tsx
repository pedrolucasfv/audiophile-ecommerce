import Button from 'components/Button'
import UnitSelector from 'components/UnitSelector'
import { useCart } from 'hooks'

import * as S from './styles'

const Cart = () => {
  const {
    items,
    totalQuantity,
    clearCart,
    totalPrice,
    updateItemQuantity,
    removeFromCart
  } = useCart()

  const handleUnitItem = (unit: number, itemName: string) => {
    if (unit == 0) removeFromCart(itemName)
    else updateItemQuantity(itemName, unit)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>CART ({totalQuantity})</S.Title>
        <S.RemoveAll onClick={() => clearCart()}>Remove All</S.RemoveAll>
      </S.Header>
      {items?.map((value) => (
        <>
          <S.Item>
            <S.Image src={value.image} />
            <S.ContentItem>
              <S.NameProduct>{value.name}</S.NameProduct>
              <S.Price>R$ {value.price}</S.Price>
            </S.ContentItem>
            <UnitSelector
              unit={value.quantity}
              func={handleUnitItem}
              name={value.name}
            />
          </S.Item>
        </>
      ))}
      <S.TotalContent>
        <S.Total>TOTAL</S.Total>
        <S.PriceTotal>R${totalPrice}</S.PriceTotal>
      </S.TotalContent>
      <Button text="CHECKOUT" />
    </S.Wrapper>
  )
}
export default Cart
