import * as S from './styles'

export type ItemProps = {
  quantity: number
  item: string
}
export type ProductInfoProps = {
  text: string
  items: ItemProps[]
}

const ProductInfo = ({ items = [], text }: ProductInfoProps) => (
  <S.Wrapper>
    <S.RightContent>
      <S.Title>FEATURES</S.Title>
      <S.Text>{text}</S.Text>
    </S.RightContent>
    <S.RightContent>
      <S.Title>IN THE BOX</S.Title>
      {items.map((value) => (
        <>
          <S.Item>
            <span>{value.quantity}x</span>
            {value.item}
          </S.Item>
        </>
      ))}
    </S.RightContent>
  </S.Wrapper>
)

export default ProductInfo
