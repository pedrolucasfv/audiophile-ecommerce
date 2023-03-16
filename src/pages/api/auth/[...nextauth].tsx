import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ? process.env.AUTH0_CLIENT_ID : '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET
        ? process.env.AUTH0_CLIENT_SECRET
        : '',
      issuer: process.env.AUTH0_ISSUER ? process.env.AUTH0_ISSUER : ''
    }),
    // ...add more providers here
    GitHubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : '',
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : ''
    })
  ]
}

export default NextAuth(authOptions)
