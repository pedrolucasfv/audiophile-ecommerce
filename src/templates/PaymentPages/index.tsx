import { Container } from 'components/Container'
import Menu from 'components/Menu'
import * as S from './styles'
import { PatchCheckFill } from '@styled-icons/bootstrap/PatchCheckFill'
import { XOctagonFill } from '@styled-icons/bootstrap/XOctagonFill'
import { useEffect } from 'react'
import { useCart } from 'hooks'

export type PaymentPagesProps = {
  type: string
}

const PaymentPages = ({ type }: PaymentPagesProps) => {
  const { clearCart } = useCart()
  useEffect(() => {
    if (type == 'sucess') {
      clearCart()
    }
  })
  return (
    <S.Wrapper>
      <S.BlackContent>
        <Container>
          <Menu />
        </Container>
      </S.BlackContent>
      <Container>
        <S.Content>
          {type == 'sucess' && (
            <S.Info>
              <PatchCheckFill size={60} color="green" />
              <S.Text>PAGAMENTO REALIZADO COM SUCESSO</S.Text>
            </S.Info>
          )}
          {type == 'failed' && (
            <S.Info>
              <XOctagonFill size={60} color="red" />
              <S.Text>PAGAMENTO RECUSADO</S.Text>
            </S.Info>
          )}
          <S.Button href="/"> Back to Home</S.Button>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}
export default PaymentPages
