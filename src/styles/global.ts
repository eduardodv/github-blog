import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['blue-500']};
  }

  body {
    color: ${(props) => props.theme.colors['base-text']};
    background: ${(props) => props.theme.colors['base-background']};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }

  body, input, textarea, button {
    font: 400 ${(props) => props.theme.sizes['text-lg']} Nunito, sans-serif;
  }
`
