import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      sd
    </ThemeProvider>
  )
}

export default App
