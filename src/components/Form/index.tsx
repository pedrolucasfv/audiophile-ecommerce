import * as S from './styles'
import { useState } from 'react'
import getProducts, { ProductProps } from '../../services/products'
import Input from 'components/Input'

const Form = () => {
  const [product, setProduct] = useState<ProductProps>({
    name: '',
    description: '',
    category: '',
    image: '',
    price: 0,
    productID: ''
  })
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name == 'price') {
      setProduct({ ...product, [e.target.name]: parseInt(e.target.value) })
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value })
    }
  }
  async function onSubmit() {
    const productApi: ProductProps = product
    await getProducts.adicionar(productApi)
    console.log(product)
  }

  return (
    <S.Wrapper>
      <S.Title>ADD PRODUCT</S.Title>
      <S.Input>
        <Input
          name="name"
          label="Product Name"
          placeholder="COLOCA O NOME AI"
          type="text"
          onInput={handleChange}
        />
      </S.Input>
      <S.Input>
        <Input
          name="description"
          label="Description"
          placeholder="COLOCA UMA DESCRIÇÃO AI"
          type="text"
          onInput={handleChange}
        />
      </S.Input>
      <S.Input>
        <Input
          name="price"
          label="Price"
          placeholder="COLOCA O PREÇO"
          type="number"
          onInput={handleChange}
        />
      </S.Input>
      <S.Input>
        <Input
          name="productID"
          label="ProductId"
          placeholder="COLOCA O ID QUE VOCÊ ADICIONOU NO STRIPE"
          type="text"
          onInput={handleChange}
        />
      </S.Input>
      <S.Input>
        <Input
          name="category"
          label="Category"
          placeholder="COLOCA A CATEGORIA AEEEE"
          type="text"
          onInput={handleChange}
        />
      </S.Input>
      <S.Input>
        <Input
          name="image"
          label="Image Directory"
          placeholder="COLOCA AI O DIRETORIO DA IMAGEM"
          type="text"
          onInput={handleChange}
        />
      </S.Input>
      <S.Button onClick={() => onSubmit()}>ADD</S.Button>
    </S.Wrapper>
  )
}
export default Form
