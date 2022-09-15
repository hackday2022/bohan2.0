import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import '../firebase/init'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../mui/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp