import * as S from './styles'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from 'components/Button'

const SignIn = () => {
  const { data: session } = useSession()
  return (
    <S.Wrapper>
      {session && (
        <>
          <S.Text>
            Signed in as <span>{session.user?.name}</span>
          </S.Text>
          <S.Button onClick={(): Promise<void> => signOut()}>
            <Button text="Sign out" />
          </S.Button>
        </>
      )}
      {!session && (
        <>
          <S.Text>
            Click on the button above to <span>Sign in</span>
          </S.Text>
          <S.Button onClick={(): Promise<void> => signIn()}>
            <Button text="Sign in" />
          </S.Button>
        </>
      )}
    </S.Wrapper>
  )
}
export default SignIn
