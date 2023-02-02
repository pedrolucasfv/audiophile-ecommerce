import Button from 'components/Button'
import UnitSelector from 'components/UnitSelector'

import * as S from './styles'

type ItemProps = {
  image: string
  nameProduct: string
  unit: number
  price: number
}
export type CartProps = {
  items?: ItemProps[]
}

const Cart = ({ items = [] }: CartProps) => {
  let total = 0

  function sumPrice() {
    items.map((value) => {
      const totalProduct = value.price * value.unit
      console.log(totalProduct)
      total = total + totalProduct
      console.log(total)
    })
  }
  sumPrice()

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>CART ({items.length})</S.Title>
        <S.RemoveAll>Remove All</S.RemoveAll>
      </S.Header>
      {items.map((value) => (
        <>
          <S.Item>
            <S.Image src={value.image} />
            <S.ContentItem>
              <S.NameProduct>{value.nameProduct}</S.NameProduct>
              <S.Price>R$ {value.price}</S.Price>
            </S.ContentItem>
            <UnitSelector unit={value.unit} />
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
