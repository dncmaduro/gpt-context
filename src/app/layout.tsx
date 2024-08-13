'use client'

import '@mantine/core/styles.css'
import './globals.css'

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from '~/store/store'

const theme = createTheme({
  luminanceThreshold: 0.5,
  autoContrast: true,
  primaryColor: 'cyan'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>{children}</MantineProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
