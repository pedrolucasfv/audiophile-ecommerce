import * as S from './styles'

type ItemProps = {
  quantity: number
  item: string
}
export type ProductInfoProps = {
  text: string
  items: ItemProps[]
}

const ProductInfo = ({ items, text }: ProductInfoProps) => (
  <S.Wrapper>
    <S.LeftContent>
      <S.Title>FEATURES</S.Title>
      <S.Text>{text}</S.Text>
    </S.LeftContent>
    <S.RightContent>
      <S.Title>IN THE BOX</S.Title>
      <S.Items>
        {items.map((value) => (
          <>
            <S.Item>
              <span>{value.quantity}x</span>
              {value.item}
            </S.Item>
          </>
        ))}
      </S.Items>
    </S.RightContent>
  </S.Wrapper>
)

export default ProductInfo
