import Button from 'components/Button'
import UnitSelector from 'components/UnitSelector'
import { useCart } from 'hooks'
import { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'

export type ProductProps = {
  title?: string
  name: string
  description: string
  price: number
  image: string
  productID: string
}

const Product = ({
  description,
  name,
  price,
  title,
  image,
  productID
}: ProductProps) => {
  const { addToCart, isInCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (unit: number) => {
    setQuantity(unit)
  }
  const addItemToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isInCart(name))
      addToCart({
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        productID: productID
      })
  }

  return (
    <S.Wrapper>
      <S.Image>
        <Image
          src={image}
          alt="the product of this page"
          layout="fill"
          objectFit="contain"
        />
      </S.Image>
      <S.Content>
        {!!title && <S.Title>{title}</S.Title>}
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <S.Price aria-label="price">$ {price}</S.Price>
        <S.Buttons>
          <S.UnitSelector>
            <UnitSelector func={handleQuantity} />
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
