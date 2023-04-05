import { useState } from 'react'
import * as S from './styles'

export type InputProps = {
  name: string
  label: string
  placeholder: string
  initialValue?: string | number
  type: string
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  name,
  initialValue = '',
  label,
  onInput,
  placeholder,
  type
}: InputProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(e)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="no"
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
export default Input
