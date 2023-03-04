import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  body::-webkit-scrollbar{
    width: 0.8rem;
  }
  body::-webkit-scrollbar-track{
    background: #303030;
    box-shadow: inset 0.05rem 0 0 #838383;
  }
  body::-webkit-scrollbar-thumb{
    background: #d87d4a;
    box-shadow: inset 0.15rem 0.1rem 0.1rem rgba(255,255,255,0.5), inset -0.15rem -0.1rem 0.1rem rgba(0,0,0,0.3);
  }
`

export default GlobalStyles
