import { createTheme, NextUIProvider } from '@nextui-org/react'
import '@styles/global.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#f3f3f3',
      text: '#000',
      accents0: '#fff',
      accents1: '#f1f3f5'
    },
    space: {},
    fonts: {
      sans: 'Segoe UI,Tahoma,Geneva,Verdana,sans-serif'
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1e1e1e',
      //   accents0: '#16181A',
      accents0: '#090000',
      text: '#ffffff'
    },
    space: {},
    fonts: {
      sans: 'Segoe UI,Tahoma,Geneva,Verdana,sans-serif'
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}
