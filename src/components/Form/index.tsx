import Input from 'components/Input'
import { useState } from 'react'
import getProducts, { ProductProps } from '../../services/products'
import * as S from './styles'

export type FormProps = {
  onChange?: () => void
  type: 'update' | 'add'
  productSelected: ProductProps
}

const Form = ({ onChange, type, productSelected }: FormProps) => {
  const [product, setProduct] = useState<ProductProps>(productSelected)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name == 'price') {
      setProduct({ ...product, [e.target.name]: parseInt(e.target.value) })
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value })
    }
  }

  async function onSubmit() {
    if (type == 'add') {
      const productApi: ProductProps = product
      await getProducts.adicionar(productApi)
    } else if (type == 'update') {
      const productApi: ProductProps = product
      await getProducts.modificar(productSelected.productID, productApi)
    }
    onChange && onChange()
  }

  return (
    <S.Wrapper>
      {type == 'add' && <S.Title>ADD PRODUCT</S.Title>}
      {type == 'update' && <S.Title>UPDATE PRODUCT</S.Title>}
      <S.Input>
        <Input
          name="name"
          label="Product Name"
          placeholder="COLOCA O NOME AI"
          type="text"
          onInput={handleChange}
          initialValue={productSelected.name}
        />
      </S.Input>
      <S.Input>
        <Input
          name="description"
          label="Description"
          placeholder="COLOCA UMA DESCRIÇÃO AI"
          type="text"
          onInput={handleChange}
          initialValue={productSelected.description}
        />
      </S.Input>
      <S.Input>
        <Input
          name="price"
          label="Price"
          placeholder="COLOCA O PREÇO"
          type="number"
          onInput={handleChange}
          initialValue={productSelected.price}
        />
      </S.Input>
      <S.Input>
        <Input
          name="productID"
          label="ProductId"
          placeholder="COLOCA O ID QUE VOCÊ ADICIONOU NO STRIPE"
          type="text"
          onInput={handleChange}
          initialValue={productSelected.productID}
        />
      </S.Input>
      <S.Input>
        <Input
          name="category"
          label="Category"
          placeholder="COLOCA A CATEGORIA AEEEE"
          type="text"
          onInput={handleChange}
          initialValue={productSelected.category}
        />
      </S.Input>
      <S.Input>
        <Input
          name="image"
          label="Image Directory"
          placeholder="COLOCA AI O DIRETORIO DA IMAGEM"
          type="text"
          onInput={handleChange}
          initialValue={productSelected.image}
        />
      </S.Input>

      <S.Button onClick={() => onSubmit()}>ADD</S.Button>
    </S.Wrapper>
  )
}
export default Form
