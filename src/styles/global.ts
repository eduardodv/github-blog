import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['blue-500']};
  }

  html {
    min-height: 100svh;
  }

  body {
    position: relative;
    padding-bottom: 7rem;
    min-height: inherit;
    position: relative;
    color: ${(props) => props.theme.colors['base-text']};
    background: ${(props) => props.theme.colors['base-background']};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;

    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors['blue-600']};
    }
  }

  body, input, textarea, button {
    font: 400 ${(props) => props.theme.sizes['text-lg']} Nunito, sans-serif;
  }
`
