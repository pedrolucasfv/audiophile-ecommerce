import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import { SessionProvider } from 'next-auth/react'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <SessionProvider
        session={{
          expires: '1',
          user: { email: 'a', name: 'Delta', image: 'c' }
        }}
      >
        {children}
      </SessionProvider>
    </ThemeProvider>
  )
