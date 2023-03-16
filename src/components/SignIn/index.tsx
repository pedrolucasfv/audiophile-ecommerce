import * as S from './styles'
import { useSession, signIn, signOut } from 'next-auth/react'

const SignIn = () => {
  const { data: session } = useSession()
  return (
    <S.Wrapper>
      {!!session && (
        <>
          <S.Text>
            Signed in as <span>{session.user?.name}</span>
          </S.Text>
          <S.Button onClick={() => signOut()}>Sign Out</S.Button>
        </>
      )}
      {!session && (
        <>
          <S.Text>
            Click on the button above to <span>Sign in</span>
          </S.Text>
          <S.Button onClick={() => signIn()}>Sign in</S.Button>
        </>
      )}
    </S.Wrapper>
  )
}
export default SignIn
