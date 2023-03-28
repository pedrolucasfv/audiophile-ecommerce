import Input from 'components/Input'
import * as S from './styles'
import { useState } from 'react'
const Form = () => {
  const [product, setProduct] = useState({})
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  function onSubmit() {
    console.log(product)
  }

  return (
    <S.Wrapper>
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
      <S.Button onClick={() => onSubmit()}>SUBMIT</S.Button>
    </S.Wrapper>
  )
}
export default Form
