import getProducts, { ProductProps } from 'services/products'
import * as S from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { TrashFill } from '@styled-icons/bootstrap/TrashFill'

import { Pencil } from '@styled-icons/bootstrap/Pencil'

export type ProductListProps = {
  products: ProductProps[]
  onChange?: () => void
}

const ProductList = ({ products = [], onChange }: ProductListProps) => {
  const [productSelected, setProductSelected] = useState<ProductProps>(
    products[0]
  )
  async function deleteItem(productID: string) {
    console.log(productID)
    getProducts && (await getProducts.deletar(productID))
    onChange && onChange()
  }
  return (
    <S.Wrapper>
      <S.Heading>List of Products </S.Heading>
      <S.Content>
        <S.ImageWrapper>
          <Image
            src={productSelected.image || '/img/image-product.jpg'}
            layout="fill"
            objectFit="cover"
            alt="Product selected in the productlist."
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
                alt="a product of product list"
                layout="fill"
                objectFit="cover"
              />
            </S.ImageProduct>
            <S.ContentItem>
              <S.NameItem>{product.name}</S.NameItem>
              <S.PriceItem>R$ {product.price}</S.PriceItem>
            </S.ContentItem>
            <S.Options>
              <Pencil size={30} />
              <TrashFill
                size={30}
                onClick={() => deleteItem(product.productID)}
              />
            </S.Options>
          </S.Item>
        ))}
      </S.Products>
    </S.Wrapper>
  )
}

export default ProductList
