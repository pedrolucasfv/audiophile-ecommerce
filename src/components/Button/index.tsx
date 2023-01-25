import * as S from './styles'

export type ButtonProps = {
  text: string
  link?: string
  color?: 'primary' | 'white' | 'black'
}

const Button = ({ color = 'primary', text, link = '/' }: ButtonProps) => (
  <S.Wrapper aria-label="button" href={link} color={color}>
    {text}
  </S.Wrapper>
)

export default Button
