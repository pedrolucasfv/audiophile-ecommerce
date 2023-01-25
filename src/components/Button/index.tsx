import * as S from './styles'

export type ButtonProps = {
  text: string
  link?: string
  color?: 'primary' | 'white' | 'black'
}

const Button = ({ color = 'primary', text, link = '/' }: ButtonProps) => (
  <S.Wrapper href={link} color={color}>
    {text}
  </S.Wrapper>
)

export default Button
