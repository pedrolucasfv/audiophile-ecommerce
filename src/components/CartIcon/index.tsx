import * as S from './styles'
import { Cart } from '@styled-icons/bootstrap/Cart'
import { useCart } from 'hooks'

const CartIcon = () => {
  const { totalQuantity } = useCart()
  return (
    <S.Wrapper>
      {totalQuantity > 0 && (
        <S.Badge aria-label="Cart Items">{totalQuantity}</S.Badge>
      )}
      <Cart size={20} aria-label="Cart" />
    </S.Wrapper>
  )
}
export default CartIcon
