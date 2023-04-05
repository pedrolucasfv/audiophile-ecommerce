import Image from 'next/image'
import { useState } from 'react'

import { Pencil } from '@styled-icons/bootstrap/Pencil'
import { TrashFill } from '@styled-icons/bootstrap/TrashFill'

import Form from 'components/Form'
import getProducts, { ProductProps } from 'services/products'

import * as S from './styles'

export type ProductListProps = {
  products: ProductProps[]
  onChange?: () => void
}

const ProductList = ({ products = [], onChange }: ProductListProps) => {
  const [productSelected, setProductSelected] = useState<ProductProps>(
    products[0]
  )
  const [formHandler, setFormHandler] = useState<'add' | 'update' | 'none'>(
    'none'
  )

  async function deleteItem(productID: string) {
    getProducts && (await getProducts.deletar(productID))
    onChange && onChange()
  }

  async function updateItem(product: ProductProps) {
    if (formHandler == 'none') {
      setProductSelected(product)
      setFormHandler('update')
    }
  }

  async function addItem() {
    if (formHandler != 'update') {
      setProductSelected({
        name: '',
        price: 0,
        description: '',
        productID: '',
        category: '',
        image: ''
      })
      setFormHandler('add')
    }
  }

  async function finishForm() {
    setFormHandler('none')
    onChange && onChange()
  }

  return (
    <S.Wrapper>
      <S.Heading>List of Products </S.Heading>
      {products?.map((product, index) => (
        <S.Products key={index}>
          <S.Item
            onClick={() =>
              formHandler != 'update' && setProductSelected(product)
            }
          >
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
              <Pencil size={30} onClick={() => updateItem(product)} />
              <TrashFill
                size={30}
                onClick={() => deleteItem(product.productID)}
              />
            </S.Options>
          </S.Item>
          <S.ContentBelowItem>
            {formHandler == 'update' && (
              <>
                {product == productSelected && (
                  <S.Form>
                    <Form
                      onChange={finishForm}
                      type={formHandler}
                      productSelected={productSelected}
                    />
                  </S.Form>
                )}
              </>
            )}
            {formHandler == 'none' && (
              <>
                {product == productSelected && (
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
                        <span>Category: </span> {productSelected.category}
                      </S.Text>
                    </S.Info>
                  </S.Content>
                )}
              </>
            )}
          </S.ContentBelowItem>
        </S.Products>
      ))}
      <S.AddButton onClick={() => addItem()}>ADD PRODUCT</S.AddButton>
      {formHandler == 'add' && (
        <S.Form>
          <Form
            onChange={finishForm}
            type={formHandler}
            productSelected={productSelected}
          />
        </S.Form>
      )}
    </S.Wrapper>
  )
}

export default ProductList
