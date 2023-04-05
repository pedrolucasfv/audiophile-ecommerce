import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 80rem;
    margin: 3rem auto;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.small};
    border-radius: 1rem;
    border: 0.5rem solid ${theme.colors.accent};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    animation: form-animation 1s forwards;
    @keyframes form-animation {
      0% {
        transform: translateY(-500px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `}
`

export const Input = styled.div`
  margin-bottom: 5rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    margin-bottom: 5rem;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    letter-spacing: 0.5rem;
    font-weight: ${theme.font.bold};
    border-radius: 1rem;
    border: 0.2rem solid ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    cursor: pointer;
    :hover {
      background-color: ${theme.colors.accentLight};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5rem solid ${theme.colors.accent};
  `}
`
