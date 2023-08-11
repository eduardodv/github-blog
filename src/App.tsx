import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { SkeletonTheme } from 'react-loading-skeleton'
import { ScrollTop } from './components/ScrollTop'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <SkeletonTheme
          baseColor={defaultTheme.colors['base-post']}
          highlightColor={defaultTheme.colors['base-label']}
        >
          <Router />
        </SkeletonTheme>
        <ScrollTop />
      </BrowserRouter>
    </ThemeProvider>
  )
}
