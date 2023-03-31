import { ProductProps } from 'services/products'
import * as S from './styles'
import Image from 'next/image'
import { useState } from 'react'

export type ProductListProps = {
  products: ProductProps[]
}

const ProductList = ({ products = [] }: ProductListProps) => {
  const [productSelected, setProductSelected] = useState<ProductProps>(
    products[0]
  )
  return (
    <S.Wrapper>
      <S.Heading>List of Products </S.Heading>
      <S.Content>
        <S.ImageWrapper>
          <Image
            src={productSelected.image}
            alt="asdfd"
            layout="fill"
            objectFit="cover"
          />
        </S.ImageWrapper>
        <S.Info>
          <S.Name>{productSelected.name}</S.Name>
          <S.Text>
            <span>Description: </span> {productSelected.description}
          </S.Text>
          <S.Text>
            <span>Price:</span> {productSelected.price}
          </S.Text>
          <S.Text>
            <span>ProductID: </span>
            {productSelected.productID}
          </S.Text>
          <S.Text>
            <span>Category: </span> {products[0].category}
          </S.Text>
        </S.Info>
      </S.Content>
      <S.Products>
        {products?.map((product, index) => (
          <S.Item key={index} onClick={() => setProductSelected(product)}>
            <S.ImageProduct>
              <Image
                src={product.image}
                alt="asdfd"
                layout="fill"
                objectFit="cover"
              />
            </S.ImageProduct>
            <S.ContentItem>
              <S.NameItem>{product.name}</S.NameItem>
              <S.PriceItem>R$ {product.price}</S.PriceItem>
            </S.ContentItem>
          </S.Item>
        ))}
      </S.Products>
    </S.Wrapper>
  )
}

export default ProductList
