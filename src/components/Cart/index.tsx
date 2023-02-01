import UnitSelector from 'components/UnitSelector'

import * as S from './styles'

type ItemProps = {
  image: string
  nameProduct: string
  unit: number
  price: string
}
export type CartProps = {
  items?: ItemProps[]
}

const Cart = ({ items = [] }: CartProps) => (
  <S.Wrapper>
    <S.Header>
      <S.Title>CART ({items.length})</S.Title>
    </S.Header>
    {items.map((value) => (
      <>
        <S.Item>
          <S.Image src={value.image} />
          <div>
            <S.Title>{value.nameProduct}</S.Title>
            <S.Price>R$ {value.price}</S.Price>
          </div>
          <UnitSelector unit={value.unit} />
        </S.Item>
      </>
    ))}
  </S.Wrapper>
)

export default Cart
